import { CiMenuKebab } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
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
			{/* <CgProfile
				size={30}
				style={{ marginRight: 15, marginLeft: 15, flex: 1 }}
			/>
			<p style={{ flex: 16 }}>
				<span>{receiver.fullname}</span>
				<span style={{ fontSize: 12, color: "gray", display: "block" }}>
					{receiver.username}
				</span>
			</p> */}
			<div style={{ flex: 5, justifyContent: "space-around" }}>
				<IoMdVideocam size={25} />
				<FaSearch size={25} />
				<CiMenuKebab size={25} />
			</div>
		</div>
	);
}

export default TopRightBar;
