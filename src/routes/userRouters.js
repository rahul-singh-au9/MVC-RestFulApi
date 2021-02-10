import express from "express";

import { getUsers, createUser, getUser, deleteUser, updateUser } from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/", createUser);
userRouter.get("/:id", getUser);
userRouter.delete("/:id", deleteUser);
userRouter.patch("/:id", updateUser);

export default userRouter;