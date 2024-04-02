import { Request, Response } from "express"

export const getTurns = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).json({ message: "get turns" })
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

export const getTurnId = async (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: "get turn id" })
    } catch (error) {
        res.status(400).json({ message: error })
    }
}