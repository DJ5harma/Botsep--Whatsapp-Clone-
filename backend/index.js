import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

// Middleware import
import { CheckCredentials } from "./middleware/CheckCredentials.js";

// Route imports
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", CheckCredentials, messageRoutes);
app.use("/api/users", userRoutes);

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
