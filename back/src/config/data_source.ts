import { DataSource } from "typeorm";
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME, URL } from "./envs";
import { User } from "../entities/User";
import { Turn } from "../entities/Turn";
import { Credential } from "../entities/Credential";

export const AppDataSource = new DataSource({
    type: "postgres",
    url: URL,
    synchronize: true,
    entities: [User, Turn, Credential],
    subscribers: [],
    migrations: [],
});