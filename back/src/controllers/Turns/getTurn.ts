import { Request, Response } from "express"
import { getTurnIdServices, getTurnServices } from "../../services/indexServices/turnService"

export const getTurns = async (req: Request, res: Response): Promise<void> => {
    try {
        const tursAll = await getTurnServices()
        res.status(200).json(tursAll)
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

export const getTurnId = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params
    try {
        const turnId = await getTurnIdServices(Number(id))
        res.status(200).json(turnId)
    } catch (error) {
        res.status(400).json({ message: error })
    }
}