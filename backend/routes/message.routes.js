import express from "express";
import { SendMessageController } from "../controllers/SEND_MESSAGE.CONTROLLER.js";
import { GetMessagesController } from "../controllers/GET_MESSAGES.CONTROLLER.js";
import { CheckCredentials } from "../middleware/CheckCredentials.js";

const messageRoutes = express.Router();

messageRoutes.post("/send", CheckCredentials, SendMessageController);
messageRoutes.post("/get", CheckCredentials, GetMessagesController);

export default messageRoutes;
