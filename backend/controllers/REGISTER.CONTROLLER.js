import USERMODEL from "../models/USER.MODEL";

export async function RegisterController(req, res) {
	const { fullname, username, password, profilePic } = req.body;

	try {
		const user = USERMODEL.findOne({ username });

		if (user) {
			throw new Error("Account with username already exists!");
		}
		const newUser = new USERMODEL({
			fullname,
			username,
			password,
			profilePic,
		});
		await newUser.save();

		return res.json({
			success: true,
			message: "Registeration Successful!",
			payload: newUser,
		});
	} catch (error) {
		return res.json({ success: false, message: error.message });
	}
}
