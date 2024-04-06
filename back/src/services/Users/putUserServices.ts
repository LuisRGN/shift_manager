import { credentialModel, userModel } from "../../config/repository";
import { Credential } from "../../entities/Credential";
import { User } from "../../entities/User";

export const putChangeServices = async (userId: number, userData: Partial<User>, credentialData: Partial<Credential>) => {

    const updateUser = await userModel.findOneBy({ id: userId });
    if (!updateUser) {
        throw Error("No se encontro al usuario")
    }
    if (userData.name) {
        updateUser.name = userData.name
    }
    if (userData.email) {
        updateUser.email = userData.email
    }
    if (userData.birthdate) {
        updateUser.birthdate = userData.birthdate
    }
    if (userData.dni) {
        updateUser.dni = userData.dni
    }
    await userModel.save(updateUser)

    const credentialUpdate = await credentialModel.findOneBy({ id: userId })
    if (!credentialUpdate) {
        throw Error("No se encontraron las credenciales")
    }
    if (credentialData.username) {
        credentialUpdate.username = credentialData.username
    }
    if (credentialData.password) {
        credentialUpdate.password = credentialData.password
    }
    await credentialModel.save(credentialUpdate)
}