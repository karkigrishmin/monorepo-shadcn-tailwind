import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/global.css";
import "@repo/assignment-ui/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const fiveMinutesInMs = 5 * 60 * 1000;
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnMount: true,
			refetchOnReconnect: true,
			retry: false,
			staleTime: fiveMinutesInMs,
		},
	},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</React.StrictMode>
);
