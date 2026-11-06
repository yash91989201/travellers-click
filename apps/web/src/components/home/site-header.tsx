import { cn } from "@travellers-click/ui/lib/utils";
import { useEffect, useRef } from "react";

import { BUTTON, CONTROL, FOCUS_INK, PAGE_WIDTH, PRIMARY } from "./classes";

export function SiteHeader() {
	const navigation = useRef<HTMLDetailsElement>(null);

	useEffect(() => {
		const screen = window.matchMedia("(max-width: 959px)");
		const syncNavigation = () => {
			if (navigation.current) {
				navigation.current.open = !screen.matches;
			}
		};
		syncNavigation();
		screen.addEventListener("change", syncNavigation);
		return () => screen.removeEventListener("change", syncNavigation);
	}, []);

	return (
		<header
			className={cn(
				PAGE_WIDTH,
				"flex items-center justify-between gap-6 py-6 max-[960px]:flex-wrap max-[960px]:gap-[18px] max-[600px]:pt-[18px] max-[600px]:pb-[6px]",
			)}
		>
			<a
				className={cn(
					FOCUS_INK,
					"whitespace-nowrap font-bold text-[22px] no-underline max-[600px]:text-[20px]",
				)}
				href="#main"
			>
				Travellers Click
				<span className="block font-normal text-[#626262] text-[12px]">
					Logo placeholder
				</span>
			</a>
			<details
				className="max-[960px]:order-3 max-[960px]:w-full"
				data-navigation
				ref={navigation}
			>
				<summary
					className={cn(
						FOCUS_INK,
						"hidden max-[960px]:list-item max-[960px]:py-[10px]",
					)}
				>
					Menu
				</summary>
				<nav
					aria-label="Main navigation"
					className="flex flex-wrap gap-x-5 gap-y-3 text-[13px] max-[960px]:flex-col max-[960px]:gap-[18px] max-[960px]:py-4"
				>
					<a className={cn(FOCUS_INK, "no-underline")} href="#destinations">
						Destinations
					</a>
					<a className={cn(FOCUS_INK, "no-underline")} href="#packages">
						Holiday packages
					</a>
					<a className={cn(FOCUS_INK, "no-underline")} href="#plan">
						Custom tours
					</a>
					<a className={cn(FOCUS_INK, "no-underline")} href="#services">
						Flights &amp; hotels
					</a>
					<a className={cn(FOCUS_INK, "no-underline")} href="#how">
						About our process
					</a>
					<a className={cn(FOCUS_INK, "no-underline")} href="#contact">
						Contact
					</a>
				</nav>
			</details>
			<a
				className={cn(
					CONTROL,
					BUTTON,
					PRIMARY,
					"whitespace-nowrap px-4 py-3 text-[14px] max-[600px]:px-3 max-[600px]:py-[10px] max-[600px]:text-[13px]",
				)}
				href="#plan"
			>
				Plan my trip
			</a>
		</header>
	);
}
