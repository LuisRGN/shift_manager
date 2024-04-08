import { Request, Response } from "express"
import { postTurnServices } from "../../services/indexServices/turnService"
import { Turn } from "../../entities/Turn"

export const postTurns = async (req: Request, res: Response): Promise<void> => {
    const { date, time, userId } = req.body
    try {
        const newTurn: Turn = await postTurnServices({ date, time, userId })
        res.status(200).json(newTurn)
    } catch (error) {
        res.status(400).json({ message: error })
    }
}