import { Request, Response } from "express"
import { Loginservice } from "../services/login.service";

export class UserController {

  private service = new Loginservice()

    async create(req: Request, res: Response) {
        const newUser = await this.service.create(req.body)
        res.status(200).json(newUser);
    }
}