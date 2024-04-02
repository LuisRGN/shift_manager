import { Router } from "express";
import { deleteTurns, getTurnId, getTurns, postTurns, putTurns } from "../../controllers/indexControllers/turnsController"

export const turns: Router = Router();

turns.get("/", getTurns);
turns.get("/:id", getTurnId);
turns.post("/shedule", postTurns);
turns.put("/cancel/:id", putTurns);
turns.delete("/delete/:id", deleteTurns);