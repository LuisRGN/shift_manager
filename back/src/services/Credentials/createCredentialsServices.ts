import { credentialModel } from "../../config/repository";
import { credentialDto, validateCredentialDto } from "../../dto/credentialDto";
import { Credential } from "../../entities/Credential";

/* ↓ Funcion para crear una credencial ↓ */

export const createCredential = async (objCredential: credentialDto): Promise<Credential> => {
    const create: Credential = credentialModel.create(objCredential)
    await credentialModel.save(create);
    return create;
}

/* ↓ Funcion para validar una credencial ↓ */

export const validateCredential = async (objValidateCredential: validateCredentialDto): Promise<Credential> => {
    const { username, password } = objValidateCredential
    const login: Credential | null = await credentialModel.findOneBy({ username })
    if (!login) throw Error("Usuario no encontrado")
    if (password !== login.password) throw Error("La contraseña es incorrecta")
    return login
}