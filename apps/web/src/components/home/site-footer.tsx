import { cn } from "@travellers-click/ui/lib/utils";

import { BUTTON, CONTROL, LINK, PAGE_WIDTH, PRIMARY } from "./classes";

const columnHeading =
	"mb-3 text-[13px] font-bold uppercase leading-[1.15] tracking-[0.06em]";
const line = "mb-2 block text-[13px]";
const note = "text-[12px] leading-[1.6] text-[#606060]";

export function SiteFooter() {
	return (
		<footer className="bg-[#f3f3f3]" id="contact">
			<div
				className={cn(
					PAGE_WIDTH,
					"grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-[70px] py-[70px] max-[960px]:grid-cols-1 max-[960px]:gap-8",
				)}
			>
				<div>
					<strong className="mb-2 block text-[32px] leading-[1.1] tracking-[-0.02em]">
						Travellers Click
					</strong>
					<p className="mb-5 text-[15px]">Trips planned around you.</p>
					<a
						className={cn(
							CONTROL,
							BUTTON,
							PRIMARY,
							"inline-block px-6 py-3",
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
						<a className={cn(LINK, line)} href="#destinations">
							Destinations
						</a>
						<a className={cn(LINK, line)} href="#packages">
							Holiday packages
						</a>
						<a className={cn(LINK, line)} href="#plan">
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
					"border-[#bbb] border-t py-[18px] text-[#555] text-[12px]",
				)}
			>
				Low fidelity prototype · Review content order and actions before visual
				design.
			</div>
		</footer>
	);
}
