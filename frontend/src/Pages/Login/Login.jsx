import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
	const [user, setuser] = useState({
		username: "",
		password: "",
	});
	return (
		<div
			style={{
				border: "solid",
				height: "40vh",
				flexDirection: "column",
				justifyContent: "space-around",
			}}
		>
			<input
				placeholder="Username (unique)"
				value={user.username}
				onChange={(e) => setuser({ ...user, username: e.target.value })}
			/>
			<input
				placeholder="Password (min 8 chars)"
				value={user.password}
				onChange={(e) => setuser({ ...user, password: e.target.value })}
				type="password"
			/>
			<button>Login</button>
			<Link to="/Register">Don't have an account? Register!</Link>
		</div>
	);
}

export default Login;
