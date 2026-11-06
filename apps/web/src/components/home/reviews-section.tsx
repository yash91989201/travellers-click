import { cn } from "@travellers-click/ui/lib/utils";

import { ReviewStack } from "../review-stack";
import { ANNOTATION, PAGE_WIDTH } from "./classes";

export function ReviewsSection() {
	return (
		<section
			aria-label="Reserved space for verified reviews"
			className={cn(
				PAGE_WIDTH,
				"grid grid-cols-[minmax(240px,4fr)_8fr] items-center gap-14 py-20 max-[860px]:grid-cols-1 max-[860px]:gap-7",
			)}
		>
			<div>
				<h2 className="mb-3 text-balance font-bold text-[clamp(30px,3.4vw,44px)] leading-[1.15] tracking-[-0.02em]">
					What travelers say
				</h2>
				<p className={cn(ANNOTATION, "max-w-[65ch]")}>
					Content slot only. Hide this section until real reviews and
					permissions are available. No ratings or partner badges yet.
				</p>
			</div>
			<ReviewStack />
		</section>
	);
}
