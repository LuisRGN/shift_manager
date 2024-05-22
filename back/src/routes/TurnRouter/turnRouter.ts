import { Router } from "express";
import { getTurnId, getTurns } from "../../controllers/Turns/getTurn";
import { postTurns, } from "../../controllers/Turns/postTurn"
import { putTurns } from "../../controllers/Turns/putTurn";
import { deleteTurns } from "../../controllers/Turns/deleteTurn"

export const turns: Router = Router();

turns.get("/", getTurns);
turns.get("/:id", getTurnId);
turns.post("/shedule", postTurns);
turns.put("/cancel/:id", putTurns);
turns.delete("/delete/:id", deleteTurns);