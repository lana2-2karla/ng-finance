import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm"
import Accounts from "./Account"


@Entity()
export default class Users {

    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @ManyToOne(type => Accounts)
    @JoinColumn({ name: "accounts_id"})
    accounts: Accounts

}
