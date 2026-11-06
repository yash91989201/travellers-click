import { cn } from "@travellers-click/ui/lib/utils";

import { PAGE_WIDTH } from "./classes";

const STEPS = [
	{
		title: "Share your plans",
		copy: "Choose a trip idea or tell us what matters to you.",
	},
	{
		title: "Shape the details together",
		copy: "Review an itinerary and quote with a travel adviser.",
	},
	{
		title: "Confirm, then travel",
		copy: "Agree on arrangements and terms before booking.",
	},
] as const;

const STEP_OFFSETS = ["", "ml-[7.5%]", "ml-[15%]"] as const;

export function ProcessSection() {
	return (
		<section
			aria-labelledby="how-title"
			className={cn(
				PAGE_WIDTH,
				"grid scroll-mt-5 grid-cols-[minmax(240px,4fr)_8fr] items-start gap-14 py-16 max-[600px]:grid-cols-1 max-[600px]:gap-7 max-[600px]:pt-0 max-[600px]:pb-[42px]",
			)}
			id="how"
		>
			<div className="sticky top-8 max-[860px]:static">
				<h2
					className="mb-[14px] text-balance font-bold text-[clamp(30px,3.4vw,42px)] leading-[1.15] tracking-[-0.02em]"
					id="how-title"
				>
					From an idea
					<br className="max-[600px]:hidden" />
					to your itinerary
				</h2>
				<p className="m-0 text-[#444] text-base">
					You can start without a fixed destination or exact dates.
				</p>
			</div>
			<ol className="m-0 list-none p-0">
				{STEPS.map((step, index) => (
					<li
						className={cn(
							"grid grid-cols-[96px_1fr] gap-x-5 gap-y-2 border-[#777] border-t-2 border-dotted py-[30px] max-[860px]:ml-0 max-[860px]:grid-cols-[64px_1fr]",
							STEP_OFFSETS[index],
							index === STEPS.length - 1 &&
								"border-[#777] border-b-2 border-dotted",
						)}
						key={step.title}
					>
						<span
							aria-hidden="true"
							className="col-span-1 row-span-2 font-bold text-[76px] tabular-nums leading-[0.85] tracking-[-0.05em] max-[860px]:text-[52px]"
						>
							{index + 1}
						</span>
						<h3 className="m-0 self-end text-balance font-bold text-[24px] leading-[1.15]">
							{step.title}
						</h3>
						<p className="m-0 text-[#444] text-[15px]">{step.copy}</p>
					</li>
				))}
			</ol>
		</section>
	);
}
