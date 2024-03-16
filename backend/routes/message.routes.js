import express from "express";
import { SendMessageController } from "../controllers/SEND_MESSAGE.CONTROLLER.js";
import { CheckCredentials } from "../middleware/CheckCredentials.js";
import { GetPersonalMessagesController } from "../controllers/GET_PERSONAL_MESSAGES.CONTROLLER.js";

const messageRoutes = express.Router();

messageRoutes.post("/send", CheckCredentials, SendMessageController);
messageRoutes.post("/get", CheckCredentials, GetPersonalMessagesController);

export default messageRoutes;
