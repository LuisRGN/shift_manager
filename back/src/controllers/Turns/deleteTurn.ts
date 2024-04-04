import { Request, Response } from "express"
import { deleteTurnServices } from "../../services/indexServices/turnService";

export const deleteTurns = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        await deleteTurnServices(Number(id))
        res.status(200).json({ message: "Turno eliminado" })
    } catch (error) {
        res.status(400).json({ message: error })
    }
}