import { cn } from "@travellers-click/ui/lib/utils";

import { FOCUS_INK, PAGE_WIDTH } from "./classes";

const TRIP_STYLES = [
	{
		label: "Honeymoon & romance",
		copy: "Time away, just the two of you.",
		layout: "featured",
	},
	{
		label: "Family holidays",
		copy: "Room for every age and every pace.",
		layout: "default",
	},
	{
		label: "Adventure & trekking",
		copy: "Follow a trail beyond the usual.",
		layout: "default",
	},
	{
		label: "Wildlife & safari",
		copy: "Make time for the natural world.",
		layout: "default",
	},
	{
		label: "Wellness & retreats",
		copy: "Slow down and take a proper break.",
		layout: "default",
	},
	{
		label: "Corporate & groups",
		copy: "Bring your people. Plan together.",
		layout: "wide",
	},
] as const;

interface TripStylesSectionProps {
	onSelectStyle: (style: string) => void;
}

export function TripStylesSection({ onSelectStyle }: TripStylesSectionProps) {
	return (
		<section
			aria-labelledby="style-title"
			className={cn(PAGE_WIDTH, "scroll-mt-5 py-20 max-[600px]:py-[42px]")}
		>
			<div className="mb-10 flex items-end justify-between gap-10 max-[800px]:block">
				<h2
					className="m-0 max-w-[22ch] text-balance font-bold text-[40px] leading-[1.15] tracking-[-0.02em]"
					id="style-title"
				>
					What kind of trip do you have in mind?
				</h2>
				<p className="m-0 max-w-[30ch] text-[#555] text-[15px] max-[800px]:mt-5">
					A change of pace. A shared adventure. A little time for yourself.
				</p>
			</div>
			<div className="grid grid-cols-[1.2fr_1fr_1fr] gap-[25px] max-[480px]:grid-cols-1 max-[800px]:grid-cols-2">
				{TRIP_STYLES.map((style) => (
					<a
						className={cn(
							FOCUS_INK,
							"relative flex flex-col border border-[#bbb] bg-[#f5f5f5] no-underline hover:border-[#333] hover:bg-[#eee]",
							style.layout === "featured" &&
								"row-span-2 max-[480px]:col-auto max-[800px]:col-span-full max-[800px]:row-auto",
							style.layout === "wide" &&
								"col-span-full flex-row items-center max-[800px]:col-auto max-[800px]:flex-col max-[800px]:items-stretch",
						)}
						data-style={style.label}
						href="#plan"
						key={style.label}
						onClick={() => onSelectStyle(style.label)}
					>
						<span
							aria-hidden="true"
							className={cn(
								"grid min-h-[165px] place-items-center bg-[#e6e6e6] p-6 text-[#606060] text-[12px]",
								style.layout === "wide"
									? "min-h-[100px] flex-none basis-[30%] max-[800px]:min-h-[132px] max-[800px]:flex-1"
									: "flex-1",
								style.layout === "featured" && "max-[800px]:min-h-[180px]",
							)}
						>
							Trip image placeholder
						</span>
						<span className="grid gap-2 py-[25px] pr-11 pl-5">
							<strong
								className={
									style.layout === "featured"
										? "font-bold text-[28px] leading-[1.25]"
										: "font-bold text-[20px] leading-[1.25]"
								}
							>
								{style.label}
							</strong>
							<span className="text-[#555] text-[14px]">{style.copy}</span>
						</span>
						<svg
							aria-hidden="true"
							className="absolute right-4 bottom-6 h-5 w-5 fill-none stroke-current [stroke-width:1.5]"
							focusable="false"
							viewBox="0 0 24 24"
						>
							<path d="M4 12h15m-6-6 6 6-6 6" />
						</svg>
					</a>
				))}
			</div>
		</section>
	);
}
