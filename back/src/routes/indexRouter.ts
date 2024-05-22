import { Router } from "express";
import { users } from "./UserRouter/userRouter"
import { turns } from "./TurnRouter/turnRouter";

export const indexRouter: Router = Router();

indexRouter.use("/users", users);
indexRouter.use("/turns", turns);