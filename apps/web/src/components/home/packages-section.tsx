import { cn } from "@travellers-click/ui/lib/utils";

import { LINK, PAGE_WIDTH } from "./classes";
import type { Region } from "./types";

const SAMPLE_TRIPS = [
	{ place: "Kerala", name: "Kerala at your pace", region: "India", days: 6 },
	{
		place: "Rajasthan",
		name: "A Rajasthan introduction",
		region: "India",
		days: 5,
	},
	{
		place: "Bali",
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
	"whitespace-nowrap rounded-full border border-card px-[11px] py-[7px] text-[12px] font-semibold leading-none";

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
			className="scroll-mt-5 bg-card py-16 max-[600px]:py-[42px] motion-reduce:[&_*]:transition-none"
			id="packages"
		>
			<div className={PAGE_WIDTH}>
				<div className="mb-6 flex items-center justify-between gap-6 max-[600px]:block">
					<div>
						<h2
							className="mb-3 text-balance font-bold text-[36px] leading-[1.15] tracking-[-0.02em] max-[600px]:text-[30px]"
							id="packages-title"
						>
							Find a holiday that fits
						</h2>
						<p className="mb-0 max-w-[65ch] text-muted-foreground">
							A starting point for your own itinerary.
						</p>
					</div>
					<a
						className={cn(
							LINK,
							"shrink-0 font-semibold text-[14px] max-[600px]:mt-[14px] max-[600px]:inline-block",
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
							className="cursor-pointer rounded-[3px] border border-input bg-card px-[18px] py-[9px] text-[14px] text-foreground hover:bg-muted focus-visible:outline-[3px] focus-visible:outline-slate focus-visible:outline-offset-[4px] aria-pressed:border-slate aria-pressed:bg-slate aria-pressed:text-card"
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
				<div className="mt-2 flex h-[648px] gap-[10px] max-[900px]:h-auto max-[900px]:flex-col [@media(hover:none)]:h-auto [@media(hover:none)]:flex-col">
					{SAMPLE_TRIPS.map((trip) => (
						<article
							className="group relative min-w-0 flex-1 overflow-hidden border border-border bg-muted transition-[flex-grow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] focus-within:grow-[4] hover:grow-[4] max-[900px]:min-h-[300px] [@media(hover:none)]:min-h-[300px]"
							data-region={trip.region}
							hidden={region !== "all" && region !== trip.region}
							key={trip.place}
						>
							<div
								aria-hidden="true"
								className="absolute inset-0 grid place-items-center bg-[repeating-linear-gradient(135deg,var(--muted)_0_14px,var(--border)_14px_15px)] text-[13px] text-muted-foreground transition-[transform] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-focus-within:[transform:scale(1.06)] group-hover:[transform:scale(1.06)]"
							>
								<span>Package image</span>
							</div>
							<div className="absolute inset-0 flex flex-col justify-end bg-[linear-gradient(to_top,rgba(23,62,73,0.94)_0%,rgba(23,62,73,0.6)_45%,rgba(23,62,73,0)_75%)] p-[22px] text-card">
								<div className="mb-3 flex flex-wrap gap-[6px]">
									<span className={cn(BADGE, "bg-card text-foreground")}>
										{trip.region}
									</span>
									<span
										className={cn(
											BADGE,
											"border-card/75 bg-transparent text-card",
										)}
									>
										{trip.days} days
									</span>
								</div>
								<h3 className="m-0 text-balance font-bold text-[21px] text-card leading-[1.15] tracking-[-0.03em] transition-[font-size] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-focus-within:text-[clamp(26px,3vw,40px)] group-hover:text-[clamp(26px,3vw,40px)]">
									{trip.name}
								</h3>
								<div className="grid max-h-0 gap-1 overflow-hidden opacity-0 [transform:translateY(14px)] [transition:max-height_0.6s_cubic-bezier(0.16,1,0.3,1),opacity_0.4s_0.12s_cubic-bezier(0.16,1,0.3,1),transform_0.6s_cubic-bezier(0.16,1,0.3,1)] group-focus-within:max-h-[240px] group-focus-within:opacity-100 group-hover:max-h-[240px] group-hover:opacity-100 max-[900px]:max-h-none max-[900px]:opacity-100 group-focus-within:[transform:none] group-hover:[transform:none] max-[900px]:[transform:none] [@media(hover:none)]:max-h-none [@media(hover:none)]:opacity-100 [@media(hover:none)]:[transform:none]">
									<p className="mt-[14px] mb-0 max-w-[44ch] text-[14px] text-muted">
										Stays, transfers, and activities: details to confirm.
									</p>
									<div className="mt-[18px] flex flex-wrap items-end justify-between gap-x-5 gap-y-[14px] border-card/35 border-t pt-4">
										<p className="m-0 grid gap-[3px]">
											<span className="font-normal text-[12px] text-border uppercase tracking-[0.06em]">
												Starting price
											</span>
											<strong className="font-bold text-[17px] text-card">
												to confirm
											</strong>
										</p>
										<a
											className="inline-block cursor-pointer whitespace-nowrap rounded-[3px] border border-card bg-card px-[18px] py-[11px] font-bold text-[14px] text-foreground after:inline-block after:transition-[transform] after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] after:content-['_→'] hover:bg-muted focus-visible:outline-[3px] focus-visible:outline-card focus-visible:outline-offset-[4px] hover:after:[transform:translateX(4px)]"
											data-destination={trip.place}
											href="#plan"
											onClick={() => onChooseDestination(trip.place)}
										>
											Discuss this itinerary
										</a>
									</div>
								</div>
							</div>
						</article>
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
