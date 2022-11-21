import { Request, Response } from "express";
import { TransactionService } from "../services/transaction.service";

export class TransactionController {

    private _service = new TransactionService()

    async create(req: Request, res: Response) {
        const updatedMessage = await this._service.create(req.data, req.body);
        return res.status(200).json(updatedMessage);
    }

    async getByTransactionCashIn(req: Request, res: Response) {
        const transaction = await this._service.getByTransactionCashIn(req.data);
        return res.status(200).json(transaction);
    }
}