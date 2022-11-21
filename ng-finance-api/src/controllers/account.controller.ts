import { Request, Response } from 'express'
import { AccountService } from '../services/account.service'

export class AccountController {
  private readonly _service = new AccountService()

  async getAccount (req: Request, res: Response): Promise<Response> {
    const account = await this._service.getAccount(req.data.accountId)
    return res.status(200).json(account)
  }
}
