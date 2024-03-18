import { Link, useNavigate } from "react-router-dom";
import { handleRegister } from "../../Utilities/handleRegister";
import { useState } from "react";

function Register() {
	const [user, setUser] = useState({
		fullname: "",
		username: "",
		password: "",
		profilePic: "none",
	});

	const navigate = useNavigate();

	return (
		<div
			style={{
				height: "90vh",
				// width: "32vw",
			}}
			className="login-register-div"
		>
			<h1>Botsep</h1>
			<input
				placeholder="Fullname"
				value={user.fullname}
				onChange={(e) => setUser({ ...user, fullname: e.target.value })}
			/>
			<input
				placeholder="Username (unique)"
				value={user.username}
				onChange={(e) => setUser({ ...user, username: e.target.value })}
			/>
			<input
				placeholder="Password (min 8 chars)"
				value={user.password}
				onChange={(e) => setUser({ ...user, password: e.target.value })}
				type="password"
			/>
			<input
				placeholder="Confirm Password"
				value={user.confirmPassword}
				onChange={(e) =>
					setUser({ ...user, confirmPassword: e.target.value })
				}
				type="password"
			/>
			<button
				onClick={async () => {
					const registered = await handleRegister(user);
					if (registered) {
						navigate("/Home", { replace: true });
					}
				}}
			>
				Register
			</button>
			<Link to="/Login">
				<p>Already have an account? Login!</p>
			</Link>
		</div>
	);
}

export default Register;
