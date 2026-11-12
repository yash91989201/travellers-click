import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
	useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { createMiddleware } from "@tanstack/react-start";
import { Toaster } from "@travellers-click/ui/components/sonner";
import { evlogErrorHandler } from "evlog/nitro/v3";

import type { orpc } from "@/utils/orpc";

import Header from "../components/header";
import ImpeccableLiveRoot from "../impeccable/ImpeccableLiveRoot";
import appCss from "../index.css?url";
export interface RouterAppContext {
	orpc: typeof orpc;
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterAppContext>()({
	server: {
		middleware: [createMiddleware().server(evlogErrorHandler)],
	},

	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "My App",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),

	component: RootDocument,
});

function RootDocument() {
	const isHome = useRouterState({
		select: (state) => state.location.pathname === "/",
	});
	return (
		<html className={isHome ? undefined : "dark"} lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				<div className={isHome ? undefined : "grid h-svh grid-rows-[auto_1fr]"}>
					{!isHome && <Header />}
					<Outlet />
				</div>
				<Toaster richColors />
				{!isHome && <TanStackRouterDevtools position="bottom-left" />}
				{!isHome && (
					<ReactQueryDevtools buttonPosition="bottom-right" position="bottom" />
				)}
				{/* impeccable-live-tanstack-start */}
				<ImpeccableLiveRoot />
				{/* impeccable-live-tanstack-end */}
				<Scripts />
			</body>
		</html>
	);
}
