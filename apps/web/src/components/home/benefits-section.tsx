import { cn } from "@travellers-click/ui/lib/utils";

import { LINK, PAGE_WIDTH, SECTION_TITLE } from "./classes";

const POINTS = [
	{
		title: "A plan around your budget",
		copy: "Share your range. Explore trip options that fit what you want to spend.",
	},
	{
		title: "An itinerary shaped with you",
		copy: "Choose your pace, stays, and experiences. Refine the details with a travel adviser.",
	},
	{
		title: "Clear inclusions before you book",
		copy: "Review what’s included, what costs extra, and the booking terms before you decide.",
	},
] as const;

// Page tone order: mist (this intro, fused with the hero base) > ivory trip
// styles > white packages > mist process > slate reviews > mist enquiry >
// ivory FAQs > ink footer. Mist marks supporting steps; ivory and white carry
// browsing; slate is the single deep break; ink closes.
export function BenefitsSection() {
	return (
		<section aria-labelledby="benefits-title" className="bg-muted">
			<div
				className={cn(
					PAGE_WIDTH,
					"relative grid grid-cols-[1fr_1.15fr] gap-[100px] pt-[124px] pb-20 max-[600px]:grid-cols-1 max-[600px]:gap-9 max-[960px]:gap-12 max-[600px]:pt-[108px] max-[600px]:pb-11",
				)}
			>
				<svg
					aria-hidden="true"
					className="pointer-events-none absolute top-0 left-6 h-[120px] w-[200px] max-[600px]:left-0 max-[600px]:h-24 max-[600px]:w-40 [&_marker_path]:fill-none [&_marker_path]:stroke-primary [&_marker_path]:[stroke-linecap:round] [&_marker_path]:[stroke-linejoin:round] [&_marker_path]:[stroke-width:2]"
					focusable="false"
					viewBox="0 0 200 120"
				>
					<defs>
						<marker
							id="outcomes-arrow"
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
						className="fill-none stroke-primary [stroke-dasharray:5_6] [stroke-linecap:round] [stroke-width:2] [vector-effect:non-scaling-stroke]"
						d="M90 4 C26 42 40 94 172 96"
						markerEnd="url(#outcomes-arrow)"
					/>
				</svg>
				<div>
					<h2 className={cn(SECTION_TITLE, "mb-5")} id="benefits-title">
						Here’s what
						<br className="max-[600px]:hidden" /> comes next.
					</h2>
					<p className="mb-4 max-w-[30ch] text-[17px] text-muted-foreground">
						Turn a travel idea into a plan that fits you.
					</p>
					<a
						className={cn(LINK, "mt-4 inline-block font-semibold text-[14px]")}
						href="#plan"
					>
						Not sure where to go? We can help.
					</a>
				</div>
				<ol className="m-0 list-none p-0">
					{POINTS.map((point, index) => (
						<li
							className="grid grid-cols-[4rem_1fr] items-baseline pb-7 last:pb-0 max-[600px]:grid-cols-[3rem_1fr] [&+li]:border-slate/25 [&+li]:border-t [&+li]:pt-7"
							key={point.title}
						>
							<span
								aria-hidden="true"
								className="font-heading font-semibold text-[26px] text-slate leading-none tabular-nums"
							>
								{String(index + 1).padStart(2, "0")}
							</span>
							<div>
								<h3 className="mb-[10px] text-balance font-bold text-[22px] leading-[1.15] max-[600px]:text-[21px]">
									{point.title}
								</h3>
								<p className="m-0 max-w-[45ch] text-[15px] text-muted-foreground">
									{point.copy}
								</p>
							</div>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
