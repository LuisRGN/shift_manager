import { DataSource } from "typeorm";
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME } from "./envs"
import { User } from "../entities/User";
import { Turn } from "../entities/Turn";
import { Credential } from "../entities/Credential";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: true,
    entities: [User, Turn, Credential],
    subscribers: [],
    migrations: [],
})