import { createContext, useState } from "react";

export const chattingWith = createContext();

function ChattingWithContextProvider({ children }) {
	const [receiver, setReceiver] = useState({
		_id: "null",
		fullname: "Currently chatting with nobody",
		username: "",
	});

	return (
		<chattingWith.Provider value={{ receiver, setReceiver }}>
			{children}
		</chattingWith.Provider>
	);
}

export default ChattingWithContextProvider;
