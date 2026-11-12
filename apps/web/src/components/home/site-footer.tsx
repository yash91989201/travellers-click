import { cn } from "@travellers-click/ui/lib/utils";

import { BUTTON, CONTROL, FOCUS_PAPER, PAGE_WIDTH, PRIMARY } from "./classes";

const columnHeading =
	"mb-3 text-[12px] font-semibold uppercase leading-[1.3] tracking-[0.08em] text-border";
const line = "mb-2.5 block text-[14px]";
const note = "text-[12px] leading-[1.55] text-border";
const LINK_ON_INK = `${FOCUS_PAPER} underline underline-offset-4 hover:decoration-2`;

export function SiteFooter() {
	return (
		<footer className="bg-foreground text-card" id="contact">
			<div
				className={cn(
					PAGE_WIDTH,
					"grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-[70px] py-[70px] max-[960px]:grid-cols-1 max-[960px]:gap-8",
				)}
			>
				<div>
					<strong className="mb-3 block font-heading font-semibold text-[clamp(24px,2.2vw,28px)] leading-[1.15] tracking-[-0.01em]">
						Travellers Click
					</strong>
					<p className="mb-5 text-[16px] text-muted leading-[1.5]">
						Trips planned around you.
					</p>
					<a
						className={cn(
							CONTROL,
							BUTTON,
							PRIMARY,
							"inline-block px-6 py-3 text-[15px] focus-visible:outline-card",
						)}
						href="#plan"
					>
						Plan my trip
					</a>
					<p className={cn(note, "mt-5")}>Brand name and logo to confirm.</p>
				</div>
				<div className="grid content-start grid-cols-2 gap-x-10 max-[600px]:grid-cols-1">
					<section className="py-[25px]">
						<h2 className={columnHeading}>Explore</h2>
						<a className={cn(LINK_ON_INK, line)} href="#destinations">
							Destinations
						</a>
						<a className={cn(LINK_ON_INK, line)} href="#packages">
							Holiday packages
						</a>
						<a className={cn(LINK_ON_INK, line)} href="#plan">
							Customize your trip
						</a>
					</section>
					<section className="py-[25px]">
						<h2 className={columnHeading}>Contact</h2>
						<p className={line}>Phone / WhatsApp: to confirm</p>
						<p className={line}>Email and office: to confirm</p>
						<p className={line}>Working hours: to confirm</p>
					</section>
					<section className="col-span-full py-[25px]">
						<h2 className={columnHeading}>Policies &amp; social</h2>
						<p className={line}>
							Privacy · Terms · Cancellation &amp; refunds · Disclaimer
						</p>
						<p className={note}>
							Policy routes, social accounts, and payment methods need
							confirmation.
						</p>
					</section>
				</div>
			</div>
			<div
				className={cn(
					PAGE_WIDTH,
					"border-slate border-t py-[18px] text-[12px] text-border",
				)}
			>
				Prototype · Sample content, no live bookings or enquiries.
			</div>
		</footer>
	);
}
