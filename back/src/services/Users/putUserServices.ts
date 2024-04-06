import { userModel } from "../../config/repository";
import { Credential } from "../../entities/Credential";
import { User } from "../../entities/User";

export const putChangeServices = async (userId: number, userData: Partial<User>, credentialData: Partial<Credential>) => {
    await userModel.manager.transaction(async managerTranscion => {
        const updateUser = await managerTranscion.getRepository(User).findOne({ where: { id: userId }, relations: ["credential"] });
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
        await managerTranscion.save(updateUser)

        if (updateUser.credential) {
            if (credentialData.username) {
                updateUser.credential.username = credentialData.username
            }
            if (credentialData.password) {
                updateUser.credential.password = credentialData.password
            }
            await managerTranscion.save(updateUser.credential)
        }
    })
}
