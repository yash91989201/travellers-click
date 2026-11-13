import { cn } from "@travellers-click/ui/lib/utils";

import { PAGE_WIDTH, SECTION_PAD, SECTION_TITLE_QUIET } from "./classes";

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
			aria-labelledby="faq-title"
			className="scroll-mt-24 bg-background"
			id="faq"
		>
			<div className={cn(PAGE_WIDTH, SECTION_PAD, "grid gap-[46px]")}>
				<h2
					className={cn(SECTION_TITLE_QUIET, "m-0 font-medium")}
					id="faq-title"
				>
					Before you plan
				</h2>
				<div>
					{FAQS.map((faq) => (
						<details
							className="group border-slate/30 border-b border-dashed py-6"
							key={faq.question}
						>
							<summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-heading font-medium text-[22px] leading-[1.3] tracking-[-0.01em] after:h-[18px] after:w-[18px] after:flex-none after:transition-[background-size] after:duration-[400ms] after:ease-[cubic-bezier(0.22,0.9,0.3,1)] after:content-[''] focus-visible:outline-[3px] focus-visible:outline-slate focus-visible:outline-offset-[4px] after:[background:linear-gradient(currentColor,currentColor)_center/100%_2px_no-repeat,linear-gradient(currentColor,currentColor)_center/2px_100%_no-repeat] group-open:after:[background:linear-gradient(currentColor,currentColor)_center/100%_2px_no-repeat] [&::-webkit-details-marker]:hidden">
								{faq.question}
							</summary>
							<p className="mt-[14px] mb-0 max-w-[60ch] text-pretty text-base text-muted-foreground leading-[1.6]">
								{faq.answer}
							</p>
						</details>
					))}
				</div>
			</div>
		</section>
	);
}
