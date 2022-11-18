import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, JoinColumn, ManyToOne } from "typeorm"
import Accounts from "./Account"

@Entity()
export default class Transactions {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(() => Accounts, debited => debited.acc)
    debitedAccountId: Accounts

    @ManyToOne(() => Accounts, credited => credited.acc)
    creditedAccountId: Accounts

    @Column()
    value: number

    @CreateDateColumn({name: "created_At"})
    createdAt: Date

}
