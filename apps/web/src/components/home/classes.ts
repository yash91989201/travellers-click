// Shared Tailwind tokens for the home wireframe. Values mirror DESIGN.md.

export const PAGE_WIDTH =
	"mx-auto w-[min(1160px,calc(100%_-_64px))] max-[600px]:w-[calc(100%_-_36px)]";

const FOCUS = "focus-visible:outline-[3px] focus-visible:outline-offset-[4px]";

export const FOCUS_INK = `${FOCUS} focus-visible:outline-[#444]`;

export const CONTROL =
	"rounded-[3px] border border-[#777] bg-white text-[#282828]";

export const BUTTON = `cursor-pointer hover:bg-[#e5e5e5] ${FOCUS_INK}`;

export const PRIMARY =
	"border-[#303030] bg-[#303030] font-semibold text-white hover:bg-[#505050] hover:text-white";

export const LINK = `${FOCUS_INK} underline underline-offset-4 hover:decoration-2`;

export const ANNOTATION = "mt-[18px] mb-0 text-xs leading-[1.6] text-[#606060]";
