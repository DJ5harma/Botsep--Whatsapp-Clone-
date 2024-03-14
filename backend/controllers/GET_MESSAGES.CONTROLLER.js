import CHATMODEL from "../models/CHAT.MODEL";

export async function GetMessagesController(req, res) {
	const { chatId } = req.body;
	const senderId = req.senderId;

	try {
		let chat = await CHATMODEL.findById(chatId);
		if (!chat) {
			return res.json({
				success: true,
				message: "No messages in this chat!",
				payload: [],
			});
		}
		const members = chat.members;
		const messages = chat.populate("messages").messages;

		members.map((memberId) => {
			if (memberId === senderId) {
				return res.json({
					success: true,
					message: "Messages Incoming!",
					payload: messages,
				});
			}
		});
		throw new Error("User unauthorized to access chat!");
	} catch (error) {
		return res.json({
			success: false,
			message: `${error.message}`,
		});
	}
}
