import { turnModel, userModel } from "../../config/repository";
import { turnDto } from "../../dto/turnDto";
import { Turn } from "../../entities/Turn";
import { User } from "../../entities/User";

/* ↓ Funcion del servicio para que un usuario cree un nuevo turno ↓ */

export const postTurnServices = async (objTurn: turnDto): Promise<Turn> => {
    const newTurn: Turn = turnModel.create(objTurn);
    await turnModel.save(newTurn);

    const user: User | null = await userModel.findOneBy({ id: objTurn.userId });
    if (!user) throw Error("El usuario no existe");
    newTurn.user = user;

    await turnModel.save(newTurn);
    return newTurn
};