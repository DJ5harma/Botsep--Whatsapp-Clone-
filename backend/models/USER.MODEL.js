import mongoose from "mongoose";

export default mongoose.Schema(
	"User",
	new mongoose.Schema(
		{
			fullname: {
				type: String,
				required: true,
			},
			username: {
				type: String,
				required: true,
			},
			password: {
				type: String,
				required: true,
			},
			profilePic: {
				type: String,
				default: "none",
			},
		},
		{ timestamps: true }
	)
);
