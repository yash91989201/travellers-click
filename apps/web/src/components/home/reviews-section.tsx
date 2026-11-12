import { cn } from "@travellers-click/ui/lib/utils";

import { ReviewStack } from "../review-stack";
import { ANNOTATION, PAGE_WIDTH, SECTION_PAD, SECTION_TITLE } from "./classes";

// The page's one deep slate break: it separates the browsing and process
// sections above from the enquiry below. Paper-on-slate text is 7.73:1.
export function ReviewsSection() {
	return (
		<section
			aria-labelledby="reviews-title"
			className="bg-slate text-card"
			id="reviews"
		>
			<div className={cn(PAGE_WIDTH, SECTION_PAD, "grid gap-2")}>
				<h2
					className={cn(SECTION_TITLE, "relative z-0 m-0")}
					id="reviews-title"
				>
					What travelers say
				</h2>
				<p className={cn(ANNOTATION, "mt-2 max-w-[40ch] text-muted")}>
					Content slot only. Hide this section until real reviews and
					permissions are available. No ratings or partner badges yet.
				</p>
				<div className="pl-[16%] max-[860px]:pl-0">
					<ReviewStack />
				</div>
			</div>
		</section>
	);
}
