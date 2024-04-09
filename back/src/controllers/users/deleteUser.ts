import { Request, Response } from "express";
import { deleteUserServices } from "../../services/indexServices/userServices";
import { enviarCorreoDeEliminacionUsuario } from "../../services/nodemailer";
import { credentialModel, userModel } from "../../config/repository";

/* ↓ Funcion del controlador para eliminar el usuario, sus credenciales y sus turnos mas un coreo de confirmación ↓ */

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const findCredential = await credentialModel.findOne({ where: { id: Number(id) } })

        const credential = findCredential?.username

        const user = await userModel.findOne({ where: { id: Number(id) } })

        const destinatario = user?.email
        const nombreUsuario = user?.name

        if (destinatario && nombreUsuario && credential) {
            await enviarCorreoDeEliminacionUsuario(destinatario, nombreUsuario, credential)
        } else {
            throw Error("No se pudo encontrar el destinatario o el nombre del usuario")
        }

        await deleteUserServices(Number(id));
        res.json({ message: "Usuario eliminado" })
    } catch (error) {
        res.status(400).json({ message: "No se pude eliminar al usuario", error })
    };
};