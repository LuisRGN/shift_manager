import { Request, Response } from "express"

export const putTurns = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).json({ message: "put turns" })
    } catch (error) {
        res.status(400).json({ message: error })
    }
}