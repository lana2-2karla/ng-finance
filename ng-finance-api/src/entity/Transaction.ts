import { Entity, PrimaryGeneratedColumn, Column, OneToOne, CreateDateColumn } from "typeorm"

@Entity()
export class Transactions {

    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column({name: "debited_Account_Id"})
    debitedAccountId: number

    @Column({name: "credited_Account_Id"})
    creditedAccountId: string

    @Column()
    value: number

    @CreateDateColumn({name: "created_At"})
    createdAt: Date

}
