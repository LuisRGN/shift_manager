import { Request, Response } from "express";
import { deleteUserServices } from "../../services/indexServices/userServices";

/* ↓ Funcion del controlador para eliminar el usuario, sus credenciales y sus turnos ↓ */

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        await deleteUserServices(Number(id));
        res.json({ message: "Usuario eliminado" })
    } catch (error) {
        res.status(400).json({ message: "No se pude eliminar al usuario", error })
    };
};