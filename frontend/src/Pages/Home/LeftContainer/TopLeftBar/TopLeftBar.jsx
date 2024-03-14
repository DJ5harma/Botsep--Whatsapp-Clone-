import { CgProfile } from "react-icons/cg";
function TopLeftBar() {
	return (
		<div
			style={{
				flex: 1,
				justifyContent: "start",
				backgroundColor: "rgb(0,20,0)",
			}}
		>
			<CgProfile size={30} style={{ marginRight: 20, marginLeft: 20 }} />
		</div>
	);
}

export default TopLeftBar;
