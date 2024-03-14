import { useState } from "react";

function Register() {
	const [user, setuser] = useState({
		username: "",
		fullname: "",
		password: "",
		confirmPassword: "",
	});

	return (
		<div className="form">
			<input
				placeholder="Fullname"
				value={user.fullname}
				onChange={(e) => setuser({ ...user, fullname: e.target.value })}
			/>
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
			<input
				placeholder="Confirm Password"
				value={user.confirmPassword}
				onChange={(e) =>
					setuser({ ...user, confirmPassword: e.target.value })
				}
				type="password"
			/>
			<button>Register</button>
		</div>
	);
}

export default Register;
