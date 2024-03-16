import { useContext } from "react";
import LeftContainer from "./LeftContainer/LeftContainer";
import RightContainer from "./RightContainer/RightContainer";
import { chattingWith } from "../../contexts/ChattingWithContextProvider";

function Home() {
	return (
		<div className="home-container">
			<LeftContainer />
			<RightContainer />
		</div>
	);
}

export default Home;
