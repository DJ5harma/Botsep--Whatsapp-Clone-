import axios from "axios";
import toast from "react-hot-toast";

export async function handleRegister(user) {
	try {
		const response = await axios.post("/api/auth/register", user);

		const { success, message, payload } = response.data;

		if (!success) {
			throw new Error(message);
		}
		localStorage.setItem("USER_INFO", JSON.stringify(payload));
		toast.success(`Registered user as ${payload.username}!`);

		return true;
	} catch (error) {
		toast.error(error.message);
		return false;
	}
}
