import ChatSection from "./ChatSection/ChatSection";
import MessageInputSection from "./MessageInputSection/MessageInputSection";
import TopRightBar from "./TopRightBar/TopRightBar";

function RightContainer() {
	return (
		<div style={{ flex: 2, flexDirection: "column" }}>
			<TopRightBar />
			<ChatSection />
			<MessageInputSection />
		</div>
	);
}

export default RightContainer;
