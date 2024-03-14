import USERMODEL from "../models/USER.MODEL.js";

export async function LoginController(req, res) {
	const { username, password } = req.body;

	try {
		const user = await USERMODEL.findOne({ username });

		if (!user) {
			throw new Error("Username not Registered!");
		}
		if (user.password !== password) {
			throw new Error("Incorrect password!");
		}
		return res.json({
			success: true,
			message: "Login successful!",
			payload: user,
		});
	} catch (error) {
		return res.json({ success: false, message: error.message });
	}
}
