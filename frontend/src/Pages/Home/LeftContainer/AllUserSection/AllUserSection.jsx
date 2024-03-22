import SingleUser from "./SingleUser/SingleUser";

function AllUserSection({ users }) {
	return (
		<div
			style={{
				flex: 7,
				flexDirection: "column",
				overflow: "auto",
				justifyContent: "start",
			}}
			className="color3"
		>
			{users.map((user) => {
				return (
					<div
						style={{
							borderBottom: "solid white 1px",
							height: "fit-content",
						}}
						key={user._id}
					>
						<SingleUser user={user} />
					</div>
				);
			})}
		</div>
	);
}

export default AllUserSection;
