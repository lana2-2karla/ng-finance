/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import Accounts from '../database/entities/Account'
import { accountRepository } from '../database/repositories/account.repository'
import { ApiError } from '../helpers/api-error'

export class AccountService {
  async create (): Promise<Accounts> {
    const newAccount = accountRepository.create({
      balance: 100
    })

    await accountRepository.save(newAccount)
    return newAccount
  }

  async getAccount (accountId: string): Promise<Accounts> {
    const account = await accountRepository.findOneBy({ id: accountId })
    if (account === null) {
      throw new ApiError('Account not exist', 400)
    }
    return account
  }

  async updateAccount (
    transactionType: string,
    value: number,
    accountId: string): Promise<string> {
    if (!value) throw new ApiError('value not exist', 400)

    const currentAccountValue = await this.getAccount(accountId)

    if (transactionType === 'cash-in') {
      currentAccountValue.balance += value
    } else {
      currentAccountValue.balance -= value
    }

    const save = await accountRepository.save(currentAccountValue)
    if (!save) throw new ApiError('transaction not performed', 400)

    return 'successful transaction'
  }
}
