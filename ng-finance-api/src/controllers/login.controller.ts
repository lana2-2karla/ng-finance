import { Request, Response } from 'express'
import { Login } from '../services/login.service'

export class LoginController {
  private readonly _service = new Login()

  async authUser (req: Request, res: Response): Promise<Response> {
    const token = await this._service.authUser(req.body)
    return res.status(200).json(token)
  }
}
