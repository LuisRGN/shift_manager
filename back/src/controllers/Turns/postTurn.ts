import { Request, Response } from "express";
import { postTurnServices } from "../../services/indexServices/turnService";
import { Turn } from "../../entities/Turn";

/* ↓ Funcion del controlador para que un usuario cree un nuevo turno ↓ */

export const postTurns = async (req: Request, res: Response): Promise<void> => {
    const { date, time, description, userId } = req.body;
    try {
        const newTurn: Turn = await postTurnServices({ date, time, description, userId })
        res.status(200).json(newTurn)
    } catch (error) {
        res.status(400).json({ message: error })
    };
};