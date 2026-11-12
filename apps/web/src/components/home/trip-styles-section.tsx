import { cn } from "@travellers-click/ui/lib/utils";
import { motion } from "motion/react";
import { type FocusEvent, type PointerEvent, useRef, useState } from "react";

import {
	FOCUS_INK,
	PAGE_WIDTH,
	SECTION_LEDE,
	SECTION_PAD,
	SECTION_TITLE,
} from "./classes";

const TRIP_STYLES = [
	{
		label: "Honeymoon & romance",
		image: "honeymoon",
		copy: "Time away, just the two of you.",
		layout: "featured",
	},
	{
		label: "Family holidays",
		image: "family",
		copy: "Room for every age and every pace.",
		layout: "default",
	},
	{
		label: "Adventure & trekking",
		image: "adventure",
		copy: "Follow a trail beyond the usual.",
		layout: "default",
	},
	{
		label: "Wildlife & safari",
		image: "wildlife",
		copy: "Make time for the natural world.",
		layout: "default",
	},
	{
		label: "Wellness & retreats",
		image: "wellness",
		copy: "Slow down and take a proper break.",
		layout: "default",
	},
	{
		label: "Corporate & groups",
		image: "corporate",
		copy: "Bring your people. Plan together.",
		layout: "wide",
	},
] as const;

interface TripStylesSectionProps {
	onSelectStyle: (style: string) => void;
}

interface Expansion {
	bottom: number;
	label: string;
	left: number;
	right: number;
	top: number;
}

const CAN_EXPAND_QUERY =
	"(hover: hover) and (min-width: 801px) and (prefers-reduced-motion: no-preference)";
const REST = { top: 0, right: 0, bottom: 0, left: 0 } as const;
const SHADOW_REST = "0 0 0 0 rgba(23, 62, 73, 0)";
const SHADOW_RAISED = "0 28px 64px -24px rgba(23, 62, 73, 0.5)";
const SPRING = { type: "spring", visualDuration: 0.6, bounce: 0.28 } as const;
// Opacity and shadow must not overshoot, so they ease instead of springing.
const FADE = { duration: 0.3, ease: "easeOut" } as const;
const EXPAND_TRANSITION = {
	default: SPRING,
	opacity: FADE,
	boxShadow: FADE,
} as const;

export function TripStylesSection({ onSelectStyle }: TripStylesSectionProps) {
	const gridRef = useRef<HTMLDivElement>(null);
	const [expansion, setExpansion] = useState<Expansion | null>(null);

	// Face insets that stretch a card's cell out to the grid's edges.
	const expand = (cell: HTMLElement, label: string) => {
		const grid = gridRef.current;
		if (!(grid && window.matchMedia(CAN_EXPAND_QUERY).matches)) {
			return;
		}
		const g = grid.getBoundingClientRect();
		const c = cell.getBoundingClientRect();
		setExpansion({
			label,
			top: g.top - c.top,
			left: g.left - c.left,
			right: c.right - g.right,
			bottom: c.bottom - g.bottom,
		});
	};
	const collapse = () => setExpansion(null);

	return (
		<section
			aria-labelledby="style-title"
			className="scroll-mt-5 bg-background"
		>
			<div className={cn(PAGE_WIDTH, SECTION_PAD)}>
				<div className="mb-12 max-w-[620px]">
					<h2 className={cn(SECTION_TITLE, "m-0")} id="style-title">
						What kind of trip do you have in mind?
					</h2>
					<p className={cn(SECTION_LEDE, "mt-4 mb-0 max-w-[44ch]")}>
						A change of pace. A shared adventure. A little time for yourself.
					</p>
				</div>
				<div
					className="grid grid-cols-[1.2fr_1fr_1fr] gap-[25px] max-[480px]:grid-cols-1 max-[800px]:grid-cols-2"
					ref={gridRef}
				>
					{TRIP_STYLES.map((style) => {
						const isActive = expansion?.label === style.label;
						const isDimmed = expansion !== null && !isActive;
						return (
							<a
								className={cn(
									FOCUS_INK,
									"group relative block min-h-[290px] no-underline",
									style.layout === "featured" &&
										"row-span-2 min-h-0 max-[480px]:col-auto max-[800px]:col-span-full max-[800px]:row-auto max-[800px]:min-h-[360px]",
									style.layout === "wide" &&
										"col-span-full min-h-[150px] max-[800px]:col-auto max-[800px]:min-h-[290px]",
									isActive && "z-20",
								)}
								data-open={isActive}
								data-style={style.label}
								href="#plan"
								key={style.label}
								onBlur={collapse}
								onClick={() => onSelectStyle(style.label)}
								onFocus={(e: FocusEvent<HTMLAnchorElement>) => {
									if (e.currentTarget.matches(":focus-visible")) {
										expand(e.currentTarget, style.label);
									}
								}}
								onPointerEnter={(e: PointerEvent<HTMLAnchorElement>) => {
									if (e.pointerType === "mouse") {
										expand(e.currentTarget, style.label);
									}
								}}
								onPointerLeave={collapse}
							>
								<motion.span
									animate={{
										...(expansion && isActive
											? {
													top: expansion.top,
													right: expansion.right,
													bottom: expansion.bottom,
													left: expansion.left,
												}
											: REST),
										boxShadow: isActive ? SHADOW_RAISED : SHADOW_REST,
										opacity: isDimmed ? 0.4 : 1,
									}}
									className={cn(
										"absolute flex flex-col border border-border bg-card group-hover:border-slate",
										style.layout === "wide" &&
											"flex-row items-center max-[800px]:flex-col max-[800px]:items-stretch",
									)}
									initial={false}
									transition={EXPAND_TRANSITION}
								>
									<span
										aria-hidden="true"
										className={cn(
											"relative min-h-[165px] self-stretch overflow-hidden bg-muted",
											style.layout === "wide"
												? "min-h-[100px] flex-none basis-[30%] transition-[flex-basis] duration-[600ms] ease-[cubic-bezier(0.34,1.4,0.64,1)] group-data-[open=true]:basis-[60%] max-[800px]:min-h-[132px] max-[800px]:flex-1"
												: "flex-1",
											style.layout === "featured" &&
												"max-[800px]:min-h-[180px]",
										)}
									>
										<img
											alt=""
											className="absolute inset-0 h-full w-full object-cover"
											height={800}
											loading="lazy"
											src={`/images/trips/${style.image}.webp`}
											width={1200}
										/>
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
										<span className="text-[14px] text-muted-foreground">
											{style.copy}
										</span>
									</span>
									<svg
										aria-hidden="true"
										className="absolute right-4 bottom-6 h-5 w-5 fill-none stroke-slate transition-transform group-hover:translate-x-1 motion-reduce:transition-none [stroke-width:1.5]"
										focusable="false"
										viewBox="0 0 24 24"
									>
										<path d="M4 12h15m-6-6 6 6-6 6" />
									</svg>
								</motion.span>
							</a>
						);
					})}
				</div>
			</div>
		</section>
	);
}
