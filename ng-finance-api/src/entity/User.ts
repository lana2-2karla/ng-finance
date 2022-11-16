import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { Accounts } from "./Account"

@Entity()
export class Users {

    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    account_Id: number

    @OneToOne(() => Accounts)
    @JoinColumn({name: "account_Id"})
    accountId: Accounts

}
