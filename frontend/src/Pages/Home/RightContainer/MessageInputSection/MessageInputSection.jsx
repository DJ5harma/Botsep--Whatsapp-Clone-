import { FaPlus } from "react-icons/fa";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";

function MessageInputSection() {
	return (
		<div
			style={{
				flex: 1,
				borderTop: "solid 1px",
				padding: "0 10px",
				backgroundColor: "rgb(0,20,0)",
			}}
		>
			<FaPlus style={{ flex: 1 }} />
			<MdOutlineEmojiEmotions style={{ flex: 1 }} />
			<input placeholder="Type a message" style={{ flex: 11 }} />
			<BsFillSendFill style={{ flex: 1 }} />
			<FaMicrophone style={{ flex: 1 }} />
		</div>
	);
}

export default MessageInputSection;
