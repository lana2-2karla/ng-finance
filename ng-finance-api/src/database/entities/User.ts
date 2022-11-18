import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm"
import Accounts from "./Account"


@Entity()
export default class Users {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    username: string

    @Column()
    password: string

    /* @ManyToOne(type => Accounts)
    @JoinColumn({ name: "accounts_id"}) */
    /* @ManyToOne(() => Accounts, (account) => account.user)
    accountId: Accounts */

    @Column()
    accountId: string;
    @ManyToOne((_type) => Accounts, (account: Accounts) => account.user)
    @JoinColumn()
    account: Accounts; 

}
