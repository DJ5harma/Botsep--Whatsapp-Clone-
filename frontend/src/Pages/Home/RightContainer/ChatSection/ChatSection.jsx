import { useContext, useEffect, useState } from "react";
import { chattingWith } from "../../../../contexts/ChattingWithContextProvider";
import { handleGetPersonalMessages } from "../../../../Utilities/handleGetPersonalMessages";

function ChatSection() {
	const { receiver } = useContext(chattingWith);
	const [messages, setMessages] = useState([
		{
			_id: "loading...",
			receiverId: "loading...",
			senderId: "loading...",
			text: "No messages exchanged till now.......",
			createdAt: "loading...",
			updatedAt: "2024-03-16T06:20:24.087Z",
		},
	]);

	useEffect(() => {
		handleGetPersonalMessages(receiver._id, setMessages);
	}, [receiver]);

	return (
		<div
			style={{
				flex: 7,
				borderTop: "solid 1px",
				flexDirection: "column",
				justifyContent: "start",
			}}
			className="color3"
		>
			{messages.map((message) => (
				<div
					key={message._id}
					style={{
						height: "4vw",
						width: "100%",

						justifyContent:
							message.senderId === receiver._id ? "start" : "end",
						padding: "0 1vw",
						marginTop: "1.5vw",
					}}
				>
					<p
						style={{
							border: "solid 2px",
							borderRadius: 30,
							padding: "1vw 2vw",
						}}
					>
						{message.text}
					</p>
				</div>
			))}
		</div>
	);
}

export default ChatSection;
