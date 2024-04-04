import { turnModel } from "../../config/repository"
import { Turn } from "../../entities/Turn"

/* ↓ Funcion que elimina un turno ↓ */

export const deleteTurnServices = async (id: number): Promise<void> => {
    const deleteTurn: Turn | null = await turnModel.findOneBy({ id: id })
    if (deleteTurn) {
        await turnModel.remove(deleteTurn)
        console.log("Turno eliminado correctamente")
    } else {
        throw Error("Error al eliminar el turno")
    }
}