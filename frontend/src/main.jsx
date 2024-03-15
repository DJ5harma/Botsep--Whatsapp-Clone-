import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ChattingWithContextProvider from "./contexts/ChattingWithContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Toaster
			toastOptions={{
				style: {
					maxHeight: 80,
					position: "fixed",
					top: 0,
				},
			}}
		/>
		<ChattingWithContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ChattingWithContextProvider>
	</React.StrictMode>
);
