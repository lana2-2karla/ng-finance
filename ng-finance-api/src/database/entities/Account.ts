import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import Transactions from "./Transaction"
import Users from "./User"

@Entity()
export default class Accounts {

    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    balance: number

    @OneToMany(() => Users, (user) => user.accounts)
    user: Users[]
    
    @OneToMany(()=> Transactions, (transaction) => transaction.debitedAccountId)

    @OneToMany(()=> Transactions, (transaction) => transaction.creditedAccountId)
    acc:Transactions[]
}
