import { userModel } from "../../config/repository"
import { userDto } from "../../dto/userDto"
import { Credential } from "../../entities/Credential";
import { User } from "../../entities/User";
import { createCredential } from "../Credentials/createCredentialsServices"

/* ↓ Funcion que registra a un usuario ↓ */

export const postReisterServices = async (userDto: userDto): Promise<User> => {
    const newUser: User = userModel.create(userDto);

    const newCredential: Credential = await createCredential({ username: userDto.username, password: userDto.password })
    newUser.credential = newCredential;

    const saveUser = await userModel.save(newUser);
    return saveUser;
}

/* ↓ Funcion que loguea al usuario ↓ */

export const postLoginServices = async (credentials: number) => {
    const findUser = await userModel.findOneBy({
        credential: { id: credentials }
    });
    return findUser;
}