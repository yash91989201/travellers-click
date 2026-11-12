# Home page wireframe

## Scope

Clickable, low fidelity desktop and mobile prototype for the customer home page.
Run `bun dev` from the repository root, then open `http://localhost:3001/`.
The React page lives in `apps/web/src/routes/index.tsx`, with section components
in `apps/web/src/components/home`. Tailwind utilities carry the layout; only
keyframes, a native `<details>` desktop rule, and descendant selection colors
remain in `apps/web/src/styles/home-motion.css`. The page renders directly,
without a preview frame or separate static server.

The visitor mode is Persuade. Help travelers explore ideas and request a plan.
The main action is **Plan my trip**. There is no instant booking or payment flow.

## Layout and flow

1. Header: destination, package, custom trip, service, process, and contact links.
2. Hero: full-width image area, one headline, a destination marker, and dotted arrows leading to the horizontal discovery form.
3. Outcomes: a dotted connector introduces a ranked list covering budget, custom itineraries, and clear inclusions. The undecided traveler path sits beside this list.
4. Destination browsing now lives in the hero. The separate destination grid is removed.
5. Travel styles: accepted Impeccable Live image mosaic with six enquiry entry points.
6. Packages: three illustrative trips with domestic/international filters.
7. Process: share plans, refine the quote, confirm arrangements.
8. Reviews: an explicitly reserved content slot, pending real evidence.
9. Custom enquiry: destination, flexible dates, traveler count, budget basis, and sample phone number.
10. Flight/hotel assistance, FAQs, and contact/legal footer.

On mobile, navigation opens a full-screen panel. Destination controls sit
below the headline. Packages, process, enquiry, and FAQs become a single column.
The discovery form sits half inside the hero image and half outside, at every width.
The current implementation uses grayscale blocks and system type to review
hierarchy rather than branding. Slate and coral was approved on 2026-11-11;
see the palette decision below and root `DESIGN.md`. Final fonts, production
photos, and the detailed visual and motion implementation remain open.

## Prototype behavior

- Discovery scrolls to packages and filters by India or International.
- Date, duration, and trip type show as preferences; they do not filter sample inventory.
- Package links prefill the custom enquiry destination. The hero pin sets the discovery region.
- Four illustrative hero destinations rotate every nine seconds. Manual selection pauses rotation.
- Pause controls, reduced motion, offscreen detection, and tab visibility stop automatic motion.
- Travel style links show the selected preference beside the enquiry.
- FAQs use native disclosure controls; mobile navigation opens a full-screen panel.
- The enquiry uses browser validation, then shows a preview notice. Nothing is sent or saved.
- Legal and contact details remain text placeholders, not broken routes.

## Content and release limits

Source: root `PRODUCT.md` and the Home layout PDF in `docs/project-brief/`.
All trip names and durations are illustrative. Confirm catalogue, prices,
inclusions, brand name, business contacts, hours, reviews, and policies before release.
Do not publish the review section without permission and a real source.
The enquiry needs a delivery service and confirmed privacy terms before collecting data.
About and itinerary detail pages remain separate work. This prototype uses in-page
process and enquiry destinations instead of adding unfinished routes.
Optional blog, language, currency, and payment badges are omitted pending need and evidence.
This prototype replaces the starter home route. It does not establish a final design system.

## Approved palette direction — 2026-11-11

The user chose **palette 6: slate and coral** after comparing two color studies
on snapshots of this homepage. They found the palette refreshing, but described
the preview's execution as too generic ("vibe coded"). The palette is approved;
the static preview treatment is not a final design approval.

- Root `DESIGN.md` owns exact colors, roles, contrast pairings, and implementation
  guidance. `PRODUCT.md` records the durable brand decision.
- This pass updates documentation only. The application remains a grayscale
  wireframe until the next design pass.
- Preserve the accepted layout, travel-style mosaic, hero destination browsing,
  and discovery form overlap. Improve typography, image selection, crops,
  spacing, and hierarchy within that structure.
- Give coral priority on the main enquiry action. Use slate for structural
  emphasis and selected controls; use ivory, white, and ink for clear reading.
- Replace placeholder photography with confirmed assets. The comparison's sample
  photos, blanket ivory hero wash, and flat recoloring are not the final treatment.
- Final typography remains undecided. The current system type is a wireframe
  placeholder, not approved brand typography.
- Preserve the motion direction and corrections below. Revisit the supplied
  recording with real photographs before implementing the final transitions.


## Reminder for the color and photo pass

User requested this sequence on 2026-11-06. Revisit it when adding colors or real photos.

- Replace the hero placeholders with destination photographs for Kerala, Rajasthan,
  Bali, and Vietnam. Confirm the final destinations and image rights.
- Use a location pin with a circular photograph of a popular landmark in that destination.
  Sample subjects: Alleppey backwaters, Amer Fort, Ulun Danu temple, and Ha Long Bay.
- On initial page load, run the same horizontal streak transition used between scenes.
- Bring the destination image in, then slowly zoom it in.
- Let the pin bounce gently for 1–2 seconds, land, and then reveal the landmark photo in its circle.
- Before the next scene, zoom the image out. Sweep horizontal streaks across the hero,
  bring the next image in, and repeat the zoom, pin landing, and photo reveal.
- Keep the headline, dotted guide, and form steady. Preserve pause controls and a static
  reduced-motion option. Keep the enquiry form centered on the image’s lower edge.

The current wireframe previews the timing with gray panels and text in place of photos.
Review the streak coverage and image transitions again with real assets; gray panels
cannot prove photographic motion quality. These destinations remain sample catalogue content.


### Updated transition reference — 2026-11-06

The user rejected the current thin horizontal lines as too bland. Keep this
correction for the color and photo pass; do not treat the wireframe effect as approved.

- Reference recording: `/home/yash/Videos/screenrecording-2026-11-06_21-34-40.mp4`
  (14.85 seconds). Review it again before implementing the final transition.
- The supplied car/cyclist image establishes the desired horizontal motion blur:
  the image content stretches into streaks, with a fast, cinematic sense of movement.
  Do not approximate this with separate gray lines moving across a still image.
- The recording supplies image zoom/blur and scene-change timing. Sampled frames also
  show brief dark and bright transitions. These are reference observations, not an
  instruction to add flashing to the website.
- Build the transition from the outgoing and incoming photographs themselves:
  zoom out, move through strong directional blur, introduce the next photograph,
  then settle into its slow zoom in. Match the reference with real assets.
- Preserve the previously requested pin bounce, landing, and landmark-photo reveal.
- Remind the user of these references when starting the color and photo pass.

This update records direction only. It makes no animation changes to the wireframe.

## Accepted travel-style layout

The user chose the image mosaic through Impeccable Live: density 1.25 and a 40px
section heading. Travel styles appear before holiday packages. Honeymoon has the
large image slot; corporate/group travel has a full-width row. All six options
keep their links to the custom enquiry. Images remain low fidelity placeholders.

## Implemented hero photographs and motion — 2026-11-11

The hero now uses self-hosted destination photographs with responsive 960px and
1920px and 2880px WebP versions, 320px landmark crops, and small photo-derived horizontal
motion-blur assets. Attribution, original source pages, licenses, and modification
notes are published at `/images/hero/credits.html` and linked from the hero.
Bali pairs Tegallalang rice terraces with Ulun Danu Beratan temple; Rajasthan
pairs the fort exterior with its mirror-work interior. Kerala and Vietnam pair new Unsplash hero photographs with landmark crops from
the original Commons photographs. Hero encodings use quality 92 and Lanczos
resampling; 2880px variants serve high-density screens.

Each nine-second scene begins with a fast photographic blur/pan: most of the
travel happens in the first 360ms, then the image eases into place over the next
1.6 seconds. A slow zoom follows, before a quick outgoing sweep into the next
scene. The destination name reveals during the incoming image’s gentle settle. The pin stays hidden until the image settles at two seconds, bounces gently
for about 1.8 seconds, then reveals its landmark photograph. The pin and caption
fade away after the image starts zooming out. Headline, dotted guide,
and overlapping discovery form remain steady. The photograph's animation-end
event advances the scene, so pause, hidden-tab, and offscreen states freeze the
same timeline. An icon-only pause control freezes and resumes the sequence. The current
destination is revealed beneath “What’s your next destination?” after the incoming
photo settles; destination buttons and visible slideshow text have been removed.
Reduced motion keeps photographs, names, and pins static.

These destinations remain sample catalogue content; photography does not establish
live packages or availability.
