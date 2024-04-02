import { Request, Response } from "express"

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).json({ message: "get users" })
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

export const getUserId = async (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: "get users id" })
    } catch (error) {
        res.status(400).json({ message: error })
    }
}