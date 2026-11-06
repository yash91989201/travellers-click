# Travellers Click

<!-- impeccable:product-schema 1 -->

## Platform

web

## Scope

This root record supplies shared product context for the customer website in
`apps/web` and its shared components in `packages/ui`. The user chose root-level
context so both use the same product facts. `apps/docs` is the scaffold's
documentation app; its sample content does not define the travel business.

The six PDFs in `docs/project-brief/` define the requested product. Their example
copy, placeholders, and suggested claims do not prove current business operations.

## Users

The briefs address people planning domestic and international travel: solo
travelers, couples, families, friends, groups, and corporate/MICE organizers.
They need to explore options, share dates and budgets, and get help with an itinerary.

The briefs use INR, Indian phone prefixes, and IST. These are planning signals;
the agency's base, primary market, supported languages, and currencies remain open.

## Product Purpose

Help travelers explore destinations and holiday packages, then request a trip plan
or quote from the agency. Support custom trips, flight and hotel enquiries, and
travel assistance.

The main outcome is a useful enquiry that lets a travel adviser prepare a plan.
The briefs describe consultation and revisions before booking. They do not establish
an implemented booking engine, live availability, or online checkout.

## Positioning

The requested service plans trips around each traveler's budget, pace, dates,
interests, and preferred stays. It includes domestic and international holidays,
corporate/group travel, and help with transport, visas, and insurance.

No exclusive advantage, accreditation, or market ranking has supporting evidence.

## Operating Context

- Explore destinations, packages, and travel categories.
- Choose a package or share a custom trip request.
- Consult a travel adviser, review an itinerary and itemized quote, and request changes.
- Finalize arrangements before booking and payment under confirmed agency and supplier terms.
- Contact the agency through enquiry forms, phone, WhatsApp, and email once real details exist.

The brief proposes booking support and a separate emergency contact for travelers
already on a trip. Confirm staffing and service hours before publishing promises.

## Capabilities and Constraints

### Requested website scope

- Dedicated briefs: Home, About Us, Contact Us, Customize Your Trip, Privacy Policy,
  and Terms and Conditions.
- The Home brief also names Destinations, Holiday Packages, Flights/Hotels,
  Cancellation and Refund Policy, and Disclaimer. Their separate content remains open.
- Package cards need an itinerary destination. Decide whether that opens a site page,
  a document, or another supported route before adding the link.
- Home includes FAQs. Contact has its own FAQ content. A separate FAQ route is not required.
- Blog content is optional. Language and currency selectors are conditional on the audience.

### Discovery and enquiry details

- Package discovery uses destination, departure date, duration, and trip type.
- Package summaries need real photos, duration, starting price, and clear inclusions.
  Present these only when the agency supplies current package data.
- The compact custom enquiry captures destination, approximate dates, group size,
  budget range, and contact number.
- The full custom request adds departure city/airport, fixed or flexible dates,
  adult/child/infant counts, trip interests, accommodation preference, per-person
  budget excluding flights, special requests, name, phone, and email.
- Contact enquiries include name, email, phone, trip type, destination, dates/duration,
  traveler counts, and budget/preferences. The brief marks name, email, and phone required.
- The custom brief offers help choosing a destination and allows flexible dates.
  Preserve these paths for travelers who have not settled their plans.
- Budget bands and age bands in the custom brief need consistent definitions.
  The child and infant bands overlap at age two; resolve that before building counters.

### Existing implementation

The repository contains a Better-T-Stack starter: React, TanStack Start/Router,
Tailwind CSS, shared shadcn/ui components, oRPC, Better Auth, Drizzle/PostgreSQL,
and Bun/Nx tooling. The current home route is a starter API status screen.
Login and dashboard routes are scaffold features, not confirmed customer requirements.

Reuse `packages/ui` for shared controls and styles. Do not treat starter tokens
or sample documentation as approved travel branding.

### Open decisions and release facts

- Confirm the public brand spelling, legal entity, registered address, website URL,
  phone/WhatsApp numbers, email addresses, social accounts, and operating hours.
- Confirm enquiry delivery, storage, staff access, response handling, and success/error behavior.
- Confirm whether flights/hotels use enquiries, supplier links, integrations, or direct booking.
- Confirm destinations, package inventory, prices, taxes, availability, and image usage rights.
- Confirm support coverage, response times, price guarantees, vetted suppliers, and any certifications.
  The briefs propose 24/7 support and a 2–4 working-hour response; these remain unverified claims.
- Confirm payment methods/providers, deposits, balance deadlines, cancellation charges,
  refund timing, governing law, and court jurisdiction. Example figures are not policy.
- Align legal text with actual data collection, providers, cookies, retention, and user-rights handling.
  The Privacy brief's references to identity documents and payment data do not authorize
  collecting them in initial trip enquiries.

## Brand Commitments

`travellers-click` is the repository name. The PDFs use agency-name placeholders;
final public spelling and a logo remain unconfirmed. Use clear, helpful language
about destinations, plans, inclusions, and costs. No binding palette, font, or
visual direction has been supplied in these briefs.

## Evidence on Hand

- `docs/project-brief/Travel Agency Home Page Layout Structure.pdf`: navigation,
  discovery, package summaries, enquiry flow, FAQs, and proposed trust content.
- `docs/project-brief/About Us.pdf`: service scope and proposed business positioning.
- `docs/project-brief/Customize Your Trip.pdf`: consultation workflow and full request fields.
- `docs/project-brief/Contact Us.pdf`: contact structure, enquiry fields, and proposed service hours.
- `docs/project-brief/Privacy Policy.pdf`: draft privacy topics with unresolved identity and date fields.
- `docs/project-brief/Terms and Conditions.pdf`: draft booking and supplier terms with example values.

These PDFs provide requirements and draft copy. They do not supply verified
reviews, ratings, client photos, accreditations, partner permissions, or live prices.
Do not invent these or publish example badges as proof.

## Product Principles

1. Help travelers share enough information for a useful plan, including when dates or destinations are uncertain.
2. Keep package inclusions, exclusions, budget basis, and the next enquiry step clear.
3. Support adviser-led planning and revisions without implying instant booking or confirmation.
4. Publish business claims and legal terms only after checking them against real operations.
5. Keep shared product facts at the root so website and component work use one source.
