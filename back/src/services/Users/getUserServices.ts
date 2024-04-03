import { userModel } from "../../config/repository";
import { User } from "../../entities/User";

/* ↓ Esta funcion sirve para buscar a todos los usuarios con relacion a los turnos de cada uno  ↓ */

export const getUserServices = async (): Promise<User[]> => {
    const users: User[] = await userModel.find({
        relations: { turns: true }
    })
    return users;
}

/* ↓ Esta funcion sirve para buscar el usuario por ID tomando en cuenta la relacion de los turnos 
y lanzando un error para evitar problemas al momento de no encontrar al usuario ya que puede ser null ↓ */

export const getUserIdServices = async (id: number): Promise<User> => {
    const userId: User | null = await userModel.findOne({
        where: { id }, relations: { turns: true }
    })
    if (!userId) throw Error("Usuario no encontrado")
    return userId
}