import USERMODEL from "../models/USER.MODEL";

export async function GetUsersController(req, res) {
	try {
		const users = await USERMODEL.find().select("-password");
		return res.json({ success: true, message: "User array incomin" });
	} catch (error) {
		return res.json({ success: false, message: "Internal server error!" });
	}
}
