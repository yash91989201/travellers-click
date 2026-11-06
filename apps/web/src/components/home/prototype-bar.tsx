import { FOCUS_INK } from "./classes";

export function PrototypeBar() {
	return (
		<>
			<div className="flex justify-between gap-3 border-[#aaa] border-b bg-[#e9e9e9] px-7 py-[9px] text-[12px] max-[600px]:flex-col max-[600px]:gap-[2px] max-[600px]:px-[18px] max-[600px]:py-[10px]">
				<span>
					<strong>Home page wireframe</strong> · Structure and flow only
				</span>
				<span>Sample content · No live bookings or enquiries</span>
			</div>
			<a
				className={`absolute -top-[100px] z-[5] bg-white p-3 underline underline-offset-4 hover:decoration-2 focus:top-0 ${FOCUS_INK}`}
				href="#main"
			>
				Skip to content
			</a>
		</>
	);
}
