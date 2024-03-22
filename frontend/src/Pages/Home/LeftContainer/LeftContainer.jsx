import { useEffect, useState } from "react";
import AllUserSection from "./AllUserSection/AllUserSection";
import PeopleSearchSection from "./PeopleSearchSection/PeopleSearchSection";
import TopLeftBar from "./TopLeftBar/TopLeftBar";
import { handleGetAllUsers } from "../../../Utilities/handeGetAllUsers";

function LeftContainer() {
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
				flex: 1,
				flexDirection: "column",
				borderRight: "solid 1px",
			}}
		>
			<TopLeftBar />
			<PeopleSearchSection users={users} />
			<AllUserSection users={users} />
		</div>
	);
}

export default LeftContainer;
