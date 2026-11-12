import { cn } from "@travellers-click/ui/lib/utils";
import { Pause, Play } from "lucide-react";
import { type FormEvent, useEffect, useRef, useState } from "react";

import { BUTTON, CONTROL, FOCUS_INK, PAGE_WIDTH, SLATE } from "./classes";
import type { DiscoverySelection, Region } from "./types";

const HERO_DESTINATIONS = [
	{
		name: "Kerala",
		landmark: "Alleppey backwaters",
		region: "India",
		image: "/images/hero/kerala",
		position: "object-[72%_85%]",
		alt: "Palm-lined backwaters in Alleppey, Kerala",
	},
	{
		name: "Rajasthan",
		landmark: "Amer Fort",
		region: "India",
		image: "/images/hero/rajasthan",
		position: "object-[55%_70%]",
		alt: "Amer Fort overlooking the hills of Rajasthan",
	},
	{
		name: "Bali",
		landmark: "Ulun Danu temple",
		region: "International",
		image: "/images/hero/bali",
		position: "object-[60%_65%]",
		alt: "Palm trees and stepped rice terraces in Tegallalang, Bali",
	},
	{
		name: "Vietnam",
		landmark: "Ha Long Bay",
		region: "International",
		image: "/images/hero/vietnam",
		position: "object-[55%_75%]",
		alt: "Limestone islands rising from the water in Ha Long Bay, Vietnam",
	},
] as const;

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
	const nextDestination =
		HERO_DESTINATIONS[(heroIndex + 1) % HERO_DESTINATIONS.length];
	let pauseLabel = heroPaused ? "Resume animation" : "Pause animation";
	if (reducedMotion) {
		pauseLabel = "Motion disabled";
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
			className="group relative grid grid-cols-[minmax(0,1fr)] grid-rows-[var(--hero-height)_1fr_1fr] bg-[linear-gradient(to_bottom,transparent_var(--hero-height),var(--background)_var(--hero-height))] [--hero-height:clamp(500px,calc(85svh_-_160px),660px)] max-[600px]:[--hero-height:clamp(570px,calc(85svh_-_230px),620px)]"
			data-paused={heroPaused}
			data-running={heroRunning}
			data-static={reducedMotion}
			id="destinations"
			ref={hero}
		>
			<link
				as="image"
				fetchPriority="low"
				href={`${nextDestination.image}-1920.webp`}
				imageSizes="100vw"
				imageSrcSet={`${nextDestination.image}-960.webp 960w, ${nextDestination.image}-1920.webp 1920w, ${nextDestination.image}-2880.webp 2880w`}
				rel="preload"
			/>
			<link
				as="image"
				href={`${nextDestination.image}-motion.webp`}
				rel="prefetch"
			/>
			<link
				as="image"
				href={`${nextDestination.image}-pin.webp`}
				rel="prefetch"
			/>
			<div className="relative isolate col-start-1 row-[1/3]">
				<div className="absolute inset-0 -z-10 overflow-hidden bg-slate">
					<div className="absolute inset-0" key={activeDestination.name}>
						<img
							alt={activeDestination.alt}
							className={cn(
								"absolute inset-0 h-full w-full scale-[1.02] object-cover",
								activeDestination.position
							)}
							fetchPriority="high"
							height={1080}
							sizes="100vw"
							src={`${activeDestination.image}-1920.webp`}
							srcSet={`${activeDestination.image}-960.webp 960w, ${activeDestination.image}-1920.webp 1920w, ${activeDestination.image}-2880.webp 2880w`}
							width={1920}
						/>
						<img
							alt=""
							aria-hidden="true"
							className={cn(
								"absolute inset-0 h-full w-full animate-[hero-zoom_9s_linear_both] object-cover group-data-[static=true]:animate-none motion-reduce:animate-none group-data-[running=false]:[animation-play-state:paused]",
								activeDestination.position
							)}
							height={1080}
							onAnimationEnd={(event) => {
								// The photo is the clock, so pausing never desynchronizes the scene.
								if (event.animationName === "hero-zoom" && heroRunning) {
									setHeroIndex(
										(index) => (index + 1) % HERO_DESTINATIONS.length
									);
								}
							}}
							sizes="100vw"
							src={`${activeDestination.image}-1920.webp`}
							srcSet={`${activeDestination.image}-960.webp 960w, ${activeDestination.image}-1920.webp 1920w, ${activeDestination.image}-2880.webp 2880w`}
							width={1920}
						/>
						<img
							alt=""
							aria-hidden="true"
							className={cn(
								"pointer-events-none absolute -inset-x-[30%] inset-y-0 h-full w-[160%] max-w-none animate-[hero-pan_9s_linear_both] object-cover group-data-[static=true]:hidden motion-reduce:hidden group-data-[running=false]:[animation-play-state:paused]",
								activeDestination.position
							)}
							height={540}
							src={`${activeDestination.image}-motion.webp`}
							width={960}
						/>
					</div>
					<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,24,28,0.80)_0%,rgba(12,24,28,0.55)_36%,rgba(12,24,28,0.04)_76%),linear-gradient(0deg,rgba(12,24,28,0.42),transparent_35%)] max-[600px]:bg-[linear-gradient(180deg,rgba(12,24,28,0.78),rgba(12,24,28,0.18)_60%,rgba(12,24,28,0.48))]" />
				</div>
				<div className={cn(PAGE_WIDTH, "relative h-full")}>
					<div className="relative z-[1] max-w-[650px] pt-[80px] max-[600px]:max-w-full max-[960px]:max-w-[58%] max-[600px]:pt-12">
						<h1
							className="m-0 text-balance font-normal text-[clamp(40px,4.4vw,64px)] text-white leading-[1.08] tracking-[-0.025em] max-[600px]:text-[clamp(32px,10vw,40px)]"
							id="hero-title"
						>
							What’s your next
							<br />
							destination?
						</h1>
						<p
							className="m-0 mt-5 font-heading text-[clamp(44px,4.5vw,66px)] text-primary italic leading-[1.15] tracking-[-0.02em] max-[600px]:mt-3 max-[600px]:text-[44px]"
							data-hero-destination
						>
							<span
								className="-mx-[0.2em] -my-[0.12em] inline-block animate-[hero-name_9s_linear_both] px-[0.2em] py-[0.12em] group-data-[static=true]:animate-none motion-reduce:animate-none group-data-[running=false]:[animation-play-state:paused]"
								key={activeDestination.name}
							>
								{activeDestination.name}?
							</span>
						</p>
					</div>
					<a
						aria-label={`Start planning a trip to ${activeDestination.name}`}
						className={cn(
							FOCUS_INK,
							"absolute top-[180px] left-[73%] z-[1] grid justify-items-center gap-3 whitespace-nowrap font-semibold text-[18px] text-white no-underline focus-visible:outline-white max-[600px]:top-[242px] max-[600px]:right-2 max-[960px]:right-[4%] max-[960px]:left-auto max-[600px]:gap-2 max-[600px]:text-[15px]"
						)}
						href="#discovery"
						onClick={() => setDiscoveryDestination(activeDestination.region)}
					>
						<span
							className="grid animate-[pin-arrive_9s_linear_both] justify-items-center gap-3 group-data-[static=true]:animate-none motion-reduce:animate-none group-data-[running=false]:[animation-play-state:paused]"
							key={activeDestination.name}
						>
							<span className="relative block h-[132px] w-[104px] drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)] group-data-[static=true]:animate-none motion-reduce:animate-none max-[600px]:h-[108px] max-[600px]:w-[84px] group-data-[running=false]:[animation-play-state:paused]">
								<svg
									aria-hidden="true"
									className="h-full w-full fill-primary stroke-white [stroke-width:1.5]"
									focusable="false"
									viewBox="0 0 104 132"
								>
									<path d="M52 128C44 116 5 77 5 52a47 47 0 1 1 94 0c0 25-39 64-47 76Z" />
								</svg>
								<span
									className="absolute inset-x-[10px] top-[10px] block aspect-square animate-[landmark-reveal_9s_ease_both] overflow-hidden rounded-full border-2 border-white bg-slate group-data-[static=true]:animate-none motion-reduce:animate-none max-[600px]:inset-x-2 max-[600px]:top-2 group-data-[running=false]:[animation-play-state:paused]"
									title={activeDestination.landmark}
								>
									<img
										alt={activeDestination.landmark}
										className="h-full w-full object-cover"
										height={320}
										src={`${activeDestination.image}-pin.webp`}
										width={320}
									/>
								</span>
							</span>
							<span className="bg-[rgba(8,27,31,0.72)] px-3 py-2 font-normal text-[14px] leading-[1.4]">
								{activeDestination.landmark}
							</span>
						</span>
					</a>
					<a
						className={cn(
							FOCUS_INK,
							"absolute top-[calc(var(--hero-height)_-_64px)] left-0 font-medium text-[15px] text-white underline underline-offset-8 focus-visible:outline-white max-[600px]:text-[14px]"
						)}
						href="#discovery"
					>
						Let’s start here.
					</a>
					<a
						className="absolute top-[calc(var(--hero-height)_-_32px)] right-0 bg-[rgba(8,27,31,0.72)] px-2 py-1 text-[12px] text-white underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
						href="/images/hero/credits.html"
					>
						Photo credits
					</a>
					<button
						aria-label={pauseLabel}
						aria-pressed={heroPaused}
						className="absolute top-6 right-0 grid size-10 cursor-pointer place-items-center rounded-full border border-white/60 bg-[rgba(8,27,31,0.72)] text-white hover:bg-slate focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 disabled:cursor-default disabled:opacity-60"
						disabled={reducedMotion}
						onClick={() => setHeroPaused((paused) => !paused)}
						type="button"
					>
						{heroPaused ? (
							<Play aria-hidden="true" size={16} />
						) : (
							<Pause aria-hidden="true" size={16} />
						)}
					</button>
				</div>
			</div>
			<div
				className={cn(
					PAGE_WIDTH,
					"relative z-[1] col-start-1 row-[2/4] self-center"
				)}
			>
				<form
					className="grid grid-cols-[1.2fr_1.1fr_1fr_1fr_auto] items-end gap-[14px] rounded-[8px] bg-card p-7 shadow-[0_16px_40px_-16px_rgba(23,62,73,0.28)] max-[960px]:grid-cols-2 max-[600px]:gap-4 max-[600px]:p-[18px]"
					id="discovery"
					onSubmit={explorePackages}
				>
					<label className="grid min-w-0 gap-2 font-semibold text-[14px] max-[600px]:col-span-full">
						Where to?
						<select
							className={cn(
								CONTROL,
								FOCUS_INK,
								"h-12 w-full min-w-0 px-4 py-3 font-normal text-base"
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
					<label className="grid min-w-0 gap-2 font-semibold text-[14px]">
						Departure date
						<input
							className={cn(
								CONTROL,
								FOCUS_INK,
								"h-12 w-full min-w-0 px-4 py-3 font-normal text-base"
							)}
							name="date"
							type="date"
						/>
					</label>
					<label className="grid min-w-0 gap-2 font-semibold text-[14px]">
						Duration
						<select
							className={cn(
								CONTROL,
								FOCUS_INK,
								"h-12 w-full min-w-0 px-4 py-3 font-normal text-base"
							)}
							name="duration"
						>
							<option value="">Any duration</option>
							<option>Up to 5 days</option>
							<option>6–10 days</option>
							<option>11+ days</option>
						</select>
					</label>
					<label className="grid min-w-0 gap-2 font-semibold text-[14px] max-[600px]:col-span-full">
						Trip type
						<select
							className={cn(
								CONTROL,
								FOCUS_INK,
								"h-12 w-full min-w-0 px-4 py-3 font-normal text-base"
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
							SLATE,
							"min-h-12 px-4 py-3 text-[14px] max-[960px]:col-span-full"
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
