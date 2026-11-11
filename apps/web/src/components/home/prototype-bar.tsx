import { FOCUS_INK } from "./classes";

export function PrototypeBar() {
	return (
		<a
			className={`absolute -top-[100px] z-[5] bg-card p-3 text-foreground underline underline-offset-4 hover:decoration-2 focus:top-0 ${FOCUS_INK}`}
			href="#main"
		>
			Skip to content
		</a>
	);
}
