import mongoose from "mongoose";

export default mongoose.model(
	"Message",
	new mongoose.Schema(
		{
			senderId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
			receiverId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
			text: String,
			// audio: String,
			// video: String,
			// image: String,
		},
		{ timestamps: true }
	)
);
