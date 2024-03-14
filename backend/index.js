import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import { LoginController } from "./controllers/LOGIN.CONTROLLER.js";
import { RegisterController } from "./controllers/REGISTER.CONTROLLER.js";
import { SendMessageController } from "./controllers/SEND_MESSAGE.CONTROLLER.js";
import { GetMessagesController } from "./controllers/GET_MESSAGES.CONTROLLER.js";
import { GetUsersController } from "./controllers/GET_USERS.js";
import { CheckCredentials } from "./middleware/CheckCredentials.js";

dotenv.config();
const app = express();

app.use(express.json());

app.post("/api/auth/login", LoginController);
app.post("/api/auth/register", RegisterController);
app.post("/api/messages/send", CheckCredentials, SendMessageController);
app.post("/api/messages/get", CheckCredentials, GetMessagesController);
app.get("/api/users/get", CheckCredentials, GetUsersController);

// DB Connection....
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log("MongoDB connected");
		app.listen(
			process.env.PORT,
			console.log(`Server running on PORT: ${process.env.PORT}`)
		);
	})
	.catch((error) => console.log(error));
