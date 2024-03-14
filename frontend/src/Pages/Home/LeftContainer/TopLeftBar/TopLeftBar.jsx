import { CgProfile } from "react-icons/cg";
function TopLeftBar() {
	return (
		<div style={{ flex: 1, justifyContent: "start" }}>
			<CgProfile size={30} style={{ marginRight: 20, marginLeft: 20 }} />
		</div>
	);
}

export default TopLeftBar;
