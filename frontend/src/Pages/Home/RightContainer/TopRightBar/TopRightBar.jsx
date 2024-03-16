import { CiMenuKebab } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";
import { useContext } from "react";
import { chattingWith } from "../../../../contexts/ChattingWithContextProvider";
import SingleUser from "../../LeftContainer/AllUserSection/SingleUser/SingleUser";

function TopRightBar() {
	const { receiver } = useContext(chattingWith);

	return (
		<div style={{ flex: 1 }} className="color2">
			<div style={{ flex: 16 }}>
				<SingleUser user={receiver} />
			</div>

			<div style={{ flex: 5, justifyContent: "space-around" }}>
				<IoMdVideocam size={25} />
				<FaSearch size={25} />
				<CiMenuKebab size={25} />
			</div>
		</div>
	);
}

export default TopRightBar;
