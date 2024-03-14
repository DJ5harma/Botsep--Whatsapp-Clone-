import { CiMenuKebab } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { IoMdVideocam } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

function TopRightBar() {
	return (
		<div style={{ flex: 1, backgroundColor: "rgb(0,20,0)" }}>
			{/* <div style={{ flex: 3, justifyContent: "start" }}> */}
			<CgProfile
				size={30}
				style={{ marginRight: 20, marginLeft: 20, flex: 1 }}
			/>
			<p style={{ flex: 16 }}>
				<p>ReceiverName</p>
				<p style={{ fontSize: 10, color: "gray" }}>
					last seen today at: SampleDate
				</p>
			</p>
			{/* </div> */}
			<div style={{ flex: 5, justifyContent: "space-around" }}>
				<IoMdVideocam size={25} />
				<FaSearch size={25} />
				<CiMenuKebab size={25} />
			</div>
		</div>
	);
}

export default TopRightBar;
