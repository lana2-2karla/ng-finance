import { DeepPartial } from "typeorm";
import Accounts from "../database/entities/Account";
import Users from "../database/entities/User";

export interface Ilogin {
    username: string;
    password: string;
  }

export interface IuserCreated {
  id: number;
  username:string;
  password: string;
}
  