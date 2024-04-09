import nodemailer from 'nodemailer';
import { EMAIL_PASS, EMAIL_USER } from '../config/envs';

export const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
    },
});

// Función para enviar un correo electrónico de confirmación
export const enviarCorreoDeConfirmacion = async (destinatario: string, nombreUsuario: string): Promise<void> => {
    try {
        // Envía el correo electrónico
        await transporter.sendMail({
            from: EMAIL_USER,
            to: destinatario,
            subject: 'Confirmación de registro',
            text: `¡Hola ${nombreUsuario}! Gracias por registrarte en nuestra aplicación.`,
        });

        console.log('Correo electrónico enviado con éxito');
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
        throw error;
    };
};

// Funcion para enviar un correo del turno cancelado
export const enviarCorreoDeCancelarTurno = async (destinatario: string, nombreUsuario: string, fecha: Date): Promise<void> => {
    try {
        await transporter.sendMail({
            from: EMAIL_USER,
            to: destinatario,
            subject: "Confirmación de cancelación",
            text: `¡Hola ${nombreUsuario}! Tu turno ${fecha.toDateString()} a sido cancelado`
        })
        console.log('Correo electrónico enviado con éxito');

    } catch (error) {
        console.error("Error al cancelar el turno", error)
        throw error;
    };
};

// Funcion para enviar un correo del usuario borrado
export const enviarCorreoDeEliminacionUsuario = async (destinatario: string, nombreUsuario: string, username: string) => {
    try {
        await transporter.sendMail({
            from: EMAIL_USER,
            to: destinatario,
            subject: "Eliminacion confirmada",
            text: `¡Hola ${nombreUsuario}! Su usuario ${username} a sido eliminado con exito`
        })
        console.log('Correo electrónico enviado con éxito');
    } catch (error) {
        console.error("Error al borrar el usuario", error)
        throw error
    };
};

