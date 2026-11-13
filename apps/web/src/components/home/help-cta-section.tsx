import { cn } from "@travellers-click/ui/lib/utils";

import { PAGE_WIDTH, SECTION_TITLE } from "./classes";

export function HelpCtaSection() {
	return (
		<section
			aria-labelledby="services-title"
			className="scroll-mt-24 bg-background"
			id="services"
		>
			<div className="relative isolate grid min-h-[clamp(300px,27vw,380px)] content-center overflow-clip py-[clamp(56px,6vw,88px)]">
				<img
					alt=""
					aria-hidden="true"
					className="services-parallax pointer-events-none absolute inset-0 size-full object-cover object-[62%_58%]"
					height={900}
					src="/images/trips/wellness.webp"
					width={1200}
				/>
				<div
					aria-hidden="true"
					className="absolute inset-0 bg-[linear-gradient(90deg,#173e49f0_0%,#173e49db_46%,#173e496b_100%)] max-[780px]:bg-[linear-gradient(180deg,#173e49eb_0%,#173e49c7_100%)]"
				/>
				<div
					className={cn(
						PAGE_WIDTH,
						"relative grid items-end gap-x-14 gap-y-[18px] min-[781px]:grid-cols-[minmax(0,1fr)_auto]"
					)}
				>
					<h2
						className={cn(SECTION_TITLE, "m-0 max-w-[17ch] text-card")}
						id="services-title"
					>
						Need help with flights or hotels?
					</h2>
					<p className="m-0 max-w-[44ch] text-pretty text-[18px] text-card/88 leading-[1.65] tracking-[0.005em]">
						Include transport, stays, visa, or insurance questions in your trip
						request.
					</p>
					<a
						className="w-fit rounded-[6px] border border-card bg-card px-6 py-3.5 font-semibold text-[15px] text-foreground leading-[1.4] no-underline transition-colors duration-200 hover:bg-transparent hover:text-card focus-visible:outline-[3px] focus-visible:outline-card focus-visible:outline-offset-[4px] motion-reduce:transition-none min-[781px]:col-start-2 min-[781px]:row-span-2 min-[781px]:row-start-1"
						href="#plan"
					>
						Discuss travel needs
					</a>
				</div>
			</div>
		</section>
	);
}
