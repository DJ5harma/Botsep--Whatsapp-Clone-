import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleRegister } from "../../Utilities/handleRegister";

function Register() {
	const [user, setuser] = useState({
		username: "",
		fullname: "",
		password: "",
		confirmPassword: "",
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
			<button
				onClick={() => {
					const registered = handleRegister(user);
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
