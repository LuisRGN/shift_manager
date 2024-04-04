import { credentialModel, userModel } from "../../config/repository";
import { User } from "../../entities/User";

export const deleteUserServices = async (userId: number): Promise<void> => {
    const deleteUser: User | null = await userModel.findOneBy({ id: userId });
    if (!deleteUser) {
        throw Error("No se encontro el usuario");
    }

    await credentialModel.delete({ user: deleteUser })

    await userModel.remove(deleteUser);

    console.log("Usuario eliminado correctamente");
};
