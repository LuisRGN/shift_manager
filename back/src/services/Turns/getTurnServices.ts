import { turnModel } from "../../config/repository"
import { Turn } from "../../entities/Turn";

/* ↓ Funcion para traer todos los turnos ↓ */

export const getTurnServices = async (): Promise<Turn[]> => {
    const turn: Turn[] = await turnModel.find();
    return turn
}

/* ↓ Funcion que trae un turno por id ↓ */

export const getTurnIdServices = async (id: number): Promise<Turn | null> => {
    const turn: Turn | null = await turnModel.findOne({ where: { id }, relations: { user: true } });
    return turn
}