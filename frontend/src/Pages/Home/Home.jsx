import { useEffect } from "react";
import LeftContainer from "./LeftContainer/LeftContainer";
import RightContainer from "./RightContainer/RightContainer";

function Home() {
	useEffect(() => {
		console.log(localStorage.USER_INFO);
	}, []);
	return (
		<div>
			<LeftContainer />
			<RightContainer />
		</div>
	);
}

export default Home;
