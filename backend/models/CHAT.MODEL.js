import mongoose from "mongoose";

export default mongoose.model(
	"Chat",
	new mongoose.Schema(
		{
			name: {
				type: String,
				default: "null_chat",
			},
			members: [
				{
					type: mongoose.Schema.Types.ObjectId,
					ref: "User",
				},
			],
			messages: [
				{
					type: mongoose.Schema.Types.ObjectId,
					ref: "Message",
				},
			],
		},
		{ timestamps: true }
	)
);
