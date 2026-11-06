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

export function BenefitsSection() {
	return (
		<section
			aria-labelledby="benefits-title"
			className={cn(
				PAGE_WIDTH,
				"relative grid grid-cols-[1fr_1.15fr] gap-[100px] border-[#ccc] border-b pt-[124px] pb-16 max-[600px]:grid-cols-1 max-[600px]:gap-9 max-[960px]:gap-12 max-[600px]:pt-[108px] max-[600px]:pb-11",
			)}
		>
			<svg
				aria-hidden="true"
				className="pointer-events-none absolute top-0 left-6 h-[120px] w-[200px] max-[600px]:left-0 max-[600px]:h-24 max-[600px]:w-40 [&_marker_path]:fill-none [&_marker_path]:stroke-[#555] [&_marker_path]:[stroke-linecap:round] [&_marker_path]:[stroke-linejoin:round] [&_marker_path]:[stroke-width:1.5]"
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
					className="fill-none stroke-[#666] [stroke-dasharray:3_8] [stroke-linecap:round] [stroke-width:1.5] [vector-effect:non-scaling-stroke]"
					d="M90 4 C26 42 40 94 172 96"
					markerEnd="url(#outcomes-arrow)"
				/>
			</svg>
			<div>
				<h2
					className="mb-5 text-balance font-bold text-[40px] leading-[1.15] tracking-[-0.02em] max-[600px]:text-[32px]"
					id="benefits-title"
				>
					Here’s what
					<br className="max-[600px]:hidden" /> comes next.
				</h2>
				<p className="mb-4 max-w-[30ch] text-[#555] text-[17px]">
					Turn a travel idea into a plan that fits you.
				</p>
				<a
					className={cn(LINK, "mt-4 inline-block font-semibold text-[14px]")}
					href="#plan"
				>
					Not sure where to go? We can help.
				</a>
			</div>
			<ol className="m-0 list-[decimal-leading-zero] pl-8 max-[600px]:pl-7">
				{POINTS.map((point) => (
					<li
						className="pb-[26px] pl-[18px] marker:font-semibold marker:text-[#666] marker:text-[14px] last:pb-0 max-[600px]:pl-[10px] [&+li]:border-[#ccc] [&+li]:border-t [&+li]:pt-[26px]"
						key={point.title}
					>
						<h3 className="mb-[10px] text-balance font-bold text-[22px] leading-[1.15] max-[600px]:text-[21px]">
							{point.title}
						</h3>
						<p className="m-0 max-w-[45ch] text-[#555] text-[15px]">
							{point.copy}
						</p>
					</li>
				))}
			</ol>
		</section>
	);
}
