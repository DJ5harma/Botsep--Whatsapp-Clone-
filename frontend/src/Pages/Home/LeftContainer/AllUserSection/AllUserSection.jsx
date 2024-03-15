import { useEffect, useState } from "react";
import SingleUser from "./SingleUser/SingleUser";
import axios from "axios";

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
		const { username, password } = JSON.parse(localStorage.USER_INFO);

		axios.post("/api/users/get", { username, password }).then((res) => {
			setUsers(res.data.payload);
			// console.log(res.data.payload);
		});
	}, []);

	return (
		<div
			style={{
				flex: 7,
				flexDirection: "column",
				overflow: "auto",
				justifyContent: "start",
			}}
		>
			{users.map((user) => (
				<div
					style={{
						borderBottom: "solid white 1px",
						height: "fit-content",
					}}
				>
					<SingleUser user={user} key={user._id} />
				</div>
			))}
		</div>
	);
}

export default AllUserSection;
