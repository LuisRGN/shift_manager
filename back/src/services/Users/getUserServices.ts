import { userModel } from "../../config/repository";
import { User } from "../../entities/User";

/* ↓ Funcion del servicio para buscar todos los usuarios  ↓ */

export const getUserServices = async (): Promise<User[]> => {
    const users: User[] = await userModel.find({
        relations: { turns: true }
    });
    return users;
};

/* ↓ Funcion del servicio para buscar usuario por id ↓ */

export const getUserIdServices = async (id: number): Promise<User> => {
    const userId: User | null = await userModel.findOne({
        where: { id }, relations: { turns: true }
    });
    if (!userId) throw Error("Usuario no encontrado");
    return userId;
};