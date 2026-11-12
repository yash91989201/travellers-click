import { cn } from "@travellers-click/ui/lib/utils";

import { BUTTON, CONTROL, FOCUS_PAPER, PAGE_WIDTH, PRIMARY } from "./classes";

const label =
	"mb-[14px] font-sans text-[12px] font-semibold leading-[1.2] tracking-[0.01em] text-card/60";
const line = "m-0 py-[7px] text-[14px] leading-[1.45]";
const note = "text-[12px] leading-[1.6] text-card/75";
const LINK_ON_INK = `${FOCUS_PAPER} block border-transparent border-b py-[7px] text-[14px] no-underline transition-colors hover:border-primary/70`;

export function SiteFooter() {
	return (
		<footer className="bg-foreground text-card" id="contact">
			<div
				className={cn(
					PAGE_WIDTH,
					"grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-[72px] py-16 max-[960px]:grid-cols-1 max-[960px]:gap-10 max-[960px]:py-12"
				)}
			>
				<div>
					<p className="m-0 font-heading font-medium text-[clamp(24px,2.2vw,28px)] leading-[1.15] tracking-[-0.01em]">
						Travellers Click
					</p>
					<p className="mt-[10px] mb-[22px] text-[15px] text-card/80 leading-[1.55]">
						Trips planned around you.
					</p>
					<a
						className={cn(
							CONTROL,
							BUTTON,
							PRIMARY,
							"inline-block px-6 py-3 text-[15px] focus-visible:outline-card"
						)}
						href="#plan"
					>
						Plan my trip
					</a>
					<p className={cn(note, "mt-[18px] text-pretty")}>
						Brand name and logo to confirm.
					</p>
				</div>
				<div className="grid grid-cols-2 content-start gap-x-10 max-[600px]:grid-cols-1">
					<section className="py-[6px]">
						<h2 className={label}>Explore</h2>
						<a className={LINK_ON_INK} href="#destinations">
							Destinations
						</a>
						<a className={LINK_ON_INK} href="#packages">
							Holiday packages
						</a>
						<a className={LINK_ON_INK} href="#plan">
							Customize your trip
						</a>
					</section>
					<section className="py-[6px]">
						<h2 className={label}>Contact</h2>
						<p className={line}>Phone / WhatsApp: to confirm</p>
						<p className={line}>Email and office: to confirm</p>
						<p className={line}>Working hours: to confirm</p>
					</section>
					<section className="col-span-full mt-[10px] border-card/20 border-t pt-[22px]">
						<h2 className={label}>Policies &amp; social</h2>
						<p className={line}>
							Privacy · Terms · Cancellation &amp; refunds · Disclaimer
						</p>
						<p className={cn(note, "text-pretty")}>
							Policy routes, social accounts, and payment methods need
							confirmation.
						</p>
					</section>
				</div>
			</div>
			<div
				className={cn(
					PAGE_WIDTH,
					"border-card/20 border-t py-[18px] text-[12px] text-card/75"
				)}
			>
				Prototype · Sample content, no live bookings or enquiries.
			</div>
		</footer>
	);
}
