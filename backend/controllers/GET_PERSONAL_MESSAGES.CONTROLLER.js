import CHATMODEL from "../models/CHAT.MODEL.js";

export async function GetPersonalMessagesController(req, res) {
	const { receiverId } = req.body;
	const senderId = req.senderId;

	try {
		let chat = await CHATMODEL.findOne({
			members: { $all: [senderId, receiverId] },
		}).populate("messages");
		if (!chat) {
			return res.json({
				success: true,
				message: "No messages in this chat!",
				payload: [],
			});
		}
		const messages = chat.messages;

		return res.json({
			success: true,
			message: "Messages Incoming!",
			payload: messages,
		});
	} catch (error) {
		console.log(error.message);
		return res.json({
			success: false,
			message: error.message,
		});
	}
}
