import { Router } from "express";
import { users } from "./userRouter/userRouter";

export const indexRouter: Router = Router()

indexRouter.use("/users", users)