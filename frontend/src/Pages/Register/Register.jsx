import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
	const [user, setuser] = useState({
		username: "",
		fullname: "",
		password: "",
		confirmPassword: "",
	});

	return (
		<div
			style={{
				border: "solid",
				height: "50vh",
				flexDirection: "column",
				justifyContent: "space-around",
			}}
		>
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
			<Link to="/Login">Already have an account? Login!</Link>
		</div>
	);
}

export default Register;
