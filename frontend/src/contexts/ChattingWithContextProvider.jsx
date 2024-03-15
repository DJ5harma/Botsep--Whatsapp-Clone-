import { createContext, useState } from "react";

export const chattingWith = createContext();

function ChattingWithContextProvider({ children }) {
	const [receiver, setReceiver] = useState({
		fullname: "Chatting with nobody",
		username: "Select a person to chat with",
		_id: "null",
	});

	return (
		<chattingWith.Provider value={{ receiver, setReceiver }}>
			{children}
		</chattingWith.Provider>
	);
}

export default ChattingWithContextProvider;
