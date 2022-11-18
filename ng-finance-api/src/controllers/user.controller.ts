import { Request, Response } from "express"
import { userRepository } from "../database/repositories/user.repository"
import { loginservice } from "../services/login.service";

export class UserController {

    private service: loginservice;

    constructor() {
      this.service = new loginservice();
    }

    async create(req: Request, res: Response) {
        const newUser = await this.service.create(req.body);
        res.status(200).json(newUser);
    }
}