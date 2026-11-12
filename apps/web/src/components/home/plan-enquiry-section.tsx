import { cn } from "@travellers-click/ui/lib/utils";
import { type FormEvent, useState } from "react";

import {
	BUTTON,
	CARD_TITLE,
	CONTROL,
	PAGE_WIDTH,
	PRIMARY,
	SECTION_LEDE,
	SECTION_PAD,
	SECTION_TITLE_LG,
} from "./classes";

const INPUT =
	"h-12 w-full min-w-0 rounded-[6px] border border-input bg-card px-4 py-[14px] font-normal text-base text-foreground transition-[border-color] duration-[250ms] placeholder:text-muted-foreground focus:border-slate focus-visible:outline-[3px] focus-visible:outline-slate focus-visible:outline-offset-2";

const NOTE =
	"m-0 border border-border bg-card px-4 py-[14px] text-[14px] leading-[1.55]";

interface PlanEnquirySectionProps {
	destination: string;
	onDestinationChange: (value: string) => void;
	selectedTrip: string;
}

export function PlanEnquirySection({
	destination,
	onDestinationChange,
	selectedTrip,
}: PlanEnquirySectionProps) {
	const [enquiryStatus, setEnquiryStatus] = useState("");

	function previewEnquiry(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setEnquiryStatus(
			"Preview complete. A connected form would send your request to a travel adviser. This demo sent and saved nothing."
		);
	}

	return (
		<section
			aria-labelledby="plan-title"
			className={cn("scroll-mt-24 bg-muted", SECTION_PAD)}
			id="plan"
		>
			<div
				className={cn(
					PAGE_WIDTH,
					"grid grid-cols-[minmax(260px,4fr)_8fr] items-start gap-[72px] max-[860px]:grid-cols-1 max-[860px]:gap-10"
				)}
			>
				<div className="sticky top-8 grid gap-4 max-[860px]:static">
					<h2
						className={cn(SECTION_TITLE_LG, "m-0 font-medium")}
						id="plan-title"
					>
						Your trip.
						<br />
						Your way.
					</h2>
					<p className={cn(SECTION_LEDE, "m-0")}>
						Tell us a little about your plans. A travel adviser can help with
						the details.
					</p>
					<p
						className={cn(NOTE, "empty:hidden")}
						id="selected-trip"
						role="status"
					>
						{selectedTrip}
					</p>
					<p className="m-0 text-[12px] text-muted-foreground leading-[1.55]">
						Prototype only. Do not enter real personal details. This form does
						not send or save data.
					</p>
				</div>
				<form
					className="relative grid gap-12 before:absolute before:top-6 before:bottom-6 before:left-[15px] before:border-input before:border-l before:content-['']"
					id="enquiry"
					onSubmit={previewEnquiry}
				>
					<div
						aria-labelledby="plan-step-1"
						className="relative grid gap-5 pl-[56px]"
						role="group"
					>
						<span
							aria-hidden="true"
							className="absolute -top-1 left-0 grid h-8 w-8 place-items-center rounded-full border border-slate bg-muted font-medium text-[13px] text-foreground tabular-nums"
						>
							1
						</span>
						<h3
							className={cn(
								CARD_TITLE,
								"m-0 text-balance text-[22px] font-medium leading-[1.3]"
							)}
							id="plan-step-1"
						>
							Where and when
						</h3>
						<div className="grid grid-cols-2 gap-5 max-[860px]:grid-cols-1">
							<label className="grid min-w-0 gap-2 font-medium text-[14px]">
								Destination
								<input
									className={INPUT}
									id="destination"
									name="destination"
									onChange={(event) => onDestinationChange(event.target.value)}
									placeholder="A place, or ‘help me choose’"
									value={destination}
								/>
							</label>
							<label className="grid min-w-0 gap-2 font-medium text-[14px]">
								Approximate dates
								<input
									className={INPUT}
									name="dates"
									placeholder="Month, dates, or ‘flexible’"
								/>
							</label>
						</div>
					</div>
					<div
						aria-labelledby="plan-step-2"
						className="relative grid gap-5 pl-[56px]"
						role="group"
					>
						<span
							aria-hidden="true"
							className="absolute -top-1 left-0 grid h-8 w-8 place-items-center rounded-full border border-slate bg-muted font-medium text-[13px] text-foreground tabular-nums"
						>
							2
						</span>
						<h3
							className={cn(
								CARD_TITLE,
								"m-0 text-balance text-[22px] font-medium leading-[1.3]"
							)}
							id="plan-step-2"
						>
							Who is travelling
						</h3>
						<div className="grid grid-cols-2 gap-5 max-[860px]:grid-cols-1">
							<label className="grid min-w-0 gap-2 font-medium text-[14px]">
								Number of travelers
								<input
									className={INPUT}
									min="1"
									name="travelers"
									placeholder="e.g. 2"
									required
									step="1"
									type="number"
								/>
							</label>
							<label className="grid min-w-0 gap-2 font-medium text-[14px]">
								Budget per person, excluding flights
								<input
									className={INPUT}
									name="budget"
									placeholder="Approximate amount in INR"
								/>
							</label>
						</div>
					</div>
					<div
						aria-labelledby="plan-step-3"
						className="relative grid gap-5 pl-[56px]"
						role="group"
					>
						<span
							aria-hidden="true"
							className="absolute -top-1 left-0 grid h-8 w-8 place-items-center rounded-full border border-slate bg-muted font-medium text-[13px] text-foreground tabular-nums"
						>
							3
						</span>
						<h3
							className={cn(
								CARD_TITLE,
								"m-0 text-balance text-[22px] font-medium leading-[1.3]"
							)}
							id="plan-step-3"
						>
							How we reach you
						</h3>
						<div className="grid max-w-[420px] grid-cols-1 gap-5">
							<label className="grid min-w-0 gap-2 font-medium text-[14px]">
								Contact number (required)
								<input
									autoComplete="off"
									className={INPUT}
									name="phone"
									placeholder="Use a sample number"
									required
									type="tel"
								/>
							</label>
						</div>
						<button
							className={cn(
								CONTROL,
								BUTTON,
								PRIMARY,
								"justify-self-start px-8 py-4 text-[15px] focus-visible:outline-offset-[2px]"
							)}
							type="submit"
						>
							Preview trip enquiry
						</button>
						<p className="m-0 text-[12px] text-muted-foreground leading-[1.55]">
							Final form needs confirmed enquiry delivery and privacy terms.
						</p>
						<p
							className={cn(NOTE, "empty:hidden")}
							id="enquiry-status"
							role="status"
						>
							{enquiryStatus}
						</p>
					</div>
				</form>
			</div>
		</section>
	);
}
