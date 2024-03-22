import { useEffect, useState } from "react";
import SingleUser from "./SingleUser/SingleUser";
import { handleGetAllUsers } from "../../../../Utilities/handeGetAllUsers";

function AllUserSection() {
	const [users, setUsers] = useState([
		{
			_id: "null",
			fullname: "Loading...",
			username: "Loading",
			createdAt: "null",
			updatedAt: "null",
		},
	]);

	useEffect(() => {
		handleGetAllUsers(setUsers);
	}, []);

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
