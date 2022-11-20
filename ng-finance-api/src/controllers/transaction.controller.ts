import { Request, Response } from "express";
import { TransactionService } from "../services/transaction.service";

export class TransactionController {

    private _service = new TransactionService()

    async create(req: Request, res: Response) {
        const updatedMessage = await this._service.create(req.data, req.body);
        return res.status(200).json(updatedMessage);
    }
}