import { Request, Response } from "express"
import { RegisterService } from "../services/register.service";

export class UserController {

  private service = new RegisterService()

    async create(req: Request, res: Response) {
        const newUser = await this.service.create(req.body)
        res.status(200).json(newUser);
    }
}