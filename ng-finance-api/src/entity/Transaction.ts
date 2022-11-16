import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, JoinColumn } from "typeorm"
import { Accounts } from "./Account"

@Entity()
export class Transactions {

    @PrimaryGeneratedColumn("uuid")
    id: number

    @OneToMany(() => Accounts, debitedAccountId => debitedAccountId.id)
    @JoinColumn({name: "debited_Account_Id"})
    debitedAccountId: Accounts

    @OneToMany(() => Accounts, creditedAccountId => creditedAccountId.id)
    @JoinColumn({name: "credited_Account_Id"})
    creditedAccountId: Accounts

    @Column()
    value: number

    @CreateDateColumn({name: "created_At"})
    createdAt: Date

}
