import { Request, Response } from "express"
import { postLoginServices, postReisterServices } from "../../services/indexServices/userServices"
import { validateCredential } from "../../services/Credentials/createCredentialsServices"

export const postRegisterUser = async (req: Request, res: Response): Promise<void> => {
    const { name, email, birthdate, dni, username, password } = req.body
    try {
        const newUser = await postReisterServices({ name, email, birthdate, dni, username, password })
        res.status(200).json(newUser)
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

export const postLoginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
        const userLogin = await validateCredential({ username, password })
        const user = await postLoginServices(userLogin.id)
        res.status(200).json({ login: true, user })
    } catch (error) {
        res.status(400).json({ message: error })
    }
}