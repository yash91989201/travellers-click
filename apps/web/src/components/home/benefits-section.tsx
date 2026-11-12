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

// The warm canvas joins the hero and adviser introduction; mist is reserved
// for the enquiry so the page does not become a sequence of tinted panels.
export function BenefitsSection() {
	return (
		<section aria-labelledby="benefits-title" className="bg-background">
			<div
				className={cn(
					PAGE_WIDTH,
					"relative grid grid-cols-[1fr_1.15fr] gap-[100px] pt-[104px] pb-20 max-[600px]:grid-cols-1 max-[600px]:gap-9 max-[960px]:gap-12 max-[600px]:pt-20 max-[600px]:pb-11"
				)}
			>
				<div>
					<h2 className={cn(SECTION_TITLE, "mb-5")} id="benefits-title">
						Here’s what
						<br className="max-[600px]:hidden" /> comes next.
					</h2>
					<p className="mb-4 max-w-[30ch] text-[18px] text-muted-foreground">
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
					{POINTS.map((point) => (
						<li
							className="pb-7 last:pb-0 [&+li]:border-slate/25 [&+li]:border-t [&+li]:pt-7"
							key={point.title}
						>
							<div>
								<h3 className="mb-[10px] text-balance font-medium text-[24px] leading-[1.15] max-[600px]:text-[24px]">
									{point.title}
								</h3>
								<p className="m-0 max-w-[45ch] text-base text-muted-foreground leading-[1.6]">
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
