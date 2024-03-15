import { useContext } from "react";
import { chattingWith } from "../../../../../contexts/ChattingWithContextProvider";

function SingleUser({ user }) {
	const { setReceiver } = useContext(chattingWith);

	return (
		<div
			style={{
				minHeight: 80,
				justifyContent: "start",
				paddingLeft: 3,
				cursor: "pointer",
			}}
			className="color2"
			onClick={() => {
				setReceiver({
					fullname: user.fullname,
					username: user.username,
					_id: user._id,
				});
			}}
		>
			{
				<div
					style={{
						width: 45,
						height: 45,
						border: "solid rgb(100,100,100) 2px",
						borderRadius: 30,
						marginRight: 15,
						marginLeft: 15,
					}}
				>
					{user.profilePic === "none" ? (
						user.fullname[0]
					) : (
						<img src={user.profilePic} size={30} alt="" />
					)}
				</div>
			}
			<p>
				<span>{user.fullname}</span>
				<span style={{ color: "gray", fontSize: 14, display: "block" }}>
					{user.username}
				</span>
			</p>
		</div>
	);
}

export default SingleUser;
