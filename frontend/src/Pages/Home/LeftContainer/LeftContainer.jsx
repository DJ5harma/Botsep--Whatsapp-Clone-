import AllUserSection from "./AllUserSection/AllUserSection";
import PeopleSearchSection from "./PeopleSearchSection/PeopleSearchSection";
import TopLeftBar from "./TopLeftBar/TopLeftBar";

function LeftContainer() {
	return (
		<div style={{ flex: 1, flexDirection: "column" }}>
			<TopLeftBar />
			<PeopleSearchSection />
			<AllUserSection />
		</div>
	);
}

export default LeftContainer;
