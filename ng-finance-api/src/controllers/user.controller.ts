import { Request, Response } from 'express'
import { UserService } from '../services/user.service'

export class UserController {
  private readonly _service = new UserService()

  async create (req: Request, res: Response): Promise<Response> {
    const newUser = await this._service.create(req.body)
    return res.status(200).json(newUser)
  }

  async getUser (req: Request, res: Response): Promise<Response> {
    const user = await this._service.getUser(req.data.id)
    return res.status(200).json(user)
  }
}
