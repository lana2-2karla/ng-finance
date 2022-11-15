import 'dotenv/config'
import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "./entity/User"

const port = process.env.DB_PORT as unknown as number | undefined

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [Users],
    migrations: [],
    subscribers: [],
})
