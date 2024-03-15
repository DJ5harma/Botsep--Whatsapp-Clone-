function SingleUser({ user }) {
	console.log(user);
	return (
		<div
			style={{
				minHeight: 80,
				justifyContent: "start",
				paddingLeft: 3,
			}}
			className="color2"
		>
			{
				<div
					style={{
						width: 45,
						height: 45,
						border: "solid white 2px",
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
