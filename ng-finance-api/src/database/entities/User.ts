import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm"
import Accounts from "./Account"


@Entity()
export default class Users {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    accountId: string;
    @ManyToOne((_type) => Accounts, (account: Accounts) => account.user)
    @JoinColumn()
    account: Accounts; 

}
