import { Request, Response } from "express"
import { userRepository } from "../database/repositories/user.repository"

export const test = async (_req:Request, res:Response) => {
    const users = await userRepository.find()
    return res.status(200).json(users)
}