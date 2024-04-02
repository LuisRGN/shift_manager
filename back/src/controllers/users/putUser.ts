import { Request, Response } from "express"

export const putUser = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).json({ message: "put user " })
    } catch (error) {
        res.status(400).json({ message: error })
    }
}