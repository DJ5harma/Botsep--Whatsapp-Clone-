import USERMODEL from "../models/USER.MODEL.js";

export async function CheckCredentials(req, res, next) {
	const { username, password } = req.body;
	if (!username || !password) {
		return res.json({
			success: false,
			message: "Not logged in!",
		});
	}
	try {
		const user = await USERMODEL.findOne({ username });

		if (!user) {
			throw new Error("Username wrong or account deleted!");
		}
		if (user.password !== password) {
			throw new Error("Incorrect Password!");
		}

		req.senderId = user._id;
		next();
	} catch (error) {
		return res.json({ success: false, message: `${error.message}` });
	}
}
