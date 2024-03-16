import axios from "axios";
import toast from "react-hot-toast";

export async function handleGetAllUsers(setUsers) {
	try {
		axios.get("/api/users/get").then((res) => {
			setUsers(res.data.payload);
			return;
		});
	} catch (error) {
		toast.error(error.message);
	}
}
