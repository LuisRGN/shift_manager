import { credentialModel, userModel } from "../../config/repository";
import { User } from "../../entities/User";

/* ↓ Funcion para eliminar el usuario y sus credenciales ↓ */

export const deleteUserServices = async (userId: number): Promise<void> => {

    const deleteUser: User | null = await userModel.findOne({ where: { id: userId }, relations: ["credential"] });

    if (!deleteUser) {
        throw new Error("No se encontró el usuario");
    }

    await credentialModel.remove(deleteUser.credential)

    await userModel.remove(deleteUser);

    console.log("Usuario y sus credenciales asociadas eliminados correctamente");
};

