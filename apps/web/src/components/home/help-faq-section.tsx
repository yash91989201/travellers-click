import { cn } from "@travellers-click/ui/lib/utils";

import { BUTTON, CONTROL, PAGE_WIDTH, PRIMARY } from "./classes";

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
			className={cn(PAGE_WIDTH, "grid gap-[50px] pt-16 pb-20")}
			id="services"
		>
			<div className="flex items-center justify-between gap-10 border-[#282828] border-b-2 pb-[43px] max-[860px]:flex-col max-[860px]:items-start">
				<div>
					<h2
						className="mb-[10px] text-balance font-bold text-[clamp(26px,2.8vw,36px)] leading-[1.15] tracking-[-0.02em]"
						id="services-title"
					>
						Need help with flights or hotels?
					</h2>
					<p className="m-0 max-w-[46ch] text-[#444] text-[17px]">
						Include transport, stays, visa, or insurance questions in your trip
						request.
					</p>
				</div>
				<a
					className={cn(
						CONTROL,
						BUTTON,
						PRIMARY,
						"flex-none px-6 py-[14px] focus-visible:outline-current",
					)}
					href="#plan"
				>
					Discuss travel needs
				</a>
			</div>
			<h2
				className="m-0 mb-[-24px] text-balance font-bold text-[22px] leading-[1.15] tracking-[-0.02em]"
				id="faq-title"
			>
				Before you plan
			</h2>
			<div className="grid grid-cols-2 gap-x-[72px] max-[860px]:grid-cols-1">
				{FAQS.map((faq) => (
					<details
						className="group border-[#ccc] border-t py-[22px]"
						key={faq.question}
					>
						<summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-[18px] leading-[1.35] after:h-[18px] after:w-[18px] after:flex-none after:transition-[transform] after:duration-[450ms] after:ease-[cubic-bezier(0.22,0.9,0.3,1)] after:content-[''] focus-visible:outline-[3px] focus-visible:outline-current focus-visible:outline-offset-[4px] after:[background:linear-gradient(currentColor,currentColor)_center/100%_2px_no-repeat,linear-gradient(currentColor,currentColor)_center/2px_100%_no-repeat] group-open:after:[background:linear-gradient(currentColor,currentColor)_center/100%_2px_no-repeat] group-open:after:[transform:rotate(90deg)] [&::-webkit-details-marker]:hidden">
							{faq.question}
						</summary>
						<p className="mt-[14px] mb-0 max-w-[52ch] text-[#444] text-base leading-[1.6]">
							{faq.answer}
						</p>
					</details>
				))}
			</div>
		</section>
	);
}
