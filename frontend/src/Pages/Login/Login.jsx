import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleLogin } from "../../Utilities/handleLogin";

function Login() {
	const [user, setuser] = useState({
		username: "",
		password: "",
	});

	const navigate = useNavigate();

	return (
		<div
			style={{
				height: "60vh",
			}}
			className="login-register-div"
		>
			<h1>Botsep</h1>

			<input
				placeholder="Username"
				value={user.username}
				onChange={(e) => setuser({ ...user, username: e.target.value })}
			/>
			<input
				placeholder="Password"
				value={user.password}
				onChange={(e) => setuser({ ...user, password: e.target.value })}
				type="password"
			/>
			<button
				onClick={async () => {
					const loggedIn = await handleLogin(user);
					if (loggedIn) {
						navigate("/Home", { replace: true });
					}
				}}
			>
				Login
			</button>
			<Link to="/Register">
				<p>Don't have an account? Register!</p>
			</Link>
		</div>
	);
}

export default Login;
