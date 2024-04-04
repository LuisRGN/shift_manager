import { Request, Response } from "express"
import { deleteUserServices } from "../../services/indexServices/userServices"

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const deleted = await deleteUserServices(Number(id));
        res.json(deleted)
    } catch (error) {
        res.status(400).json({ message: error })
    };
};