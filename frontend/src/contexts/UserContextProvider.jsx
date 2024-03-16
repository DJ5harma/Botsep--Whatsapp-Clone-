import { createContext, useState } from "react";

export const userContext = createContext();

function UserContextProvider({ children }) {
	const [user, setUser] = useState({
		_id: "null",
		fullname: "Loading...",
		username: "",
	});
	return (
		<userContext.Provider value={{ user, setUser }}>
			{children}
		</userContext.Provider>
	);
}

export default UserContextProvider;
