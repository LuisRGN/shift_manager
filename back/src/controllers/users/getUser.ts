import { Request, Response } from "express"
import { getUserIdServices, getUserServices } from "../../services/indexServices/userServices"

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const allUsers = await getUserServices()
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

export const getUserId = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const userId = await getUserIdServices(Number(id))
        res.status(200).json(userId)
    } catch (error) {
        res.status(400).json({ message: error })
    }
}