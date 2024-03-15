import { Link } from "react-router-dom";
import SingleUser from "../AllUserSection/SingleUser/SingleUser";
function TopLeftBar() {
	const user = JSON.parse(localStorage.getItem("USER_INFO"));

	return (
		<div
			style={{
				flex: 1,
				justifyContent: "start",
			}}
			className="color2"
		>
			<div
				style={{
					flex: 1,
				}}
			>
				<SingleUser user={user} />
			</div>
			<Link to="/login">
				<button
					style={{
						border: "solid 2px",
						flex: 1,
						marginRight: 15,
						fontSize: 15,
					}}
				>
					Switch Account
				</button>
			</Link>
		</div>
	);
}

export default TopLeftBar;
