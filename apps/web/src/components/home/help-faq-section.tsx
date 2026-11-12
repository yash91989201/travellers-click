import { cn } from "@travellers-click/ui/lib/utils";

import {
	LINK,
	PAGE_WIDTH,
	SECTION_LEDE,
	SECTION_PAD,
	SECTION_TITLE_QUIET,
} from "./classes";

const FAQS = [
	{
		question: "Can I change a trip itinerary?",
		answer:
			"Share your dates, budget, and preferences so an adviser can discuss a plan with you.",
	},
	{
		question: "What does a package include?",
		answer:
			"Inclusions vary by trip. Review the itemized quote for stays, transfers, meals, activities, and exclusions before booking.",
	},
	{
		question: "Can I enquire without fixed dates?",
		answer:
			"Yes. Use an approximate month or enter “flexible” in the enquiry form.",
	},
	{
		question: "How do booking, cancellation, and refunds work?",
		answer:
			"Review the agency and supplier terms with your adviser before paying. Confirmed policies will appear here before release.",
	},
	{
		question: "What support is available during my trip?",
		answer:
			"Support contacts, hours, and coverage need agency confirmation. This wireframe makes no round-the-clock support promise.",
	},
] as const;

export function HelpFaqSection() {
	return (
		<section
			aria-labelledby="services-title"
			className="scroll-mt-24 bg-background"
			id="services"
		>
			<div className={cn(PAGE_WIDTH, SECTION_PAD, "grid gap-[50px]")}>
				<div className="flex items-center justify-between gap-10 border-border border-b pb-[43px] max-[860px]:flex-col max-[860px]:items-start">
					<div>
						<h2
							className={cn(SECTION_TITLE_QUIET, "mb-4 font-medium")}
							id="services-title"
						>
							Need help with flights or hotels?
						</h2>
						<p className={cn(SECTION_LEDE, "m-0 max-w-[48ch]")}>
							Include transport, stays, visa, or insurance questions in your
							trip request.
						</p>
					</div>
					<a
						className={cn(LINK, "flex-none py-[14px] font-semibold")}
						href="#plan"
					>
						Discuss travel needs
					</a>
				</div>
				<h2
					className={cn(SECTION_TITLE_QUIET, "m-0 mb-[-24px] font-medium")}
					id="faq-title"
				>
					Before you plan
				</h2>
				<div className="grid grid-cols-2 gap-x-[72px] max-[860px]:grid-cols-1">
					{FAQS.map((faq) => (
						<details
							className="group border-border border-t py-[22px]"
							key={faq.question}
						>
							<summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-medium text-[18px] leading-[1.35] after:h-[18px] after:w-[18px] after:flex-none after:transition-[transform] after:duration-[450ms] after:ease-[cubic-bezier(0.22,0.9,0.3,1)] after:content-[''] focus-visible:outline-[3px] focus-visible:outline-slate focus-visible:outline-offset-[4px] after:[background:linear-gradient(currentColor,currentColor)_center/100%_2px_no-repeat,linear-gradient(currentColor,currentColor)_center/2px_100%_no-repeat] group-open:after:[background:linear-gradient(currentColor,currentColor)_center/100%_2px_no-repeat] [&::-webkit-details-marker]:hidden">
								{faq.question}
							</summary>
							<p className="mt-[14px] mb-0 max-w-[52ch] text-base text-muted-foreground leading-[1.6]">
								{faq.answer}
							</p>
						</details>
					))}
				</div>
			</div>
		</section>
	);
}
