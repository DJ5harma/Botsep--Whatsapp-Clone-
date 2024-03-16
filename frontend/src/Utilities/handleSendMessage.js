import axios from "axios";
import toast from "react-hot-toast";

export async function handleSendMessage(message, receiverId) {
	const { username, password } = JSON.parse(
		localStorage.getItem("USER_INFO")
	);
	try {
		if (message === "") {
			throw new Error("Don't send empty messages!");
		}

		const response = await axios.post("/api/messages/send", {
			receiverId,
			text: message,
			username,
			password,
		});

		if (response.data.success === false) {
			throw new Error("Internal server error!");
		}
		toast.success("Message sent!");
	} catch (error) {
		toast.error(error.message);
		console.log(error.message);
	}
}
