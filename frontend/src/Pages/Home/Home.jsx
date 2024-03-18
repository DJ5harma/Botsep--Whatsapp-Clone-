import { useContext, useEffect } from "react";
import LeftContainer from "./LeftContainer/LeftContainer";
import RightContainer from "./RightContainer/RightContainer";
import { chattingWith } from "../../contexts/ChattingWithContextProvider";
import { userContext } from "../../contexts/UserContextProvider";

function Home() {
	const { setReceiver } = useContext(chattingWith);

	const { user, setUser } = useContext(userContext);

	useEffect(() => {
		setReceiver(JSON.parse(localStorage.getItem("USER_INFO")));
		setUser(JSON.parse(localStorage.getItem("USER_INFO")));
	}, []);

	return (
		<div className="home-container">
			<LeftContainer />
			<RightContainer />
		</div>
	);
}

export default Home;
