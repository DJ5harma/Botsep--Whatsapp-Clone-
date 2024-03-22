import { FaSearch } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";

function PeopleSearchSection({ users }) {
	console.log(users);
	return (
		<div
			style={{
				flex: 1,
				justifyContent: "space-around",
				borderBottom: "solid 1px",
			}}
		>
			<FaSearch size={25} style={{ flex: 1 }} />
			<input placeholder="Search or start new chat" style={{ flex: 5 }} />
			<IoFilter size={25} style={{ flex: 1 }} />
		</div>
	);
}

export default PeopleSearchSection;
