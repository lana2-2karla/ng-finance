import { Request, Response } from "express";
import { AccountService } from "../services/account.service";

export class AccountController {

     private _service = new AccountService();

    async getAccountById(req: Request, res: Response): Promise<Response> {
        const {id} = req.params;
        const balance = await this._service.getAccountById(id, req.data);
        return res.status(200).json(balance);
    }
}