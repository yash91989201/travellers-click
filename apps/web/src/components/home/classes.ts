// Shared Tailwind tokens for the home page. Colors resolve to the DESIGN.md
// palette through packages/ui/src/styles/globals.css (ink, slate, coral, canvas, mist).

export const PAGE_WIDTH =
	"mx-auto w-[min(1160px,calc(100%_-_64px))] max-[600px]:w-[calc(100%_-_36px)]";

const FOCUS = "focus-visible:outline-[3px] focus-visible:outline-offset-[4px]";

// Slate ring on light surfaces. Use FOCUS_PAPER on ink or slate surfaces.
export const FOCUS_INK = `${FOCUS} focus-visible:outline-slate`;

export const FOCUS_PAPER = `${FOCUS} focus-visible:outline-card`;

export const CONTROL =
	"rounded-[3px] border border-input bg-card text-foreground";

export const BUTTON = `cursor-pointer hover:bg-muted ${FOCUS_INK}`;

// Coral is reserved for the main enquiry action.
export const PRIMARY =
	"border-primary bg-primary font-semibold text-primary-foreground hover:border-primary-hover hover:bg-primary-hover hover:text-primary-foreground";

// Slate fill for strong in-page actions that are not the enquiry itself.
export const SLATE =
	"border-slate bg-slate font-semibold text-card hover:border-foreground hover:bg-foreground hover:text-card";

export const LINK = `${FOCUS_INK} underline underline-offset-4 hover:decoration-2`;

export const ANNOTATION =
	"mt-[18px] mb-0 text-xs leading-[1.6] text-muted-foreground";
