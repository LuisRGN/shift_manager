import { Router } from "express";
import { deleteUser, getUserId, getUsers, postLoginUser, postRegisterUser, putUser } from "../../controllers/IndexControllers/userController";

export const users: Router = Router();

users.get("/", getUsers);
users.get("/:id", getUserId);
users.post("/register", postRegisterUser);
users.post("/login", postLoginUser);
users.put("/change/:id", putUser);
users.delete("/delete/:id", deleteUser);