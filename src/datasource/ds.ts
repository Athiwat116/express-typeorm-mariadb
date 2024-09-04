import "reflect-metadata"
import { DataSource } from "typeorm"
import "dotenv/config"
import { User } from "../entities/User"
import { Category } from "../entities/Category"
import { Product } from "../entities/Product"

export const AppDataSource = new DataSource({
    type: "mariadb",
    host: process.env.MARIADB_HOST,
    port: Number(process.env.MARIADB_PORT),
    username: process.env.MARIADB_USERNAME,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DATABASE,
    entities: [User,Category,Product], // แอดโมเดลใส่ทีหลัง
    logging: true,
    synchronize: true, // ซิ้งดาต้าเดสหรือการทำไมเกรท
    migrations: [],
    subscribers: [], 
})