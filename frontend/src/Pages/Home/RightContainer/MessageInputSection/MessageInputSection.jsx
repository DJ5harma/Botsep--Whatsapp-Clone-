import { FaPlus } from "react-icons/fa";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { handleSendMessage } from "../../../../Utilities/handleSendMessage";
import { chattingWith } from "../../../../contexts/ChattingWithContextProvider";
import { userContext } from "../../../../contexts/UserContextProvider";

function MessageInputSection() {
	const [message, setMessage] = useState("");
	const { receiver } = useContext(chattingWith);

	const { user } = useContext(userContext);

	return (
		<div
			style={{
				flex: 1,
				borderTop: "solid 1px",
				padding: "0 10px",
			}}
			className="color2"
		>
			{receiver._id === user._id || receiver._id === "null" ? (
				<p
					style={{
						backgroundColor: "rgba(0,0,0,0.7)",
						padding: "1vw 1.5vw",
						borderRadius: 10,
					}}
				>
					Please select somebody to exchange messages with...
				</p>
			) : (
				<>
					<FaPlus style={{ flex: 1 }} />
					<MdOutlineEmojiEmotions style={{ flex: 1 }} />
					<input
						placeholder="Type a message..."
						value={message}
						style={{
							flex: 11,
							padding: "2vw 2vw",
							fontSize: "1vw",
						}}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<div
						onClick={() => {
							handleSendMessage(message, receiver._id);
							setMessage("");
						}}
						style={{ flex: 1, cursor: "pointer" }}
					>
						<BsFillSendFill />
					</div>
					<FaMicrophone style={{ flex: 1 }} />
				</>
			)}
		</div>
	);
}

export default MessageInputSection;
