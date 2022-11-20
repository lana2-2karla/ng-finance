import { JwtPayload } from "jsonwebtoken";
import Accounts from "../database/entities/Account";
import { accountRepository } from "../database/repositories/account.repository";
import { ApiError } from "../helpers/api-error";

export class AccountService {

    async create(): Promise<Accounts> {
        const newAccount = accountRepository.create({
            balance: 100
        })

        await accountRepository.save(newAccount);
        return newAccount;
    }

    async getAccount(userData: JwtPayload): Promise<Accounts> {
        const { accountId } = userData;
        const account = await accountRepository.findOneBy({ id: accountId });
        if ( account === null ) {
            throw new ApiError('Account not exist', 400);
        }
        return account;
    }
}