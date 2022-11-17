import { AppDataSource } from "../../data-source";
import Accounts from "../entities/Account";

export const accountRepository = AppDataSource.getRepository(Accounts);