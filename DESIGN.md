---
name: Travellers Click
description: Approved slate-and-coral palette for an adviser-led travel site; visual implementation pending.
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
  body:
    fontFamily: "Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  button:
    fontFamily: "Arial, sans-serif"
    fontWeight: 600
rounded:
  control: "3px"
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

On 2026-11-11, the user chose palette 6, **slate and coral**, after comparing it with teal and sand on homepage previews. They liked its refreshing character but found the preview too generic ("vibe coded"). The palette is approved; the preview's visual treatment is not.

This file merges that decision into the existing system. Its color tokens define the next implementation pass. Typography, shape, and spacing tokens retain the current wireframe defaults until that pass resolves them. The live home page remains a grayscale wireframe with placeholder photos; these docs do not claim the palette has shipped.

The intended expression is a carefully composed travel itinerary: clear information, memorable destination photography, confident type, and a restrained route-and-pin motif. The next pass should establish character through composition and image selection. Applying a uniform tint to the current wireframe is insufficient.

Visitor mode is Persuade. The one action is **Plan my trip**; there is no booking or payment flow. Tone is clear, helpful, adviser-led (PRODUCT.md).

**Key Characteristics:**
- Warm ivory and deep ink form the reading surface; slate gives structure and coral identifies the main action.
- Destination photography carries atmosphere without a heavy cream wash over every image.
- Distinct heading hierarchy and the accepted travel-style mosaic carry the composition.
- Hero image with the horizontal discovery form straddling its lower edge at every width.
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
- **Mist** (`mist`): a purposeful supporting surface, such as the enquiry area. Do not alternate ivory and mist mechanically down the page.
- **Muted Ink** (`muted-ink`): supporting copy on light surfaces; never low-opacity text over a photograph.
- **Line** (`line`): visible control boundaries. **Line Soft** (`line-soft`): nonessential dividers; it is too light to be the sole boundary of a control.

### Named Rules

**The Action Color Rule.** Coral has priority on the main enquiry action. Selected filters use slate; secondary links use ink or slate. A coral pin may act as the hero's signature, but avoid repeating coral across unrelated cards, badges, rules, and headings.

**The Photograph Rule.** Use intentional crops and keep destination colors believable. Place text in a quiet area or use a localized scrim with measured contrast. The comparison preview's full-image ivory wash is not an approved treatment.

Verified solid-color pairings: ink on canvas 10.59:1, ink on coral 5.62:1, ink on coral-hover 4.92:1, muted ink on canvas 5.66:1, muted ink on mist 5.12:1, and paper on slate 7.73:1. The control line is 3.92:1 against paper. These calculations do not validate text over photos or every rendered state.

## Typography

**Current font:** Arial, sans-serif is a wireframe placeholder, not approved brand typography. No final font family was chosen with the palette. Resolve the display and body relationship in the next design pass.

- **Body** (400, 1rem, 1.5): all copy.
- **Button** (600): primary actions.

Links are underlined with 4px offset; hover thickens to 2px.

For the next pass, give the hero a deliberate display treatment and use clear steps between section headings, card titles, and body text. Keep supporting sections quieter than the hero. Avoid repeating oversized bold headings across every section or relying on slate text alone to establish hierarchy.

## Layout

Single-column flow of full-width sections: header, hero, outcomes, travel styles, packages, process, reviews slot, custom enquiry, flights/hotels, FAQs, footer. Hero height 620px (570px on small screens). Packages, process, enquiry and FAQs collapse to one column on mobile.

These are current wireframe measurements, not a new layout approval. Preserve the accepted section order, travel-style mosaic, destination browsing in the hero, and the discovery form's overlap. Refine spacing, crop, alignment, and density within that structure. Keep the form legible against both image and page at every width.

## Elevation & Depth

Keep the current flat baseline. Use image scale, whitespace, and selective surface contrast to establish depth. Borders belong on controls and meaningful divisions, not every content wrapper. If the overlapping discovery form needs elevation in the next pass, use one restrained shadow and verify its separation from the hero. Avoid decorative glows and repeated floating cards.

## Shapes

Current wireframe defaults: 3px radius on buttons and inputs; 50% for the destination pin and its landmark photo circle. Preserve these until deliberately refined. Do not turn ordinary buttons, image cards, and containers into oversized pills merely because the palette is soft.

## Components

- **Primary enquiry button:** coral fill, ink label, 600 weight. Retain the current radius and padding until the next pass reviews control proportions. Use the documented coral-hover state.
- **Secondary action:** ink or slate text, paper or transparent background, and an underline or control boundary appropriate to its role. Do not give every link the primary button treatment.
- **Inputs and selects:** paper background, ink values, muted-ink placeholders, and a 1px line boundary. A mist surface is not a substitute for a visible control boundary.
- **Selected filters:** slate fill and paper text, with the existing pressed-state semantics. Unselected filters remain quiet and clearly interactive.
- **Focus:** 3px slate outline with offset on light surfaces. On a dark surface, use a paper outline or contrasting offset so focus remains visible. Verify the actual adjacent colors.
- **Travel-style mosaic and package photography:** preserve the accepted layouts. Let the photographs distinguish the trips; avoid identical tinted card shells and decorative accent labels. Preserve enquiry links and clearly label sample content.
- **Footer:** a deliberate slate or ink anchor is available within the palette. Keep headings, contact details, policy information, and links readable; do not invent missing business details.
- **Validation:** coral is a brand action color, not the universal error or success signal. Use explicit error text and accessible state cues; resolve semantic colors when implementing those states.
- **Hero pin and motion:** preserve the planned destination/landmark relationship and form overlap. The photo-based blur transition, 1–2 second pin bounce, landmark reveal, pause behavior, and reduced-motion treatment remain governed by `docs/wireframes/home.md`. The static palette previews do not approve motion.

## Do's and Don'ts

- Do keep one primary action per view: **Plan my trip**.
- Do keep dates and destination optional paths for undecided travelers.
- Do use the chosen slate-and-coral palette consistently across the website and shared controls.
- Do make the next pass feel authored through typography, photographic crops, spacing, and hierarchy.
- Do treat the comparison pages as color studies, not approved production designs or production assets.
- Don't recolor every wireframe block and call the visual design complete.
- Don't scatter coral accents, repeat generic card treatments, or use a blanket cream overlay to unify unrelated photographs.
- Don't present sample trips, prices or reviews as real.
- Don't add payment, instant-booking or availability cues.
