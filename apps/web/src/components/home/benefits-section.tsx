import { cn } from "@travellers-click/ui/lib/utils";

import { LINK, PAGE_WIDTH } from "./classes";

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

const ITEM =
	"benefits-motion group pr-8 pt-[30px] max-[960px]:pr-0 max-[960px]:pt-[26px]";

function OutcomeArrow() {
	return (
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
				d="M90 4 C26 42 40 72 96 72 S132 82 132 104"
				markerEnd="url(#outcomes-arrow)"
			/>
		</svg>
	);
}

// The warm canvas joins the hero and adviser introduction; mist is reserved
// for the enquiry so the page does not become a sequence of tinted panels.
export function BenefitsSection() {
	return (
		<section aria-labelledby="benefits-title" className="bg-background">
			<div
				className={cn(
					PAGE_WIDTH,
					"relative pt-[104px] pb-20 max-[600px]:pt-20 max-[600px]:pb-11"
				)}
			>
				<OutcomeArrow />
				<div className="flex flex-wrap items-end justify-between gap-8">
					<h2
						className="m-0 max-w-[11ch] text-balance font-semibold text-[clamp(40px,5vw,72px)] leading-[1.09] tracking-[-0.0325em] max-[600px]:max-w-[14ch]"
						id="benefits-title"
					>
						Here’s what comes next.
					</h2>
					<div>
						<p className="mb-[6px] max-w-[34ch] text-[22.5px] text-muted-foreground leading-[1.6]">
							Turn a travel idea into a plan that fits you.
						</p>
						<a
							className={cn(
								LINK,
								"mt-[14px] inline-block font-semibold text-[14px]"
							)}
							href="#plan"
						>
							Not sure where to go? We can help.
						</a>
					</div>
				</div>
				<div className="mt-[52px] grid grid-cols-3 border-slate/25 border-t max-[960px]:grid-cols-1">
					{POINTS.map((point, index) => (
						<article
							className={cn(
								ITEM,
								"animate-[benefits-rise_0.75s_cubic-bezier(0.18,1.5,0.34,1)_both] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:rotate-[1.2deg]",
								index > 0 &&
									"border-slate/25 border-l pl-8 max-[960px]:border-t max-[960px]:border-l-0 max-[960px]:pl-0"
							)}
							key={point.title}
							style={{ animationDelay: `${index * 50}ms` }}
						>
							<span
								aria-hidden="true"
								className="mb-[18px] block h-[9px] w-[9px] rounded-full bg-primary transition-transform duration-500 ease-[cubic-bezier(0.34,1.8,0.64,1)] group-hover:-translate-y-1 group-hover:scale-[1.35]"
							/>
							<h3 className="relative mb-[10px] inline-block text-balance font-medium text-[27.5px] leading-[1.25] tracking-[-0.02em] transition-[letter-spacing] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:tracking-[-0.032em]">
								{point.title}
								<svg
									aria-hidden="true"
									className="pointer-events-none absolute -bottom-[7px] left-0 h-[10px] w-full overflow-visible"
									focusable="false"
									preserveAspectRatio="none"
									viewBox="0 0 120 10"
								>
									<path
										className="fill-none stroke-[2.4] stroke-primary transition-[stroke-dashoffset] duration-700 ease-out [stroke-dasharray:132] [stroke-dashoffset:132] [stroke-linecap:round] group-hover:[stroke-dashoffset:0]"
										d="M2 7 C 18 2, 32 9, 48 6 S 76 1, 92 6 S 110 3, 118 6"
										vectorEffect="non-scaling-stroke"
									/>
								</svg>
							</h3>
							<p className="m-0 max-w-[45ch] text-pretty text-[19.4px] text-muted-foreground leading-[1.55] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-[3px]">
								{point.copy}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
