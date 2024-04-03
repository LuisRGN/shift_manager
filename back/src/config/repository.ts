import { Credential } from "../entities/Credential";
import { Turn } from "../entities/Turn";
import { User } from "../entities/User";
import { AppDataSource } from "./data_source";

export const userModel = AppDataSource.getRepository(User)
export const turnModel = AppDataSource.getRepository(Turn)
export const credentialModel = AppDataSource.getRepository(Credential)
