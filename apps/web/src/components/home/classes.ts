// Shared Tailwind tokens for the home page. Colors resolve to the DESIGN.md
// palette through packages/ui/src/styles/globals.css (ink, slate, coral, canvas, mist).

export const PAGE_WIDTH =
	"mx-auto w-[min(1160px,calc(100%_-_64px))] max-[600px]:w-[calc(100%_-_36px)]";

// Section rhythm: one vertical pad for every band, with three title tiers.
// Hero display > enquiry title > browsing sections > supporting bands, so
// scale and weight separate sections before background tone does.
export const SECTION_PAD = "py-[104px] max-[600px]:py-16";

// Browsing bands: benefits, travel styles, packages.
export const SECTION_TITLE =
	"text-balance font-medium text-[clamp(32px,3.2vw,42px)] leading-[1.12] tracking-[-0.02em]";

export const SECTION_LEDE = "text-[18px] text-muted-foreground leading-[1.6]";

// Supporting bands: process, reviews, flights and FAQs.
export const SECTION_TITLE_QUIET =
	"text-balance font-medium text-[clamp(26px,2.2vw,30px)] leading-[1.2] tracking-[-0.015em]";

// The enquiry title, the page's second voice after the hero.
export const SECTION_TITLE_LG =
	"text-balance font-medium text-[clamp(36px,3.6vw,48px)] leading-[1.12] tracking-[-0.02em]";

// Card and step titles: Lora at a mid weight, so photo captions, mosaic labels,
// and form steps share one face. Set size and leading at the call site; the
// class merger drops leading-* when it arrives alongside an arbitrary text size.
export const CARD_TITLE = "font-heading font-medium tracking-[-0.01em]";

const FOCUS = "focus-visible:outline-[3px] focus-visible:outline-offset-[4px]";

// Slate ring on light surfaces. Use FOCUS_PAPER on ink or slate surfaces.
export const FOCUS_INK = `${FOCUS} focus-visible:outline-slate`;

export const FOCUS_PAPER = `${FOCUS} focus-visible:outline-card`;

export const CONTROL =
	"rounded-[6px] border border-input bg-card text-foreground";

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
