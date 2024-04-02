import { Request, Response } from "express"

export const postRegisterUser = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).json({ message: "post register user " })
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

export const postLoginUser = async (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: "post login user" })
    } catch (error) {
        res.status(400).json({ message: error })
    }
}