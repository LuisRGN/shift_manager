import { Request, Response } from "express"

export const deleteTurns = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).json({ message: "delete turn" })
    } catch (error) {
        res.status(400).json({ message: error })
    }
}