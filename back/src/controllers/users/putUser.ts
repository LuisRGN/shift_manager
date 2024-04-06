import { Request, Response } from "express"
import { putChangeServices } from "../../services/indexServices/userServices"

export const putUser = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params
    const userData = req.body
    const credentialData = req.body
    try {
        await putChangeServices(Number(id), userData, credentialData)
        res.status(200).json({ message: "Datos actualzados correctamente" })
    } catch (error) {
        res.status(400).json({ message: "No se pudo actualizar el usuario" })
    }
}