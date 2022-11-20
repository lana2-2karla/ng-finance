import { JwtPayload } from "jsonwebtoken";
import { ApiError } from "../helpers/api-error";
import { ITransactionCreated } from "../interfaces/interface";
import { AccountService } from "../services/account.service"

export class TransactionService {

    private _service = new AccountService();

    async create(userData: JwtPayload, recipientDate: ITransactionCreated) {
        if (userData.username == recipientDate.username) {
            throw new ApiError('invalid recipient', 400);
        }
        const userAccount = await this._service.getAccount(userData);

        if (userAccount.balance < recipientDate.value) {
            throw new ApiError('insufficient funds', 400)
        }
        
    }
}