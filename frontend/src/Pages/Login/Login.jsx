import { useState } from "react";

function Login() {
	const [user, setuser] = useState({
		username: "",
		password: "",
	});
	return (
		<div className="form">
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
			<button>Register</button>
		</div>
	);
}

export default Login;
