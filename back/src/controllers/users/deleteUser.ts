import { Request, Response } from "express"

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).json({ message: "delete user" })
    } catch (error) {
        res.status(400).json({ message: error })
    }
}