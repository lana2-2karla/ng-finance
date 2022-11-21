import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from 'typeorm'
import Accounts from './Account'

@Entity()
export default class Transactions {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column()
    debitedAccountId: string

  @ManyToOne((_type) => Accounts, (debited: Accounts) => debited.acc)
  @JoinColumn()
    debitedAccount: Accounts

  @Column()
    creditedAccountId: string

  @ManyToOne((_type) => Accounts, (credited: Accounts) => credited.acc)
  @JoinColumn()
    creditedAccount: Accounts

  @Column()
    value: number

  @CreateDateColumn({ name: 'created_At' })
    createdAt: Date
}
