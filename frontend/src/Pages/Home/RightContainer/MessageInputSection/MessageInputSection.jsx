import { FaPlus } from "react-icons/fa";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";

function MessageInputSection() {
	return (
		<div style={{ flex: 1 }}>
			<FaPlus style={{ flex: 1 }} />
			<MdOutlineEmojiEmotions style={{ flex: 1 }} />
			<input placeholder="Type a message" style={{ flex: 12 }} />
			<FaMicrophone style={{ flex: 1 }} />
		</div>
	);
}

export default MessageInputSection;
