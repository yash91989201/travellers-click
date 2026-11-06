import { cn } from "@travellers-click/ui/lib/utils";

import { LINK, PAGE_WIDTH } from "./classes";

const columnHeading =
	"mb-[18px] text-balance text-[16px] font-bold leading-[1.15] tracking-[-0.02em]";

export function SiteFooter() {
	return (
		<footer className="bg-[#f3f3f3]" id="contact">
			<div
				className={cn(
					PAGE_WIDTH,
					"grid grid-cols-[1.1fr_0.8fr_1fr_1fr] gap-8 py-11 max-[960px]:grid-cols-2 max-[600px]:gap-x-5 max-[600px]:gap-y-7",
				)}
			>
				<div className="max-[600px]:col-span-full">
					<strong className="mb-3 block font-bold text-[20px]">
						Travellers Click
					</strong>
					<p className="mb-[10px] block text-[13px]">
						Trips planned around you.
					</p>
					<p className="mt-[18px] mb-[10px] block text-[#606060] text-[12px] leading-[1.6]">
						Brand name and logo to confirm.
					</p>
				</div>
				<div>
					<h2 className={columnHeading}>Explore</h2>
					<a
						className={cn(LINK, "mb-[10px] block text-[13px]")}
						href="#destinations"
					>
						Destinations
					</a>
					<a
						className={cn(LINK, "mb-[10px] block text-[13px]")}
						href="#packages"
					>
						Holiday packages
					</a>
					<a className={cn(LINK, "mb-[10px] block text-[13px]")} href="#plan">
						Customize your trip
					</a>
				</div>
				<div>
					<h2 className={columnHeading}>Contact</h2>
					<p className="mb-[10px] block text-[13px]">
						Phone / WhatsApp: to confirm
					</p>
					<p className="mb-[10px] block text-[13px]">
						Email and office: to confirm
					</p>
					<p className="mb-[10px] block text-[13px]">
						Working hours: to confirm
					</p>
				</div>
				<div className="max-[600px]:col-span-full">
					<h2 className={columnHeading}>Policies &amp; social</h2>
					<p className="mb-[10px] block text-[13px]">Privacy · Terms</p>
					<p className="mb-[10px] block text-[13px]">
						Cancellation &amp; refunds · Disclaimer
					</p>
					<p className="mt-[18px] mb-[10px] block text-[#606060] text-[12px] leading-[1.6]">
						Policy routes, social accounts, and payment methods need
						confirmation.
					</p>
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
