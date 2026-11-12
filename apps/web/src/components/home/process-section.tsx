import { cn } from "@travellers-click/ui/lib/utils";

import { CARD_TITLE, PAGE_WIDTH, SECTION_PAD, SECTION_TITLE_QUIET } from "./classes";

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
			className="scroll-mt-5 bg-muted"
			id="how"
		>
			<div
				className={cn(
					PAGE_WIDTH,
					SECTION_PAD,
					"grid grid-cols-[minmax(240px,4fr)_8fr] items-start gap-14 max-[600px]:grid-cols-1 max-[600px]:gap-7",
				)}
			>
				<div className="sticky top-8 max-[860px]:static">
					<h2 className={cn(SECTION_TITLE_QUIET, "mb-4")} id="how-title">
						From an idea <br className="max-[600px]:hidden" />
						to your itinerary
					</h2>
					<p className="m-0 text-[18px] text-muted-foreground leading-[1.55]">
						You can start without a fixed destination or exact dates.
					</p>
				</div>
				<ol className="m-0 list-none p-0">
					{STEPS.map((step, index) => (
						<li
							className={cn(
								"grid grid-cols-[96px_1fr] gap-x-5 gap-y-2 border-slate border-t-2 border-dotted py-[30px] max-[860px]:ml-0 max-[860px]:grid-cols-[64px_1fr]",
								STEP_OFFSETS[index],
								index === STEPS.length - 1 &&
									"border-slate border-b-2 border-dotted",
							)}
							key={step.title}
						>
							<span
								aria-hidden="true"
								className="col-span-1 row-span-2 font-heading font-medium text-[clamp(48px,6vw,64px)] text-slate tabular-nums leading-[0.9] tracking-[-0.02em]"
							>
								{index + 1}
							</span>
							<h3
								className={cn(
									CARD_TITLE,
									"m-0 self-end text-balance text-[24px] leading-[1.2]",
								)}
							>
								{step.title}
							</h3>
							<p className="m-0 max-w-[52ch] text-[16px] text-muted-foreground leading-[1.6]">
								{step.copy}
							</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
