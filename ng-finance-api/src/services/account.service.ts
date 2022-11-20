import { JwtPayload } from "jsonwebtoken";
import Accounts from "../database/entities/Account";
import { accountRepository } from "../database/repositories/account.repository";
import { RegisterService } from "./register.service";

export class AccountService {

    //private _register = new RegisterService;

    async create(): Promise<Accounts> {
        const newAccount = accountRepository.create({
            balance: 100
        })

        await accountRepository.save(newAccount);
        return newAccount;
    }

    async getAccountById(userData: JwtPayload) {
        const { accountId } = userData;
        const account = accountRepository.findOneBy({ id: accountId });
        return account;
    }
}