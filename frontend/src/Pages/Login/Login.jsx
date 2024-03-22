import { Link, useNavigate } from "react-router-dom";
import { handleLogin } from "../../Utilities/handleLogin";
import { useState } from "react";
import { useContext } from "react";
import { userContext } from "../../contexts/UserContextProvider";

function Login() {
	const [form, setForm] = useState({
		username: "",
		password: "",
	});

	const navigate = useNavigate();

	const { setUser } = useContext(userContext);

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
				value={form.username}
				onChange={(e) => setForm({ ...form, username: e.target.value })}
			/>
			<input
				placeholder="Password"
				value={form.password}
				onChange={(e) => setForm({ ...form, password: e.target.value })}
				type="password"
			/>
			<button
				onClick={async () => {
					const loggedIn = await handleLogin(form);
					if (loggedIn) {
						setUser(JSON.parse(localStorage.getItem("USER_INFO")));
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
