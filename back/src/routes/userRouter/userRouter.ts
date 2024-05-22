import { Router } from "express";
import { getUserId, getUsers } from "../../controllers/Users/getUser";
import { postLoginUser, postRegisterUser, } from "../../controllers/Users/postUser"
import { putUser } from "../../controllers/Users/putUser";
import { deleteUser } from "../../controllers/Users/deleteUser"

export const users: Router = Router();

users.get("/", getUsers);
users.get("/:id", getUserId);
users.post("/register", postRegisterUser);
users.post("/login", postLoginUser);
users.put("/change/:id", putUser);
users.delete("/delete/:id", deleteUser);