import { CgProfile } from "react-icons/cg";

function SingleUser() {
	return (
		<div
			style={{
				minHeight: 70,
				border: "solid 1px white",
				justifyContent: "start",
				backgroundColor: "rgb(0,20,0)",
			}}
		>
			<CgProfile size={30} style={{ marginRight: 20, marginLeft: 20 }} />
			<p>
				<span>SingleUser</span>
				<span style={{ color: "gray", fontSize: 10, display: "block" }}>
					some sample message
				</span>
			</p>
		</div>
	);
}

export default SingleUser;
