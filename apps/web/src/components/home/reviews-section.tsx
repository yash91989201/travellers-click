import { cn } from "@travellers-click/ui/lib/utils";

import { ReviewStack } from "../review-stack";
import { PAGE_WIDTH, SECTION_TITLE } from "./classes";

// The page's one deep slate break: it separates the browsing and process
// sections above from the enquiry below. Paper-on-slate text is 7.73:1.
// Title sits in a sticky rail opposite the card stack; both columns collapse
// to one below 900px.
export function ReviewsSection() {
	return (
		<section
			aria-labelledby="reviews-title"
			className="bg-slate text-card"
			id="reviews"
		>
			<div
				className={cn(
					PAGE_WIDTH,
					"grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)] items-start gap-x-[clamp(28px,4vw,64px)] gap-y-6 py-[93.6px] max-[900px]:grid-cols-1"
				)}
			>
				<div className="sticky top-[88px] grid gap-4 self-start max-[900px]:static">
					<h2
						className={cn(
							SECTION_TITLE,
							"m-0 max-w-[13ch] border-primary border-t-2 pt-5 text-card"
						)}
						id="reviews-title"
					>
						What travelers say
					</h2>
					<p className="m-0 max-w-[32ch] text-muted text-xs leading-[1.65]">
						Review layout preview. Verified traveler feedback will appear here
						once we have permission to share it.
					</p>
				</div>
				<div className="-ml-[4vw] min-w-0 max-[900px]:ml-0 [&_[aria-label='Review_slots']]:px-0">
					<ReviewStack />
				</div>
			</div>
		</section>
	);
}
