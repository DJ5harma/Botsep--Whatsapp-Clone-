import express from "express";
import { LoginController } from "../controllers/LOGIN.CONTROLLER.js";
import { RegisterController } from "../controllers/REGISTER.CONTROLLER.js";

const authRoutes = express.Router();

authRoutes.post("/login", LoginController);
authRoutes.post("/register", RegisterController);

export default authRoutes;
