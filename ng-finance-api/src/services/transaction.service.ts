import { JwtPayload } from 'jsonwebtoken'
import Transactions from '../database/entities/Transaction'
import { transactionRepository } from '../database/repositories/transaction.repository'
import { ApiError } from '../helpers/api-error'
import { ITransactionCreated } from '../interfaces/interface'
import { AccountService } from '../services/account.service'
import { UserService } from './user.service'

export class TransactionService {
  private readonly _service = new AccountService()
  private readonly _serviceUser = new UserService()

  async authTransaction (
    userData: JwtPayload,
    recipientDate: ITransactionCreated): Promise<void> {
    if (userData.username === recipientDate.username) {
      throw new ApiError('invalid recipient', 400)
    }
    const userAccount = await this._service.getAccount(userData.accountId)

    if (userAccount.balance < recipientDate.value) {
      throw new ApiError('insufficient funds', 400)
    }
  }

  async create (userData: JwtPayload, recipientDate: ITransactionCreated): Promise<Transactions> {
    await this.authTransaction(userData, recipientDate)

    await this._service.updateAccount(
      'cash-out',
      recipientDate.value,
      userData.accountId)

    const recipient = await this._serviceUser
      .getUserByname(recipientDate.username)

    await this._service.updateAccount(
      'cash-in',
      recipientDate.value,
      recipient.accountId)

    const transaction = transactionRepository.create({
      debitedAccountId: userData.accountId,
      creditedAccountId: recipient.accountId,
      value: recipientDate.value
    })
    await transactionRepository.save(transaction)
    return transaction
  }

  async getByTransactionCashIn (userData: JwtPayload): Promise<Transactions[]> {
    const transactions = await transactionRepository.findBy({
      debitedAccountId: userData.accountId
    })
    return transactions
  }

  async getByTransactionCashOut (userData: JwtPayload): Promise<Transactions[]> {
    const transactions = await transactionRepository.findBy({
      creditedAccountId: userData.accountId
    })
    return transactions
  }

  async getTransactions (userData: JwtPayload): Promise<Transactions[]> {
    const transactions = await transactionRepository.find({
      where: [
        { debitedAccountId: userData.accountId },
        { creditedAccountId: userData.accountId }
      ]
    })
    return transactions
  }
}
