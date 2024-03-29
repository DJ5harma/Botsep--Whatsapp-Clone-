import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import { useContext } from "react";
import { userContext } from "./contexts/UserContextProvider";

function App() {
	const { user, setUser } = useContext(userContext);

	return (
		<div style={{ height: "100vh" }}>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/Home" element={<Home />} />
				<Route path="/Register" element={<Register />} />
				<Route path="/Login" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
