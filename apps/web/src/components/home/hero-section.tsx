import { cn } from "@travellers-click/ui/lib/utils";
import { type FormEvent, useEffect, useRef, useState } from "react";

import { BUTTON, CONTROL, FOCUS_INK, PAGE_WIDTH, PRIMARY } from "./classes";
import type { DiscoverySelection, Region } from "./types";

const HERO_DESTINATIONS = [
	{ name: "Kerala", landmark: "Alleppey backwaters", region: "India" },
	{ name: "Rajasthan", landmark: "Amer Fort", region: "India" },
	{ name: "Bali", landmark: "Ulun Danu temple", region: "International" },
	{ name: "Vietnam", landmark: "Ha Long Bay", region: "International" },
] as const;
const HERO_SLIDE_MS = 9000;

interface HeroSectionProps {
	onExplore: (selection: DiscoverySelection) => void;
}

export function HeroSection({ onExplore }: HeroSectionProps) {
	const hero = useRef<HTMLElement>(null);
	const [heroIndex, setHeroIndex] = useState(0);
	const [heroPaused, setHeroPaused] = useState(false);
	const [heroVisible, setHeroVisible] = useState(true);
	const [reducedMotion, setReducedMotion] = useState(false);
	const [discoveryDestination, setDiscoveryDestination] = useState("");
	const activeDestination = HERO_DESTINATIONS[heroIndex];
	const heroRunning = !heroPaused && heroVisible && !reducedMotion;
	let pauseLabel = heroPaused ? "Play slideshow" : "Pause slideshow";
	if (reducedMotion) {
		pauseLabel = "Motion off";
	}

	useEffect(() => {
		const media = window.matchMedia("(prefers-reduced-motion: reduce)");
		const syncMotion = () => setReducedMotion(media.matches);
		let inView = true;
		const syncVisibility = () => setHeroVisible(inView && !document.hidden);
		syncMotion();
		syncVisibility();
		media.addEventListener("change", syncMotion);
		document.addEventListener("visibilitychange", syncVisibility);
		const observer =
			typeof IntersectionObserver === "undefined"
				? undefined
				: new IntersectionObserver(([entry]) => {
						inView = entry.isIntersecting;
						syncVisibility();
					});
		if (hero.current) {
			observer?.observe(hero.current);
		}
		return () => {
			media.removeEventListener("change", syncMotion);
			document.removeEventListener("visibilitychange", syncVisibility);
			observer?.disconnect();
		};
	}, []);

	useEffect(() => {
		if (!heroRunning) {
			return;
		}
		const timer = window.setTimeout(
			() => setHeroIndex((index) => (index + 1) % HERO_DESTINATIONS.length),
			HERO_SLIDE_MS,
		);
		return () => window.clearTimeout(timer);
	}, [heroIndex, heroRunning]);

	function explorePackages(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const selectedRegion = data.get("destination");
		const region: Region =
			selectedRegion === "India" || selectedRegion === "International"
				? selectedRegion
				: "all";
		const choices = [
			data.get("date"),
			data.get("duration"),
			data.get("type"),
		].filter(Boolean);
		onExplore({
			region,
			preferences: choices.length
				? ` Your preferences: ${choices.join(", ")}. Date, duration, and trip type matching need a live catalogue.`
				: "",
		});
		document.getElementById("packages")?.scrollIntoView();
	}

	return (
		<section
			aria-labelledby="hero-title"
			className="group relative grid grid-cols-[minmax(0,1fr)] grid-rows-[var(--hero-height)_1fr_1fr] [--hero-height:620px] max-[600px]:[--hero-height:570px]"
			data-paused={heroPaused}
			data-running={heroRunning}
			id="destinations"
			ref={hero}
		>
			<div className="relative isolate col-start-1 row-[1/3]">
				<div className="absolute inset-0 -z-10 overflow-hidden border-[#999] border-y border-dashed bg-[#e6e6e6]">
					<span className="absolute top-7 right-8 z-[1] text-[#606060] text-[12px] max-[600px]:top-12 max-[600px]:right-[18px]">
						{activeDestination.name} · Destination image placeholder
					</span>
					<div
						className="absolute inset-0 animate-[hero-zoom_9s_cubic-bezier(0.16,1,0.3,1)_both] bg-[#e6e6e6] group-data-[paused=true]:animate-none motion-reduce:animate-none group-data-[running=false]:[animation-play-state:paused]"
						key={activeDestination.name}
					>
						<div className="pointer-events-none absolute inset-0 grid animate-[hero-sweep_9s_ease-in-out_both] content-center gap-5 group-data-[paused=true]:hidden motion-reduce:hidden group-data-[running=false]:[animation-play-state:paused]">
							<i className="ml-auto block h-[3px] w-[70%] bg-[#aaa] even:h-[7px] even:w-[48%] [&:nth-child(3)]:w-[86%]" />
							<i className="ml-auto block h-[3px] w-[70%] bg-[#aaa] even:h-[7px] even:w-[48%] [&:nth-child(3)]:w-[86%]" />
							<i className="ml-auto block h-[3px] w-[70%] bg-[#aaa] even:h-[7px] even:w-[48%] [&:nth-child(3)]:w-[86%]" />
							<i className="ml-auto block h-[3px] w-[70%] bg-[#aaa] even:h-[7px] even:w-[48%] [&:nth-child(3)]:w-[86%]" />
							<i className="ml-auto block h-[3px] w-[70%] bg-[#aaa] even:h-[7px] even:w-[48%] [&:nth-child(3)]:w-[86%]" />
						</div>
					</div>
				</div>
				<div className={cn(PAGE_WIDTH, "relative h-full")}>
					<div className="relative z-[1] max-w-[650px] pt-[72px] max-[600px]:max-w-full max-[960px]:max-w-[58%] max-[600px]:pt-[44px]">
						<h1
							className="m-0 text-balance font-bold text-[clamp(40px,4.4vw,64px)] leading-[1.15] tracking-[-0.025em] max-[600px]:text-[38px]"
							id="hero-title"
						>
							Where would you
							<br />
							like to go next?
						</h1>
					</div>
					<a
						aria-label={`Start planning a trip to ${activeDestination.name}`}
						className={cn(
							FOCUS_INK,
							"absolute top-[180px] left-[73%] grid justify-items-center gap-3 whitespace-nowrap font-semibold text-[18px] no-underline max-[600px]:top-[242px] max-[600px]:right-2 max-[960px]:right-[4%] max-[960px]:left-auto max-[600px]:gap-2 max-[600px]:text-[15px]",
						)}
						href="#discovery"
						key={activeDestination.name}
						onClick={() => setDiscoveryDestination(activeDestination.region)}
					>
						<span className="relative block h-[132px] w-[104px] animate-[pin-arrive_2s_cubic-bezier(0.16,1,0.3,1)_both] group-data-[paused=true]:animate-none motion-reduce:animate-none max-[600px]:h-[108px] max-[600px]:w-[84px] group-data-[running=false]:[animation-play-state:paused]">
							<svg
								aria-hidden="true"
								className="h-full w-full fill-[#f5f5f5] stroke-[#555] [stroke-width:1.5]"
								focusable="false"
								viewBox="0 0 104 132"
							>
								<path d="M52 128C44 116 5 77 5 52a47 47 0 1 1 94 0c0 25-39 64-47 76Z" />
							</svg>
							<span
								className="absolute inset-x-[10px] top-[10px] grid aspect-square animate-[landmark-reveal_9s_ease_both] place-items-center overflow-hidden rounded-full border border-[#999] border-dashed bg-[#d4d4d4] p-2 group-data-[paused=true]:animate-none motion-reduce:animate-none max-[600px]:inset-x-2 max-[600px]:top-2 max-[600px]:p-[6px] group-data-[running=false]:[animation-play-state:paused]"
								title={`${activeDestination.landmark} — landmark photo placeholder`}
							>
								<span className="whitespace-normal text-center font-semibold text-[13px] leading-[1.25] max-[600px]:text-[12px]">
									Landmark
									<small className="mt-[6px] block font-normal text-[12px] max-[600px]:mt-[3px]">
										photo
									</small>
								</span>
							</span>
						</span>
						<span>Find your next stop.</span>
					</a>
					<svg
						aria-hidden="true"
						className="pointer-events-none absolute inset-0 h-[var(--hero-height)] w-full overflow-visible [&_marker_path]:fill-none [&_marker_path]:stroke-[#555] [&_marker_path]:[stroke-linecap:round] [&_marker_path]:[stroke-linejoin:round] [&_marker_path]:[stroke-width:1.5]"
						focusable="false"
						preserveAspectRatio="none"
						viewBox="0 0 1160 480"
					>
						<defs>
							<marker
								id="hero-arrow"
								markerHeight="12"
								markerUnits="userSpaceOnUse"
								markerWidth="12"
								orient="auto"
								refX="9"
								refY="6"
							>
								<path d="m2 2 7 4-7 4" />
							</marker>
						</defs>
						<path
							className="fill-none stroke-[#666] [stroke-dasharray:3_8] [stroke-linecap:round] [stroke-width:1.5] [vector-effect:non-scaling-stroke] max-[600px]:hidden"
							d="M935 286 C1010 346 806 374 684 334 C570 296 612 230 710 260 C820 300 622 408 424 370 S128 340 128 462"
							markerEnd="url(#hero-arrow)"
						/>
						<path
							className="hidden fill-none stroke-[#666] [stroke-dasharray:3_8] [stroke-linecap:round] [stroke-width:1.5] [vector-effect:non-scaling-stroke] max-[600px]:block"
							d="M935 338 C1030 388 760 406 600 360 S120 340 128 462"
							markerEnd="url(#hero-arrow)"
						/>
					</svg>
					<a
						className={cn(
							FOCUS_INK,
							"absolute top-[calc(var(--hero-height)_-_64px)] left-[162px] font-semibold text-[20px] no-underline max-[600px]:left-[70px] max-[600px]:text-[18px]",
						)}
						href="#discovery"
					>
						Let’s start here.
					</a>
					<div
						aria-label="Sample destinations"
						className="absolute top-[278px] left-0 flex max-w-[450px] flex-wrap items-center gap-2 max-[600px]:top-[166px] max-[600px]:left-0 max-[600px]:max-w-full max-[600px]:gap-[6px]"
						role="group"
					>
						{HERO_DESTINATIONS.map((place, index) => (
							<button
								aria-pressed={heroIndex === index}
								className={cn(
									CONTROL,
									BUTTON,
									"border-[#999] bg-transparent px-3 py-2 text-[13px] hover:bg-transparent aria-pressed:border-[#333] aria-pressed:bg-[#333] aria-pressed:text-white max-[600px]:px-[9px] max-[600px]:py-[7px] max-[600px]:text-[12px]",
								)}
								key={place.name}
								onClick={() => {
									setHeroIndex(index);
									setHeroPaused(true);
								}}
								type="button"
							>
								{place.name}
							</button>
						))}
						<button
							aria-pressed={heroPaused}
							className={cn(
								CONTROL,
								BUTTON,
								"border-transparent bg-transparent px-3 py-2 text-[13px] underline underline-offset-[3px] hover:bg-transparent disabled:cursor-default disabled:text-[#555] max-[600px]:px-[9px] max-[600px]:py-[7px] max-[600px]:text-[12px]",
							)}
							disabled={reducedMotion}
							onClick={() => setHeroPaused((paused) => !paused)}
							type="button"
						>
							{pauseLabel}
						</button>
					</div>
				</div>
			</div>
			<div
				className={cn(
					PAGE_WIDTH,
					"relative z-[1] col-start-1 row-[2/4] self-center",
				)}
			>
				<form
					className="grid grid-cols-[1.2fr_1.1fr_1fr_1fr_auto] items-end gap-[14px] border border-[#888] bg-white p-6 max-[960px]:grid-cols-2 max-[600px]:gap-4 max-[600px]:p-[18px]"
					id="discovery"
					onSubmit={explorePackages}
				>
					<label className="grid min-w-0 gap-2 font-semibold text-[13px] max-[600px]:col-span-full">
						Where to?
						<select
							className={cn(
								CONTROL,
								FOCUS_INK,
								"h-12 w-full min-w-0 px-4 py-3 font-normal text-[14px]",
							)}
							name="destination"
							onChange={(event) => setDiscoveryDestination(event.target.value)}
							value={discoveryDestination}
						>
							<option value="">Anywhere</option>
							<option>India</option>
							<option>International</option>
						</select>
					</label>
					<label className="grid min-w-0 gap-2 font-semibold text-[13px]">
						Departure date
						<input
							className={cn(
								CONTROL,
								FOCUS_INK,
								"h-12 w-full min-w-0 px-4 py-3 font-normal text-[14px]",
							)}
							name="date"
							type="date"
						/>
					</label>
					<label className="grid min-w-0 gap-2 font-semibold text-[13px]">
						Duration
						<select
							className={cn(
								CONTROL,
								FOCUS_INK,
								"h-12 w-full min-w-0 px-4 py-3 font-normal text-[14px]",
							)}
							name="duration"
						>
							<option value="">Any duration</option>
							<option>Up to 5 days</option>
							<option>6–10 days</option>
							<option>11+ days</option>
						</select>
					</label>
					<label className="grid min-w-0 gap-2 font-semibold text-[13px]">
						Trip type
						<select
							className={cn(
								CONTROL,
								FOCUS_INK,
								"h-12 w-full min-w-0 px-4 py-3 font-normal text-[14px]",
							)}
							name="type"
						>
							<option value="">Any trip type</option>
							<option>Solo</option>
							<option>Couple</option>
							<option>Family</option>
							<option>Group</option>
							<option>Corporate</option>
						</select>
					</label>
					<button
						className={cn(
							CONTROL,
							BUTTON,
							PRIMARY,
							"min-h-12 px-4 py-3 text-[14px] max-[960px]:col-span-full",
						)}
						type="submit"
					>
						Explore packages
					</button>
				</form>
			</div>
		</section>
	);
}
