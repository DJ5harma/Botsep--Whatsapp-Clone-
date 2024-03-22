import { useContext, useEffect } from "react";
import LeftContainer from "./LeftContainer/LeftContainer";
import RightContainer from "./RightContainer/RightContainer";
import { userContext } from "../../contexts/UserContextProvider";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../../Utilities/handleLogin";
import { chattingWith } from "../../contexts/ChattingWithContextProvider";
function Home() {
	const { user, setUser } = useContext(userContext);

	const { receiver, setReceiver } = useContext(chattingWith);

	const navigate = useNavigate();

	useEffect(() => {
		const userInfo = JSON.parse(localStorage.getItem("USER_INFO"));
		async function check() {
			const loggedIn = await handleLogin(userInfo);
			if (!userInfo || !loggedIn) {
				navigate("/Login", { replace: true });
			}
			setUser(userInfo);
			setReceiver(userInfo);
		}
		check();
	}, []);

	return user._id !== "null" ? (
		<div className="home-container">
			<LeftContainer />
			<RightContainer />
		</div>
	) : (
		<div>
			<h1>Loading...</h1>
		</div>
	);
}

export default Home;
