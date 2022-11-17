import { AppDataSource } from "../../data-source";
import Users from "../entities/User";

export const userRepository = AppDataSource.getRepository(Users);

