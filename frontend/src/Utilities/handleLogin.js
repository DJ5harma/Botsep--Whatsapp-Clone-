import axios from "axios";
import toast from "react-hot-toast";

export async function handleLogin(user) {
	try {
		const response = await axios.post("/api/auth/login", user);

		const { success, message, payload } = response.data;

		if (!success) {
			throw new Error(message);
		}
		localStorage.setItem("USER_INFO", JSON.stringify(payload));
		toast.success(`Logged in as ${payload.username}!`);

		return true;
	} catch (error) {
		toast.error(error.message);
		return false;
	}
}
