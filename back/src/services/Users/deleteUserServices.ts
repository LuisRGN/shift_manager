import { credentialModel, turnModel, userModel } from "../../config/repository";
import { User } from "../../entities/User";

/* ↓ Funcion del servicio para eliminar el usuario, sus credenciales y sus turnos ↓ */

export const deleteUserServices = async (userId: number): Promise<void> => {

    const deleteUser: User | null = await userModel.findOne({ where: { id: userId }, relations: ["credential", "turns"] });

    if (!deleteUser) {
        throw new Error("No se encontró el usuario");
    }

    await credentialModel.remove(deleteUser.credential);

    await turnModel.remove(deleteUser.turns);

    await userModel.remove(deleteUser);

    console.log("Usuario y sus credenciales asociadas eliminados correctamente");
};

