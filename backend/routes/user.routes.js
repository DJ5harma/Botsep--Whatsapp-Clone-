import express from "express";
import { GetUsersController } from "../controllers/GET_USERS.CONTROLLER.js";

const userRoutes = express.Router();

userRoutes.post("/get", GetUsersController);

export default userRoutes;
