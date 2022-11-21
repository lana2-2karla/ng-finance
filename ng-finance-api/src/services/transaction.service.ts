import { JwtPayload } from "jsonwebtoken";
import { transactionRepository } from "../database/repositories/transaction.repository";
import { ApiError } from "../helpers/api-error";
import { ITransactionCreated } from "../interfaces/interface";
import { AccountService } from "../services/account.service"
import { RegisterService } from "./register.service";

export class TransactionService {

    private _service = new AccountService();
    private _serviceUser = new RegisterService();

    async authTransaction(
        userData: JwtPayload, 
        recipientDate: ITransactionCreated) {

            if (userData.username == recipientDate.username) {
                throw new ApiError('invalid recipient', 400);
            } 
            const userAccount = await this._service.getAccount(userData.accountId);
    
            if (userAccount.balance < recipientDate.value) {
                throw new ApiError('insufficient funds', 400)
            }
        }

    async create(userData: JwtPayload, recipientDate: ITransactionCreated) {

        await this.authTransaction(userData, recipientDate);

        await this._service.updateAccount(
            'cash-out', 
            recipientDate.value, 
            userData.accountId);

        const recipient = await this._serviceUser
            .getUserByname(recipientDate.username)

        await this._service.updateAccount(
            'cash-in', 
            recipientDate.value, 
            recipient.accountId);

        const transaction = transactionRepository.create({
            debitedAccountId: userData.accountId,
            creditedAccountId: recipient.accountId,
            value: recipientDate.value,
        })
        await transactionRepository.save(transaction)
        return transaction;
    }

    async getByTransactionCashIn(userData: JwtPayload) {
        const transactions = await transactionRepository.findBy({
            debitedAccountId: userData.accountId
        })
        return transactions;
    }
}