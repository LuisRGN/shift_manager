import { Request, Response } from "express";
import { getUserIdServices, getUserServices } from "../../services/Users/getUserServices";
import { User } from "../../entities/User";

/* ↓ Funcion el controlador para buscar todos los usuarios  ↓ */


export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const allUsers: User[] = await getUserServices()
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(400).json({ message: error })
    };
};

/* ↓ Funcion del controlador para buscar usuario por id  ↓ */


export const getUserId = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const userId: User | null = await getUserIdServices(Number(id))
        res.status(200).json(userId)
    } catch (error) {
        res.status(400).json({ message: error })
    };
};