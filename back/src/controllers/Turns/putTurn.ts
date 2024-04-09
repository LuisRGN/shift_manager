import { Request, Response } from "express";
import { putTurnSevices } from "../../services/indexServices/turnService";
import { turnModel, userModel } from "../../config/repository";
import { enviarCorreoDeCancelarTurno } from "../../services/nodemailer";

/* ↓ Funcion del controlador que cambia el status de un turno mas un correo de confirmación ↓ */

export const putTurns = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const turno = await turnModel.findOne({ where: { id: Number(id) }, relations: ["user"] })

        const userId = turno?.user?.id;

        const usuario = await userModel.findOne({ where: { id: userId }, relations: ["turns"] })

        const destinatario = usuario?.email;
        const nombreUsuario = usuario?.name;
        const fecha = turno?.date;

        if (destinatario && nombreUsuario && fecha) {
            await enviarCorreoDeCancelarTurno(destinatario, nombreUsuario, fecha);
        } else {
            throw new Error("No se pudo encontrar el destinatario o el nombre del usuario");
        }

        await putTurnSevices(Number(id))
        res.status(200).json({ message: "Turno cancelado" })
    } catch (error) {
        res.status(400).json({ message: error })
    };
};