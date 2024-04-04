import { userModel } from "../../config/repository"

/* ↓ Funcion que elimina al usuario ↓ */

export const deleteUserServices = async (userId: number) => {
    const deleteUser = await userModel.findOneBy({ id: userId })
    if (deleteUser) {
        await userModel.remove(deleteUser)
        console.log("Usuario eliminado correctamente")
    } else {
        throw Error("No se encontro el usuario")
    }
}