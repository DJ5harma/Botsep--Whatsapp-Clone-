import axios from "axios";
import toast from "react-hot-toast";

export async function handleGetPersonalMessages(receiverId, setMessages) {
	if (receiverId === "null") {
		return;
	}

	const { username, password } = JSON.parse(
		localStorage.getItem("USER_INFO")
	);

	try {
		const response = await axios.post("/api/messages/get", {
			receiverId,
			username,
			password,
		});
		if (response.data.success === false) {
			throw new Error("Internal server error!");
		}
		setMessages(response.data.payload);
		console.log(response.data.payload);
		return;
	} catch (error) {
		console.log("error");
		toast.error(error.message);
	}
}
