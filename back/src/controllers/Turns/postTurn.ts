import { Request, Response } from "express"
import { postTurnServices } from "../../services/Turns/postTurnServices"

export const postTurns = async (req: Request, res: Response): Promise<void> => {
    const { date, time, userId } = req.body
    try {
        const newTurn = await postTurnServices({ date, time, userId })
        res.status(200).json(newTurn)
    } catch (error) {
        res.status(400).json({ message: error })
    }
}