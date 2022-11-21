import { Request, Response } from "express"
import { RegisterService } from "../services/register.service";

export class UserController {

  private _service = new RegisterService()

    async create(req: Request, res: Response) {
        const newUser = await this._service.create(req.body)
        res.status(200).json(newUser);
    }

    async getUser(req: Request, res: Response): Promise<Response> {
        const user = await this._service.getUser(req.data.id);
        return res.status(200).json(user);
    }
}