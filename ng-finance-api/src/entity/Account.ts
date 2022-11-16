import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Accounts {

    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    balance: number
    
}
