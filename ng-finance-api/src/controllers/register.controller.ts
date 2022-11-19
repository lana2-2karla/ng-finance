import { Request, Response } from "express"
import { RegisterService } from "../services/register.service";

export class UserController {

  private _service = new RegisterService()

    async create(req: Request, res: Response) {
        const newUser = await this._service.create(req.body)
        res.status(200).json(newUser);
    }

    async getUserById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const user = await this._service.getUserById(id);
        return res.status(200).json(user);
    }
}