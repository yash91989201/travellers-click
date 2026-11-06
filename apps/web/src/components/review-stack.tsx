import { cn } from "@travellers-click/ui/lib/utils";

import { FOCUS_INK } from "./home/classes";
import {
	type CSSProperties,
	type KeyboardEvent,
	type PointerEvent,
	useEffect,
	useRef,
	useState,
} from "react";

// Placeholder slots only: swap for verified reviews once permissions exist.
const SLOT_COUNT = 5;
const SLOTS = Array.from({ length: SLOT_COUNT }, (_, i) => `slot-${i + 1}`);
const VISIBLE_CARDS = 3;
const AUTOPLAY_MS = 5500;
const SWIPE_PX = 80;

type Position = "0" | "1" | "2" | "gone" | "out";

function positionOf(index: number, active: number): Position {
	const offset = (index - active + SLOT_COUNT) % SLOT_COUNT;
	if (offset < VISIBLE_CARDS) {
		return String(offset) as Position;
	}
	// The card that just left flies off; the rest wait hidden behind the stack.
	return offset === SLOT_COUNT - 1 ? "gone" : "out";
}

const SLOT_POSITION: Record<Position, string> = {
	"0": "data-[pos=0]:z-[4] data-[pos=0]:shadow-[0_22px_36px_-16px_rgba(40,40,40,0.55)] data-[pos=0]:[transform:translate(0,0)_rotate(-1deg)_scale(1.06)] data-[pos=0]:[transition:transform_1.3s_var(--spring),opacity_0.7s_ease,box-shadow_1.1s_var(--ease)]",
	"1": "data-[pos=1]:z-[3] data-[pos=1]:bg-[#f3f3f3] data-[pos=1]:shadow-[0_10px_20px_-12px_rgba(40,40,40,0.4)] data-[pos=1]:[transform:translate(104px,-58px)_rotate(6.5deg)_scale(0.92)] max-[860px]:data-[pos=1]:[transform:translate(36px,-48px)_rotate(5deg)_scale(0.92)]",
	"2": "data-[pos=2]:z-[2] data-[pos=2]:bg-[#ececec] data-[pos=2]:shadow-[0_6px_14px_-10px_rgba(40,40,40,0.35)] data-[pos=2]:[transform:translate(-98px,-106px)_rotate(-7.5deg)_scale(0.84)] max-[860px]:data-[pos=2]:[transform:translate(-34px,-88px)_rotate(-6deg)_scale(0.84)]",
	gone: "data-[pos=gone]:pointer-events-none data-[pos=gone]:z-[5] data-[pos=gone]:opacity-0 data-[pos=gone]:[transform:translate(calc(var(--exit,1)*120%),30px)_rotate(calc(var(--exit,1)*12deg))_scale(1)]",
	out: "data-[pos=out]:pointer-events-none data-[pos=out]:z-0 data-[pos=out]:opacity-0 data-[pos=out]:[transform:translate(0,-80px)_rotate(0)_scale(0.8)]",
};

export function ReviewStack() {
	const root = useRef<HTMLDivElement>(null);
	const [active, setActive] = useState(0);
	const [hovering, setHovering] = useState(false);
	const [focused, setFocused] = useState(false);
	// Any press, drag or key press ends autoplay for good.
	const [stopped, setStopped] = useState(false);
	const [visible, setVisible] = useState(true);
	const [reducedMotion, setReducedMotion] = useState(false);
	const [dragX, setDragX] = useState<number | null>(null);
	const [exit, setExit] = useState(1);
	const dragStart = useRef<number | null>(null);
	const engaged = hovering || focused || dragX !== null;
	const running = !(stopped || engaged || reducedMotion) && visible;

	useEffect(() => {
		const media = window.matchMedia("(prefers-reduced-motion: reduce)");
		const sync = () => setReducedMotion(media.matches);
		sync();
		media.addEventListener("change", sync);
		const observer =
			typeof IntersectionObserver === "undefined"
				? undefined
				: new IntersectionObserver(([entry]) =>
						setVisible(entry.isIntersecting && !document.hidden),
					);
		const syncHidden = () => {
			if (document.hidden) {
				setVisible(false);
			}
		};
		document.addEventListener("visibilitychange", syncHidden);
		if (root.current) {
			observer?.observe(root.current);
		}
		return () => {
			media.removeEventListener("change", sync);
			document.removeEventListener("visibilitychange", syncHidden);
			observer?.disconnect();
		};
	}, []);

	useEffect(() => {
		if (!running) {
			return;
		}
		const timer = window.setTimeout(
			() => setActive((index) => (index + 1) % SLOT_COUNT),
			AUTOPLAY_MS,
		);
		return () => window.clearTimeout(timer);
	}, [active, running]);

	const next = () => setActive((index) => (index + 1) % SLOT_COUNT);
	const previous = () =>
		setActive((index) => (index - 1 + SLOT_COUNT) % SLOT_COUNT);

	function trackHover(event: PointerEvent<HTMLDivElement>) {
		setHovering(Boolean((event.target as Element).closest('[data-pos="0"]')));
	}

	function startDrag(event: PointerEvent<HTMLDivElement>) {
		const onFront = (event.target as Element).closest('[data-pos="0"]');
		if (!onFront) {
			return;
		}
		dragStart.current = event.clientX;
		setStopped(true);
		event.currentTarget.setPointerCapture(event.pointerId);
		setDragX(0);
	}

	function moveDrag(event: PointerEvent<HTMLDivElement>) {
		if (dragStart.current === null) {
			return;
		}
		setDragX(event.clientX - dragStart.current);
	}

	function endDrag() {
		if (dragStart.current === null) {
			return;
		}
		const distance = dragX ?? 0;
		dragStart.current = null;
		setDragX(null);
		if (Math.abs(distance) < SWIPE_PX) {
			return;
		}
		setExit(distance > 0 ? 1 : -1);
		next();
	}

	function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
		if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
			return;
		}
		setStopped(true);
		if (event.key === "ArrowRight") {
			next();
		} else {
			previous();
		}
	}

	return (
		<div className="grid gap-5" ref={root}>
			<div
				aria-label="Review slots"
				aria-live={running ? "off" : "polite"}
				aria-roledescription="carousel"
				className={cn(
					FOCUS_INK,
					"group relative grid touch-pan-y select-none px-24 pt-[132px] pb-5 max-[860px]:px-7 max-[860px]:pt-[104px] max-[860px]:pb-5",
				)}
				data-dragging={dragX !== null}
				data-engaged={engaged}
				onBlurCapture={() => setFocused(false)}
				onFocusCapture={() => setFocused(true)}
				onKeyDown={onKeyDown}
				onPointerCancel={endDrag}
				onPointerDown={startDrag}
				onPointerLeave={() => setHovering(false)}
				onPointerMove={moveDrag}
				onPointerOver={trackHover}
				onPointerUp={endDrag}
				role="group"
				style={
					{
						"--ease": "cubic-bezier(0.22, 0.9, 0.3, 1)",
						"--exit": exit,
						"--spring":
							"linear(0, 0.18 7%, 0.62 16%, 0.94 25%, 1.06 33%, 1.07 38%, 1.03 47%, 0.99 58%, 1.005 72%, 1)",
					} as CSSProperties
				}
				tabIndex={0}
			>
				{SLOTS.map((id, index) => {
					const position = positionOf(index, active);
					const front = position === "0";
					return (
						<figure
							aria-hidden={index === active ? undefined : true}
							className={cn(
								"relative col-start-1 row-start-1 m-0 w-[min(100%,540px)] justify-self-center border border-[#777] bg-white [transform-origin:50%_100%] [transition:transform_1.1s_var(--ease),opacity_0.7s_ease,box-shadow_1.1s_var(--ease)] after:pointer-events-none after:absolute after:inset-0 after:bg-[#282828] after:opacity-0 after:content-[''] data-[pos=0]:cursor-grab data-[pos=1]:after:opacity-5 data-[pos=2]:after:opacity-10 group-data-[dragging=true]:data-[pos=0]:cursor-grabbing motion-reduce:transition-none motion-reduce:after:transition-none after:[transition:opacity_1.1s_var(--ease)]",
								SLOT_POSITION[position],
								"group-data-[engaged=true]:data-[pos=0]:shadow-[0_30px_44px_-18px_rgba(40,40,40,0.6)] group-data-[engaged=true]:data-[pos=0]:[transform:translate(0,0)_rotate(0)_scale(1.25)]",
							)}
							data-pos={position}
							key={id}
							style={
								front && dragX !== null
									? {
											transform: `translate(${dragX}px, ${Math.abs(dragX) * 0.06}px) rotate(${dragX * 0.04}deg) scale(1.25)`,
											transition: "none",
										}
									: undefined
							}
						>
							<div
								className={cn(
									"grid grid-cols-[1fr_112px] grid-rows-[auto_auto] gap-x-6 gap-y-5 p-7 max-[860px]:grid-cols-[1fr_92px]",
									front && "animate-[review-drift_9s_ease-in-out_infinite]",
									"motion-reduce:animate-none",
								)}
							>
								<div
									aria-hidden="true"
									className="col-start-1 grid content-start gap-[14px] pt-[6px]"
								>
									<i
										className={cn(
											"mt-[14px] block h-[3px] origin-left bg-[#999]",
											front && "animate-[review-line_0.8s_var(--ease)_both]",
											"motion-reduce:animate-none",
										)}
									/>
									<i
										className={cn(
											"mt-[14px] block h-[3px] origin-left bg-[#999] [&:nth-child(2)]:[animation-delay:0.12s]",
											front && "animate-[review-line_0.8s_var(--ease)_both]",
											"motion-reduce:animate-none",
										)}
									/>
									<i
										className={cn(
											"mt-[14px] block h-[3px] w-[60%] origin-left bg-[#999] [&:nth-child(3)]:[animation-delay:0.24s]",
											front && "animate-[review-line_0.8s_var(--ease)_both]",
											"motion-reduce:animate-none",
										)}
									/>
								</div>
								<div className="col-start-1 row-start-2 flex items-end justify-between gap-3">
									<p className="m-0 text-[#555] text-[12px] uppercase tracking-[0.06em]">
										Verified review
									</p>
									<span
										className={cn(
											"font-bold text-[13px] tabular-nums transition-opacity duration-500",
											front ? "opacity-100" : "opacity-0",
										)}
									>
										{index + 1} / {SLOT_COUNT}
									</span>
								</div>
								<figcaption className="col-start-2 row-span-2 grid content-between justify-items-end gap-[6px] border-[#777] border-l-2 border-dotted pl-5 text-right text-[13px]">
									<span
										aria-hidden="true"
										className="h-[76px] w-16 rounded-[3px] border-2 border-[#777] border-dashed bg-[repeating-linear-gradient(45deg,#fff_0_6px,#eee_6px_7px)]"
									/>
									<span className="font-bold">Traveler name</span>
									<span className="text-[#555]">Source</span>
								</figcaption>
							</div>
						</figure>
					);
				})}
			</div>
		</div>
	);
}
