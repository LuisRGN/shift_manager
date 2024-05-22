import { Request, Response } from "express";
import { postLoginServices, postReisterServices } from "../../services/Users/postUserServices";
import { validateCredential } from "../../services/Credentials/createCredentialsServices";
import { User } from "../../entities/User";
import { Credential } from "../../entities/Credential";
import { enviarCorreoDeConfirmacion } from "../../services/nodemailer";

/* ↓ Funcion del controlador que registra a un usuario, se agrega enviar un correo de confirmación↓ */

export const postRegisterUser = async (req: Request, res: Response): Promise<void> => {
    const { name, email, birthdate, dni, username, password } = req.body;
    try {
        const newUser: User = await postReisterServices({ name, email, birthdate, dni, username, password })
        await enviarCorreoDeConfirmacion(email, name)
        res.status(200).json(newUser)
    } catch (error) {
        res.status(400).json({ message: error })
    };
};

/* ↓ Funcion del controlador que loguea al usuario ↓ */

export const postLoginUser = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;
    try {
        const userLogin: Credential = await validateCredential({ username, password })
        const user: User | null = await postLoginServices(userLogin.id)
        res.status(200).json({ login: true, user })
    } catch (error) {
        res.status(400).json({ message: error })
    };
};