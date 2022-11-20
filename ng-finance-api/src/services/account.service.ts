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

    async getAccountById(id: string, dataId:string) {
        //const user = this._register.getUserById(id, dataId)
    }
}