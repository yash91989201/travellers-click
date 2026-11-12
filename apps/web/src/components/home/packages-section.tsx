import { cn } from "@travellers-click/ui/lib/utils";
import { motion } from "motion/react";
import { type FocusEvent, type PointerEvent, useEffect, useState } from "react";

import {
	LINK,
	PAGE_WIDTH,
	SECTION_LEDE,
	SECTION_PAD,
	SECTION_TITLE,
} from "./classes";
import type { Region } from "./types";

const SAMPLE_TRIPS = [
	{
		place: "Kerala",
		image: "kerala",
		name: "Kerala at your pace",
		region: "India",
		days: 6,
	},
	{
		place: "Rajasthan",
		image: "rajasthan",
		name: "A Rajasthan introduction",
		region: "India",
		days: 5,
	},
	{
		place: "Bali",
		image: "bali",
		name: "Time together in Bali",
		region: "International",
		days: 7,
	},
] as const;

const FILTERS = [
	{ value: "all", label: "All trips" },
	{ value: "India", label: "India" },
	{ value: "International", label: "International" },
] as const;

const BADGE =
	"whitespace-nowrap rounded-[3px] px-2.5 py-1.5 text-xs font-medium leading-none";

const HOVER_QUERY = "(hover: hover) and (min-width: 901px)";
const TITLE_REST = 22;
const TITLE_OPEN_DEFAULT = 28;
const GROW_OPEN = 4;
const SPRING = { type: "spring", visualDuration: 0.675, bounce: 0.28 } as const;
const FADE = { duration: 0.315, ease: "easeOut" } as const;
const TRANSITION = {
	default: SPRING,
	opacity: FADE,
} as const;
const INSTANT = { duration: 0 } as const;

interface TripCardProps {
	hidden: boolean;
	onChooseDestination: (place: string) => void;
	trip: (typeof SAMPLE_TRIPS)[number];
}

// Hover accordion on desktop pointers; touch and narrow screens show every card open via CSS.
function TripCard({ hidden, onChooseDestination, trip }: TripCardProps) {
	// null until mounted: the CSS baseline renders first so there is no flash on hydration.
	const [interactive, setInteractive] = useState<boolean | null>(null);
	const [active, setActive] = useState(false);
	const [titleOpen, setTitleOpen] = useState(TITLE_OPEN_DEFAULT);

	useEffect(() => {
		const query = window.matchMedia(HOVER_QUERY);
		const sync = () => setInteractive(query.matches);
		sync();
		query.addEventListener("change", sync);
		return () => query.removeEventListener("change", sync);
	}, []);

	const open = () => {
		setTitleOpen(Math.min(32, Math.max(24, window.innerWidth * 0.026)));
		setActive(true);
	};
	const close = () => setActive(false);

	// Not interactive: park everything in the CSS "all open" pose.
	const isOpen = interactive === false || active;
	const driven = interactive !== null;
	const transition = interactive ? TRANSITION : INSTANT;

	return (
		<motion.article
			animate={
				driven ? { flexGrow: interactive && active ? GROW_OPEN : 1 } : undefined
			}
			className="group relative min-w-0 flex-1 overflow-hidden bg-muted max-[900px]:min-h-[300px] [@media(hover:none)]:min-h-[300px]"
			data-region={trip.region}
			hidden={hidden}
			initial={false}
			// Remount once driven so initial={false} snaps straight to the right pose.
			key={driven ? "driven" : "css"}
			onBlur={(e: FocusEvent<HTMLElement>) => {
				if (!e.currentTarget.contains(e.relatedTarget)) {
					close();
				}
			}}
			onFocus={(e: FocusEvent<HTMLElement>) => {
				if (interactive && e.target.matches(":focus-visible")) {
					open();
				}
			}}
			onPointerEnter={(e: PointerEvent<HTMLElement>) => {
				if (interactive && e.pointerType === "mouse") {
					open();
				}
			}}
			onPointerLeave={close}
			transition={transition}
		>
			<motion.div
				animate={
					driven ? { scale: interactive && active ? 1.06 : 1 } : undefined
				}
				aria-hidden="true"
				className="absolute inset-0 grid place-items-center bg-muted text-[13px] text-muted-foreground"
				initial={false}
				transition={transition}
			>
				<img
					alt=""
					className="absolute inset-0 h-full w-full object-cover"
					height={1067}
					loading="lazy"
					src={`/images/packages/${trip.image}.webp`}
					width={1600}
				/>
			</motion.div>
			<div className="absolute inset-0 flex flex-col justify-end bg-[linear-gradient(to_top,rgba(12,24,28,0.94)_0%,rgba(12,24,28,0.70)_36%,rgba(12,24,28,0)_78%)] p-[22px] text-card">
				<div className="mb-3 flex flex-wrap gap-[6px]">
					<span className={cn(BADGE, "bg-card text-foreground")}>
						{trip.region}
					</span>
					<span className={cn(BADGE, "bg-foreground/80 text-card")}>
						{trip.days} days
					</span>
				</div>
				<motion.h3
					animate={
						driven
							? { fontSize: interactive && active ? titleOpen : TITLE_REST }
							: undefined
					}
					className="m-0 text-balance font-medium text-[22px] text-card leading-[1.15] tracking-[-0.03em]"
					initial={false}
					transition={transition}
				>
					{trip.name}
				</motion.h3>
				<motion.div
					animate={
						driven
							? isOpen
								? { height: "auto", opacity: 1, y: 0 }
								: { height: 0, opacity: 0, y: 14 }
							: undefined
					}
					className="grid max-h-0 gap-1 overflow-hidden opacity-0 [transform:translateY(14px)] max-[900px]:max-h-none max-[900px]:opacity-100 max-[900px]:[transform:none] [@media(hover:none)]:max-h-none [@media(hover:none)]:opacity-100 [@media(hover:none)]:[transform:none]"
					initial={false}
					style={driven ? { maxHeight: "none" } : undefined}
					transition={transition}
				>
					<p className="mt-[14px] mb-0 max-w-[44ch] text-[15px] text-muted leading-[1.55]">
						Stays, transfers, and activities: details to confirm.
					</p>
					<div className="mt-[18px] flex flex-wrap items-end justify-between gap-x-5 gap-y-[14px] border-card/35 border-t pt-4">
						<p className="m-0 grid gap-[3px]">
							<span className="font-normal text-[12px] text-border uppercase tracking-[0.06em]">
								Starting price
							</span>
							<strong className="font-bold text-[18px] text-card">
								to confirm
							</strong>
						</p>
						<a
							className="inline-block cursor-pointer whitespace-nowrap py-2 font-semibold text-[14px] text-card underline underline-offset-8 after:inline-block after:transition-[transform] after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] after:content-['_→'] hover:decoration-2 focus-visible:outline-[3px] focus-visible:outline-card focus-visible:outline-offset-[4px] hover:after:[transform:translateX(4px)]"
							data-destination={trip.place}
							href="#plan"
							onClick={() => onChooseDestination(trip.place)}
						>
							Discuss this itinerary
						</a>
					</div>
				</motion.div>
			</div>
		</motion.article>
	);
}

interface PackagesSectionProps {
	onChooseDestination: (place: string) => void;
	onFilter: (region: Region) => void;
	preferences: string;
	region: Region;
}

export function PackagesSection({
	onChooseDestination,
	onFilter,
	preferences,
	region,
}: PackagesSectionProps) {
	let count = 2;
	if (region === "all") {
		count = 3;
	} else if (region === "International") {
		count = 1;
	}
	const packageStatus = `Showing ${count} sample trip ${count === 1 ? "idea" : "ideas"}.${preferences}`;

	return (
		<section
			aria-labelledby="packages-title"
			className="scroll-mt-24 bg-card motion-reduce:[&_*]:transition-none"
			id="packages"
		>
			<div className={cn(PAGE_WIDTH, SECTION_PAD)}>
				<div className="mb-8 flex items-center justify-between gap-6 max-[600px]:block">
					<div>
						<h2 className={cn(SECTION_TITLE, "mb-3")} id="packages-title">
							Find a holiday that fits
						</h2>
						<p className={cn(SECTION_LEDE, "mb-0 max-w-[65ch]")}>
							A starting point for your own itinerary.
						</p>
					</div>
					<a
						className={cn(
							LINK,
							"shrink-0 font-semibold text-[14px] max-[600px]:mt-[14px] max-[600px]:inline-block"
						)}
						href="#plan"
					>
						Request another destination
					</a>
				</div>
				<div
					aria-label="Filter sample packages"
					className="mb-[18px] flex flex-wrap gap-[10px]"
					role="group"
				>
					{FILTERS.map((filter) => (
						<button
							aria-pressed={region === filter.value}
							className="cursor-pointer rounded-[6px] border border-input bg-card px-[18px] py-[9px] text-[14px] text-foreground hover:bg-muted focus-visible:outline-[3px] focus-visible:outline-slate focus-visible:outline-offset-[4px] aria-pressed:border-slate aria-pressed:bg-slate aria-pressed:text-card"
							key={filter.value}
							onClick={() => onFilter(filter.value)}
							type="button"
						>
							{filter.label}
						</button>
					))}
				</div>
				<p
					className="mb-4 max-w-[65ch] text-[13px] text-muted-foreground"
					id="package-status"
					role="status"
				>
					{packageStatus}
				</p>
				<div className="mt-2 flex h-[540px] gap-5 max-[900px]:h-auto max-[900px]:flex-col [@media(hover:none)]:h-auto [@media(hover:none)]:flex-col">
					{SAMPLE_TRIPS.map((trip) => (
						<TripCard
							hidden={region !== "all" && region !== trip.region}
							key={trip.place}
							onChooseDestination={onChooseDestination}
							trip={trip}
						/>
					))}
				</div>
				<p className="mt-[18px] mb-0 max-w-[65ch] text-[12px] text-muted-foreground leading-[1.6]">
					Illustrative trips, durations, and inclusions. This wireframe does not
					show live inventory.
				</p>
			</div>
		</section>
	);
}
