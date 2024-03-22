import { useContext, useEffect, useState } from "react";
import { chattingWith } from "../../../../contexts/ChattingWithContextProvider";
import { handleGetPersonalMessages } from "../../../../Utilities/handleGetPersonalMessages";
import SelfInfoSection from "./SelfInfoSection";
import { userContext } from "../../../../contexts/UserContextProvider";

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

	const { user } = useContext(userContext);

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
				overflow: "auto",
			}}
			className="color3"
		>
			{receiver._id === "null" || receiver._id === user._id ? (
				<SelfInfoSection />
			) : (
				messages.map((message) => (
					<div
						key={message._id}
						style={{
							height: "4vw",
							width: "100%",
							justifyContent:
								message.senderId === receiver._id
									? "start"
									: "end",
							padding: "0 1vw",
							margin: "1.4vw 0",
						}}
					>
						<p
							style={{
								border: "solid 2px",
								borderRadius:
									message.senderId === receiver._id
										? "5px 50px 50px 5px"
										: "50px 5px 5px 50px",
								padding: "1vw 2vw",
								backgroundColor:
									message.senderId === receiver._id
										? "black"
										: "rgb(0,0,40)",
								fontSize: "1.2vw",
							}}
						>
							{message.text}
							<p style={{ fontSize: "0.75vw", color: "gray" }}>
								{message.updatedAt.slice(-13, -5) +
									", " +
									message.updatedAt.slice(0, 10)}
							</p>
						</p>
					</div>
				))
			)}
		</div>
	);
}

export default ChatSection;
