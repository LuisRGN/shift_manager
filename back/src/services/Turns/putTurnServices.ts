import { turnModel } from "../../config/repository"
import { Turn } from "../../entities/Turn"

/* ↓ Funcion que cambia el status de un turno ↓ */

export const putTurnSevices = async (id: number): Promise<void> => {
    const turn: Turn | null = await turnModel.findOneBy({ id: id })
    if (!turn) throw Error("No existe el turno")
    turn.status = "Cancelled"
    await turnModel.save(turn)
}