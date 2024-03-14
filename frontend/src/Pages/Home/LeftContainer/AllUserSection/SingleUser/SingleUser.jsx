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
				<p>SingleUser</p>
				<p style={{ color: "gray", fontSize: 10 }}>
					some sample message
				</p>
			</p>
		</div>
	);
}

export default SingleUser;
