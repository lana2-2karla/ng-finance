import { Request, Response } from 'express'
import { TransactionService } from '../services/transaction.service'

export class TransactionController {
  private readonly _service = new TransactionService()

  async create (req: Request, res: Response): Promise<Response> {
    const updatedMessage = await this._service.create(req.data, req.body)
    return res.status(200).json(updatedMessage)
  }

  async getByTransactionCashIn (req: Request, res: Response): Promise<Response> {
    const transaction = await this._service.getByTransactionCashIn(req.data)
    return res.status(200).json(transaction)
  }

  async getByTransactionCashOut (req: Request, res: Response): Promise<Response> {
    const transaction = await this._service.getByTransactionCashOut(req.data)
    return res.status(200).json(transaction)
  }

  async getTransactions (req: Request, res: Response): Promise<Response> {
    const transactions = await this._service.getTransactions(req.data)
    return res.status(200).json(transactions)
  }
}
