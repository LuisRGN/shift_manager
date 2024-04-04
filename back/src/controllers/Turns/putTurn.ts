import { Request, Response } from "express"
import { putTurnSevices } from "../../services/indexServices/turnService";

export const putTurns = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        await putTurnSevices(Number(id))
        res.status(200).json({ message: "Turno cancelado" })
    } catch (error) {
        res.status(400).json({ message: error })
    }
}