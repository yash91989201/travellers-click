---
name: Travellers Click
description: Grayscale wireframe for an adviser-led travel enquiry site; hierarchy first, branding open.
colors:
  ink: "#282828"
  ink-strong: "#303030"
  ink-hover: "#505050"
  paper: "#ffffff"
  paper-soft: "#f5f5f5"
  paper-tint: "#e6e6e6"
  line: "#777777"
  line-soft: "#cccccc"
  placeholder: "#aaaaaa"
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
    backgroundColor: "{colors.ink-strong}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
  button-primary-hover:
    backgroundColor: "{colors.ink-hover}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
  button-secondary-hover:
    backgroundColor: "{colors.paper-tint}"
---

# Design System: Travellers Click

## Overview

**Creative North Star: "The Annotated Itinerary"**

The home page is a low-fidelity wireframe (see `docs/wireframes/home.md`). It is grayscale on purpose: system type, gray blocks standing in for photographs, dotted guide lines linking hero, discovery form and outcomes. It exists to judge hierarchy and flow, not brand. Final fonts, colors, photography and motion are open; the wireframe doc states it "does not establish a final design system".

Visitor mode is Persuade. The one action is **Plan my trip**; there is no booking or payment flow. Tone is clear, helpful, adviser-led (PRODUCT.md).

**Key Characteristics:**
- Grayscale, no accent color yet.
- Hero image with the horizontal discovery form straddling its lower edge at every width.
- Native disclosure for FAQs and mobile nav.
- Placeholder content is labeled illustrative; never invent reviews, prices or badges.

## Colors

Neutral ramp only; every gray is provisional.

### Neutral
- **Ink** (#282828): body text.
- **Ink Strong** (#303030): primary button fill; hover lifts to **Ink Hover** (#505050).
- **Paper** (#ffffff): page and control background.
- **Paper Soft / Tint** (#f5f5f5, #e6e6e6): panels, secondary hover.
- **Line** (#777777): control borders. **Line Soft** (#cccccc): dividers. **Placeholder** (#aaaaaa): image stand-ins.

### Named Rules
**The Open Palette Rule.** No accent exists. Adding color is a deliberate pass (see wireframe doc "color and photo pass"), not a drift.

## Typography

**Font:** Arial, sans-serif (system placeholder; final family open).

- **Body** (400, 1rem, 1.5): all copy.
- **Button** (600): primary actions.

Links are underlined with 4px offset; hover thickens to 2px.

## Layout

Single-column flow of full-width sections: header, hero, outcomes, travel styles, packages, process, reviews slot, custom enquiry, flights/hotels, FAQs, footer. Hero height 620px (570px on small screens). Packages, process, enquiry and FAQs collapse to one column on mobile.

## Elevation & Depth

Flat. Depth comes from 1px borders and gray tints; no shadows.

## Shapes

3px radius on buttons and inputs; 50% for the destination pin and its landmark photo circle.

## Components

- **Button primary:** dark fill, white text, 600 weight, 3px radius, 12px 16px padding.
- **Button secondary / inputs / selects:** white, 1px #777 border, same radius and padding; hover tints to #e6e6e6.
- **Focus:** 3px solid #444 outline on `:focus-visible`.

## Do's and Don'ts

- Do keep one primary action per view: **Plan my trip**.
- Do keep dates and destination optional paths for undecided travelers.
- Don't present sample trips, prices or reviews as real.
- Don't add payment, instant-booking or availability cues.
