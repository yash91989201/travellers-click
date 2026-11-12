---
name: Travellers Click
description: Warm slate-and-coral visual system for an approachable, adviser-led travel site.
colors:
  ink: "#173E49"
  slate: "#315866"
  coral: "#F3A08E"
  coral-hover: "#E79483"
  canvas: "#F8F5EF"
  paper: "#FFFFFF"
  mist: "#E3ECEC"
  muted-ink: "#4F656C"
  line: "#6B858C"
  line-soft: "#AABDC2"
typography:
  display:
    fontFamily: '"Lora Variable", serif'
    fontSize: "4rem"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  hero-destination:
    fontFamily: '"Lora Variable", serif'
    fontSize: "4.5rem"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  headline-lg:
    fontFamily: '"Lora Variable", serif'
    fontSize: "3rem"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: '"Lora Variable", serif'
    fontSize: "2.625rem"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline-sm:
    fontFamily: '"Lora Variable", serif'
    fontSize: "1.875rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  title-featured:
    fontFamily: '"Lora Variable", serif'
    fontSize: "1.625rem"
    fontWeight: 500
    lineHeight: 1.2
  title:
    fontFamily: '"Lora Variable", serif'
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  subtitle:
    fontFamily: '"Lora Variable", serif'
    fontSize: "1.375rem"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  lede:
    fontFamily: '"Figtree Variable", sans-serif'
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: '"Figtree Variable", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  body-small:
    fontFamily: '"Figtree Variable", sans-serif'
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: '"Figtree Variable", sans-serif'
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
  meta:
    fontFamily: '"Figtree Variable", sans-serif'
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.45
  caption:
    fontFamily: '"Figtree Variable", sans-serif'
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.55
  button:
    fontFamily: '"Figtree Variable", sans-serif'
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  control: "6px"
  pin: "50%"
spacing:
  control-y: "12px"
  control-x: "16px"
components:
  button-primary:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
  button-primary-hover:
    backgroundColor: "{colors.coral-hover}"
    textColor: "{colors.ink}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
  button-secondary-hover:
    backgroundColor: "{colors.mist}"
---

# Design System: Travellers Click

## Overview

**Creative North Star: "The Annotated Itinerary"**

On 2026-11-11, the user chose palette 6, **slate and coral**, after comparing it with teal and sand on homepage previews. In the November 12 redesign, they reaffirmed slate and coral and chose a warmer, personal, approachable adviser-led feel. Cobalt and citron, forest and marigold, and aubergine do not fit the direction.

This system records the confirmed direction and current homepage treatment. Lora headings and Figtree body text remain; headings use normal or medium weights for a softer hierarchy. The palette values are unchanged. The page keeps its established structure while using a warm ivory and white canvas, deliberate mist enquiry region, and deep ink footer.

The intended expression is a carefully composed travel itinerary: clear information, memorable destination photography, welcoming type, and restrained route-and-pin details. Preserve the existing section order, discovery form overlap, travel-style mosaic, package accordion, and review interaction. Do not add a decorative looping route or benefits sequence numbers.

Visitor mode is Persuade. The one action is **Plan my trip**; there is no booking or payment flow. Tone is clear, helpful, adviser-led (PRODUCT.md).

**Key Characteristics:**
- Warm ivory and white form the reading surfaces; slate gives structure, and coral identifies the main enquiry action.
- Destination photography carries atmosphere without a heavy cream wash over every image.
- Distinct heading hierarchy and the accepted travel-style mosaic carry the composition.
- Hero photography uses a localized neutral scrim; the horizontal discovery form retains its overlap.
- Native disclosure for FAQs and mobile nav.
- Placeholder content is labeled illustrative; never invent reviews, prices or badges.

## Colors

The frontmatter is the source of exact color values. The five core colors are ink, slate, coral, canvas, and mist. Paper, muted ink, hover, and border colors support accessible UI states; they are implementation defaults within this palette, not additional brand directions.

### Primary

- **Slate** (`slate`): navigation identity, selected filters, and deliberate structural surfaces. It need not color every heading.
- **Coral** (`coral`): the main enquiry action, especially **Plan my trip**. Use deep ink text on coral; white text does not provide sufficient contrast for normal text.
- **Coral Hover** (`coral-hover`): a restrained hover change that preserves the button label's contrast.

### Neutral

- **Ink** (`ink`): body copy and most headings. It can anchor a dark footer.
- **Warm Ivory** (`canvas`): the main page ground. Keep white available rather than tinting every surface.
- **Paper** (`paper`): inputs and surfaces that need separation from the page.
- **Mist** (`mist`): a purposeful supporting surface, such as the enquiry area. Use ivory for the hero, benefits, travel styles, process, and FAQs; white for packages; slate for reviews; mist for enquiry; and ink for the footer. Do not alternate surfaces mechanically.
- **Muted Ink** (`muted-ink`): supporting copy on light surfaces; never low-opacity text over a photograph.
- **Line** (`line`): visible control boundaries. **Line Soft** (`line-soft`): nonessential dividers; it is too light to be the sole boundary of a control.

### Named Rules

**The Action Color Rule.** Coral has priority on the main enquiry action. Selected filters use slate; secondary links use ink or slate. A coral pin may act as the hero's signature, but avoid repeating coral across unrelated cards, badges, rules, and headings.

**The Photograph Rule.** Use intentional crops and keep destination colors believable. Place text in a quiet area or use a localized scrim with measured contrast. The comparison preview's full-image ivory wash is not an approved treatment.

Verified solid-color pairings: ink on canvas 10.59:1, ink on coral 5.62:1, ink on coral-hover 4.92:1, muted ink on canvas 5.66:1, muted ink on mist 5.12:1, and paper on slate 7.73:1. The control line is 3.92:1 against paper. These calculations do not validate text over photos or every rendered state.

## Typography

Lora Variable carries headings and card titles; Figtree Variable carries prose,
navigation, labels, and controls. This pass incorporates main's named role ramp
while retaining the warmer redesign. Browsing titles use 500 weight, supporting
sections stay smaller, and the hero question remains 400. The destination is italic.

| Role | Responsive size | Weight | Use |
| --- | --- | --- | --- |
| Display | 32–64px | 400 | Hero question |
| Destination | 44–66px | 400 italic | Hero destination |
| Headline large | 36–48px | 500 | Enquiry title |
| Headline | 32–42px | 500 | Browsing sections |
| Headline small | 26–30px | 500 | Process, reviews, services |
| Card title | 22–26px | 500 | Travel styles and form steps |
| Expanded package title | 24–32px | 500 | Open itinerary panel |
| Lede | 18px / 1.6 | 400 | Section introduction |
| Body | 16px / 1.6 | 400 | Prose, answers, input values |
| Small body | 15px / 1.55 | 400 | Card descriptions |
| Label | 14px / 1.4 | 600 | Labels and navigation |
| Metadata | 13px / 1.45 | 400 | Status and supporting details |
| Caption | 12px / 1.55 | 400 | Prototype notes and credits |
| Button | 14–15px / 1.4 | 600 | Actions |

Keep body measure around 45–65ch. Balance headings, use pretty wrapping for
paragraphs, and preserve phrase-level hero and enquiry breaks. Ledes sit 16px
below headings; larger space above each section separates topics. Preserve
browser zoom, visible focus, and the established light-on-dark contrast.

## Layout

Single-column flow of full-width sections: header, hero, outcomes, travel styles, packages, process, reviews slot, custom enquiry, flights/hotels, FAQs, footer. The hero photo row clamps to 500–660px on desktop and 570–620px on small screens. Packages, process, enquiry and FAQs collapse to one column on mobile.

Preserve the established section order, travel-style mosaic, destination browsing in the hero, and discovery form overlap. The enquiry remains two-column with a sticky introduction and grouped steps; FAQs retain the services row and two-column disclosures. Keep the package information panel within its 540px desktop measure. Use a spacious vertical rhythm while keeping controls and disclosures easy to scan.

## Elevation & Depth

Keep the current flat baseline. Use image scale, whitespace, and selective surface contrast to establish depth. Borders belong on controls and meaningful divisions, not every content wrapper. Use one restrained shadow where the overlapping discovery form needs separation from the hero. Avoid decorative glows and repeated floating cards.

## Shapes

Controls use gently rounded edges (6px); the enquiry form shell uses 8px. The destination pin and landmark photo circle remain circular (50%). Keep ordinary buttons, image cards, and containers out of pill shapes.

## Components

- **Primary enquiry button:** coral fill, ink label, 600 weight. Use the shared 6px control radius. Use the documented coral-hover state.
- **Secondary action:** ink or slate text, paper or transparent background, and an underline or control boundary appropriate to its role. Do not give every link the primary button treatment.
- **Inputs and selects:** paper background, ink values, muted-ink placeholders, and a 1px line boundary. A mist surface is not a substitute for a visible control boundary.
- **Selected filters:** slate fill and paper text, with the existing pressed-state semantics. Unselected filters remain quiet and clearly interactive.
- **Focus:** 3px slate outline with offset on light surfaces. On a dark surface, use a paper outline or contrasting offset so focus remains visible. Verify the actual adjacent colors.
- **Travel-style mosaic and package photography:** preserve the accepted layouts. Let the photographs distinguish the trips; avoid identical tinted card shells and decorative accent labels. Preserve enquiry links and clearly label sample content.
- **Footer:** a deliberate slate or ink anchor is available within the palette. Keep headings, contact details, policy information, and links readable; do not invent missing business details.
- **Validation:** coral is a brand action color, not the universal error or success signal. Use explicit error text and accessible state cues; resolve semantic colors when implementing those states.
- **Hero pin and motion:** preserve the planned destination/landmark relationship and form overlap. Retain the existing photo transition, pin bounce, landmark reveal, pause behavior, and reduced-motion treatment documented in `docs/wireframes/home.md`.

## Do's and Don'ts

- Do keep one primary action per view: **Plan my trip**.
- Do keep dates and destination optional paths for undecided travelers.
- Do use the chosen slate-and-coral palette consistently across the website and shared controls.
- Do keep the overall layout while refining typography, photographic crops, spacing, and hierarchy.
- Do label sample trips and prices as illustrative. Reviews remain non-testimonial layout placeholders until verified feedback and publication permission exist.
- Don't scatter coral accents, repeat generic card treatments, or use a blanket cream overlay to unify unrelated photographs.
- Don't add payment, instant-booking or availability cues.
