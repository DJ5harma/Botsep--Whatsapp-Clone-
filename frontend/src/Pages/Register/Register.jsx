import { Link, useNavigate } from "react-router-dom";
import { handleRegister } from "../../Utilities/handleRegister";
import { useContext, useState } from "react";
import { userContext } from "../../contexts/UserContextProvider";

function Register() {
	const [form, setForm] = useState({
		fullname: "",
		username: "",
		password: "",
		profilePic: "none",
	});

	const navigate = useNavigate();

	const { setUser } = useContext(userContext);

	return (
		<div
			style={{
				height: "90vh",
			}}
			className="login-register-div"
		>
			<h1>Botsep</h1>
			<input
				placeholder="Fullname"
				value={form.fullname}
				onChange={(e) => setForm({ ...form, fullname: e.target.value })}
			/>
			<input
				placeholder="Username (unique)"
				value={form.username}
				onChange={(e) => setForm({ ...form, username: e.target.value })}
			/>
			<input
				placeholder="Password (min 8 chars)"
				value={form.password}
				onChange={(e) => setForm({ ...form, password: e.target.value })}
				type="password"
			/>
			<input
				placeholder="Confirm Password"
				value={form.confirmPassword}
				onChange={(e) =>
					setUser({ ...form, confirmPassword: e.target.value })
				}
				type="password"
			/>
			<button
				onClick={async () => {
					const registered = await handleRegister(form);
					if (registered) {
						setUser(JSON.parse(localStorage.getItem("USER_INFO")));
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
