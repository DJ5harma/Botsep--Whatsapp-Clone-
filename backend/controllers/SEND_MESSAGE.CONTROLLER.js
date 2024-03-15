import CHATMODEL from "../models/CHAT.MODEL.js";
import MESSAGEMODEL from "../models/MESSAGE.MODEL.js";

export async function SendMessageController(req, res) {
	const { receiverId, text } = req.body;
	const senderId = req.senderId;

	try {
		let chat = await CHATMODEL.findOne({
			participants: { $all: [senderId, receiverId] },
		});
		if (!chat) {
			chat = new CHATMODEL({
				participants: [senderId, receiverId],
			});
		}
		const message = await MESSAGEMODEL.create({
			senderId,
			receiverId,
			text,
		});

		chat.members.push(message._id);
		await chat.save();

		return res.json({
			success: true,
			message: "Message sent!",
			payload: text,
		});
	} catch (error) {
		return res.json({ success: false, message: error.message });
	}
}
