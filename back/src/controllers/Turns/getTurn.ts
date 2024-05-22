import { Request, Response } from "express";
import { getTurnIdServices, getTurnServices } from "../../services/Turns/getTurnServices";
import { Turn } from "../../entities/Turn";

/* ↓ Funcion del controlador para traer todos los turnos ↓ */

export const getTurns = async (req: Request, res: Response): Promise<void> => {
    try {
        const tursAll: Turn[] = await getTurnServices()
        res.status(200).json(tursAll)
    } catch (error) {
        res.status(400).json({ message: error })
    };
};

/* ↓ Funcion del controlador que trae un turno por id ↓ */

export const getTurnId = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const turnId: Turn | null = await getTurnIdServices(Number(id))
        res.status(200).json(turnId)
    } catch (error) {
        res.status(400).json({ message: error })
    };
};