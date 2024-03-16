import { useContext } from "react";
import { userContext } from "../../../../contexts/UserContextProvider";

function SelfInfoSection() {
	const { user } = useContext(userContext);

	return (
		<div style={{ flexDirection: "column" }}>
			<p style={{ fontSize: 50 }}>Hi {user.fullname}!</p>
			<p style={{ fontSize: 20 }}>🤗 Glad you're here! 🤗</p>
		</div>
	);
}

export default SelfInfoSection;
