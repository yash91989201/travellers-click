import { cn } from "@travellers-click/ui/lib/utils";
import { type FormEvent, useState } from "react";

import { BUTTON, CONTROL, PAGE_WIDTH, PRIMARY } from "./classes";

const INPUT =
	"h-12 w-full min-w-0 rounded-[3px] border border-[#777] bg-white px-4 py-[14px] text-base font-normal text-[#282828] transition-[border-color,box-shadow] duration-[250ms] focus:border-[#282828] focus:shadow-[0_0_0_1px_#282828] focus:outline-none";

const NOTE = "m-0 border border-[#777] bg-white px-4 py-[14px] text-[14px]";

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
			"Preview complete. A connected form would send your request to a travel adviser. This demo sent and saved nothing.",
		);
	}

	return (
		<section
			aria-labelledby="plan-title"
			className="bg-[#f3f3f3] py-[88px]"
			id="plan"
		>
			<div
				className={cn(
					PAGE_WIDTH,
					"grid grid-cols-[minmax(260px,4fr)_8fr] items-start gap-[72px] max-[860px]:grid-cols-1 max-[860px]:gap-10",
				)}
			>
				<div className="sticky top-8 grid gap-4 max-[860px]:static">
					<h2
						className="m-0 text-balance font-bold text-[clamp(36px,4vw,52px)] leading-[1.15] tracking-[-0.035em]"
						id="plan-title"
					>
						Your trip.
						<br />
						Your way.
					</h2>
					<p className="m-0 text-[#444] text-[17px]">
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
					<p className="m-0 text-[#606060] text-[12px] leading-[1.6]">
						Prototype only. Do not enter real personal details. This form does
						not send or save data.
					</p>
				</div>
				<form
					className="relative grid gap-10 before:absolute before:top-6 before:bottom-6 before:left-[19px] before:border-[#777] before:border-l-2 before:border-dotted before:content-['']"
					id="enquiry"
					onSubmit={previewEnquiry}
				>
					<div
						aria-labelledby="plan-step-1"
						className="relative grid gap-4 pl-[68px]"
						role="group"
					>
						<span
							aria-hidden="true"
							className="absolute -top-1 left-0 grid h-10 w-10 place-items-center rounded-full bg-[#303030] font-bold text-white tabular-nums"
						>
							1
						</span>
						<h3
							className="m-0 text-balance font-bold text-[22px] leading-8"
							id="plan-step-1"
						>
							Where and when
						</h3>
						<div className="grid grid-cols-2 gap-5 max-[860px]:grid-cols-1">
							<label className="grid min-w-0 gap-2 font-semibold text-[13px]">
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
							<label className="grid min-w-0 gap-2 font-semibold text-[13px]">
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
						className="relative grid gap-4 pl-[68px]"
						role="group"
					>
						<span
							aria-hidden="true"
							className="absolute -top-1 left-0 grid h-10 w-10 place-items-center rounded-full bg-[#303030] font-bold text-white tabular-nums"
						>
							2
						</span>
						<h3
							className="m-0 text-balance font-bold text-[22px] leading-8"
							id="plan-step-2"
						>
							Who is travelling
						</h3>
						<div className="grid grid-cols-2 gap-5 max-[860px]:grid-cols-1">
							<label className="grid min-w-0 gap-2 font-semibold text-[13px]">
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
							<label className="grid min-w-0 gap-2 font-semibold text-[13px]">
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
						className="relative grid gap-4 pl-[68px]"
						role="group"
					>
						<span
							aria-hidden="true"
							className="absolute -top-1 left-0 grid h-10 w-10 place-items-center rounded-full bg-[#303030] font-bold text-white tabular-nums"
						>
							3
						</span>
						<h3
							className="m-0 text-balance font-bold text-[22px] leading-8"
							id="plan-step-3"
						>
							How we reach you
						</h3>
						<div className="grid max-w-[420px] grid-cols-1 gap-5">
							<label className="grid min-w-0 gap-2 font-semibold text-[13px]">
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
								"justify-self-start px-8 py-4 text-base focus-visible:outline-[#282828] focus-visible:outline-offset-[2px]",
							)}
							type="submit"
						>
							Preview trip enquiry
						</button>
						<p className="m-0 text-[#606060] text-[12px] leading-[1.6]">
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
