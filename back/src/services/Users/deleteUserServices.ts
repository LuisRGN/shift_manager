import { userModel } from "../../config/repository"
import { User } from "../../entities/User"

/* ↓ Funcion que elimina al usuario ↓ */

export const deleteUserServices = async (userId: number): Promise<void> => {
    const deleteUser: User | null = await userModel.findOneBy({ id: userId })
    if (deleteUser) {
        await userModel.remove(deleteUser)
        console.log("Usuario eliminado correctamente")
    } else {
        throw Error("No se encontro el usuario")
    }
}