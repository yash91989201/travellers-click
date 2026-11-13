import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@travellers-click/ui/lib/utils";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { PAGE_WIDTH } from "./home/classes";
import UserMenu from "./user-menu";

const NAV_LINKS = [
	{ hash: "destinations", label: "Destinations" },
	{ hash: "packages", label: "Holiday packages" },
	{ hash: "plan", label: "Custom tours" },
	{ hash: "services", label: "Flights & hotels" },
	{ hash: "how", label: "About our process" },
	{ hash: "contact", label: "Contact" },
] as const;

const FOCUS =
	"focus-visible:outline-[3px] focus-visible:outline-offset-[4px] focus-visible:outline-foreground";

const CTA =
	"inline-flex items-center justify-center whitespace-nowrap rounded-[6px] border border-primary bg-primary px-5 py-3 font-semibold text-[14px] text-primary-foreground no-underline transition-colors hover:border-primary-hover hover:bg-primary-hover";

export default function Header({ account = true }: { account?: boolean }) {
	const [hidden, setHidden] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const dialogRef = useRef<HTMLDialogElement>(null);
	const menuButtonRef = useRef<HTMLButtonElement>(null);
	const focusWithin = useRef(false);
	const navHold = useRef(0);
	const href = useRouterState({ select: (state) => state.location.href });

	useEffect(() => {
		navHold.current = Date.now() + 800;
		setHidden(false);
	}, [href]);

	// Hide while the visitor scrolls down, reveal as soon as the direction reverses.
	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			return;
		}

		let lastY = window.scrollY;
		let travelled = 0;
		let hideTimer = 0;
		let frame = 0;

		const update = () => {
			frame = 0;
			const y = Math.max(window.scrollY, 0);
			const delta = y - lastY;
			lastY = y;

			if (Date.now() < navHold.current) {
				window.clearTimeout(hideTimer);
				hideTimer = 0;
				travelled = 0;
				setHidden(false);
				return;
			}

			if (y < 72 || delta < 0) {
				window.clearTimeout(hideTimer);
				hideTimer = 0;
				travelled = 0;
				setHidden(false);
				return;
			}

			travelled += delta;
			if (travelled > 24 && hideTimer === 0) {
				hideTimer = window.setTimeout(() => {
					hideTimer = 0;
					const keyboardFocus =
						focusWithin.current &&
						document.activeElement?.matches(":focus-visible");
					if (!keyboardFocus) {
						setHidden(true);
					}
				}, 220);
			}
		};

		const onScroll = () => {
			if (frame === 0) {
				frame = window.requestAnimationFrame(update);
			}
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.cancelAnimationFrame(frame);
			window.clearTimeout(hideTimer);
		};
	}, []);

	useEffect(() => {
		const dialog = dialogRef.current;
		if (!(menuOpen && dialog)) {
			return;
		}

		dialog.showModal();
		const { body } = document;
		const previousOverflow = body.style.overflow;
		body.style.overflow = "hidden";

		return () => {
			if (dialog.open) {
				dialog.close();
			}
			body.style.overflow = previousOverflow;
			menuButtonRef.current?.focus();
		};
	}, [menuOpen]);

	// The full-screen panel is mobile-only; closing on resize prevents a stuck overlay.
	useEffect(() => {
		const wide = window.matchMedia("(min-width: 64rem)");
		const closeOnWide = () => {
			if (wide.matches) {
				setMenuOpen(false);
			}
		};

		wide.addEventListener("change", closeOnWide);
		return () => wide.removeEventListener("change", closeOnWide);
	}, []);

	function openMenu() {
		setHidden(false);
		setMenuOpen(true);
	}

	return (
		<header
			className={cn(
				"sticky top-0 z-40",
				hidden &&
					"pointer-events-none [-webkit-tap-highlight-color:transparent]"
			)}
			onBlur={(event) => {
				if (!event.currentTarget.contains(event.relatedTarget)) {
					focusWithin.current = false;
				}
			}}
			onFocusCapture={() => {
				focusWithin.current = true;
				setHidden(false);
			}}
		>
			<div
				className={cn(
					"border-border/60 border-b bg-background transition-transform duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none",
					hidden && "-translate-y-full"
				)}
			>
				<div
					className={cn(
						PAGE_WIDTH,
						"flex h-16 items-center gap-6 lg:grid lg:h-20 lg:grid-cols-[auto_1fr_auto]"
					)}
				>
					<Link
						className={cn(
							FOCUS,
							"group shrink-0 justify-self-start no-underline"
						)}
						to="/"
					>
						<span className="whitespace-nowrap font-heading font-medium text-[22px] text-foreground tracking-[-0.02em]">
							Travellers Click
						</span>
					</Link>

					<nav
						aria-label="Main navigation"
						className="hidden items-center gap-4 lg:flex lg:justify-self-center xl:gap-6"
					>
						{NAV_LINKS.map(({ hash, label }) => (
							<Link
								className={cn(
									FOCUS,
									"relative whitespace-nowrap py-2 font-medium text-[14px] text-muted-foreground no-underline transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-foreground after:transition-transform after:duration-200 hover:text-foreground hover:after:scale-x-100"
								)}
								hash={hash}
								key={hash}
								to="/"
							>
								{label}
							</Link>
						))}
					</nav>

					<div className="ml-auto flex items-center gap-3 lg:ml-0 lg:justify-self-end">
						{account && <UserMenu />}
						<Link
							className={cn(
								FOCUS,
								CTA,
								account
									? "hidden lg:inline-flex"
									: "inline-flex max-[400px]:hidden"
							)}
							hash="plan"
							to="/"
						>
							Plan my trip
						</Link>
						<button
							aria-controls="mobile-menu"
							aria-expanded={menuOpen}
							aria-haspopup="dialog"
							className={cn(
								FOCUS,
								"inline-flex items-center gap-1.5 rounded-[6px] px-2 py-2 font-medium text-[14px] text-foreground transition-colors hover:text-muted-foreground lg:hidden"
							)}
							onClick={openMenu}
							ref={menuButtonRef}
							type="button"
						>
							Menu
							<ChevronDown aria-hidden="true" className="size-4" />
						</button>
					</div>
				</div>
			</div>

			<dialog
				aria-label="Menu"
				className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none border-0 bg-background p-0 text-foreground"
				id="mobile-menu"
				onClose={() => setMenuOpen(false)}
				ref={dialogRef}
			>
				<div className="flex h-full flex-col pt-[env(safe-area-inset-top)]">
					<div className="flex h-16 items-center justify-between border-border border-b px-5">
						<Link
							className={cn(FOCUS, "no-underline")}
							onClick={() => setMenuOpen(false)}
							to="/"
						>
							<span className="font-heading font-medium text-[22px] text-foreground tracking-[-0.02em]">
								Travellers Click
							</span>
						</Link>
						<button
							className={cn(
								FOCUS,
								"inline-flex items-center gap-1.5 rounded-[6px] px-2 py-2 font-medium text-[14px] text-foreground"
							)}
							onClick={() => setMenuOpen(false)}
							type="button"
						>
							Close
							<ChevronUp aria-hidden="true" className="size-4" />
						</button>
					</div>

					<nav
						aria-label="Main navigation"
						className="flex-1 overflow-y-auto px-5 py-4"
						onClick={() => setMenuOpen(false)}
					>
						{NAV_LINKS.map(({ hash, label }) => (
							<Link
								className={cn(
									FOCUS,
									"group flex items-center justify-between border-border/70 border-b py-4 font-medium text-[22px] text-foreground no-underline"
								)}
								hash={hash}
								key={hash}
								to="/"
							>
								{label}
								<ChevronRight
									aria-hidden="true"
									className="size-5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1"
								/>
							</Link>
						))}
					</nav>

					<div className="flex flex-col gap-3 border-border border-t px-5 pt-4 pb-[max(20px,env(safe-area-inset-bottom))]">
						<Link
							className={cn(FOCUS, CTA, "w-full py-3 text-[14px]")}
							hash="plan"
							onClick={() => setMenuOpen(false)}
							to="/"
						>
							Plan my trip
						</Link>
						{account && (
							<div className="[&_a]:block [&_button]:w-full">
								<UserMenu />
							</div>
						)}
					</div>
				</div>
			</dialog>
		</header>
	);
}
