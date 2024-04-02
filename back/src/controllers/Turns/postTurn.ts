import { Request, Response } from "express"

export const postTurns = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).json({ message: "post turns" })
    } catch (error) {
        res.status(400).json({ message: error })
    }
}