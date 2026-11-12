import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import Header from "../components/header";
import { BenefitsSection } from "../components/home/benefits-section";
import { HelpFaqSection } from "../components/home/help-faq-section";
import { HeroSection } from "../components/home/hero-section";
import { PackagesSection } from "../components/home/packages-section";
import { PlanEnquirySection } from "../components/home/plan-enquiry-section";
import { ProcessSection } from "../components/home/process-section";
import { PrototypeBar } from "../components/home/prototype-bar";
import { ReviewsSection } from "../components/home/reviews-section";
import { SiteFooter } from "../components/home/site-footer";
import { TripStylesSection } from "../components/home/trip-styles-section";
import type { DiscoverySelection, Region } from "../components/home/types";
import homeCss from "../styles/home-motion.css?url";

export const Route = createFileRoute("/")({
	head: () => ({
		meta: [{ title: "Travellers Click — Home" }],
		links: [{ rel: "stylesheet", href: homeCss }],
	}),
	component: HomeComponent,
});

export function HomeComponent() {
	const [region, setRegion] = useState<Region>("all");
	const [preferences, setPreferences] = useState("");
	const [destination, setDestination] = useState("");
	const [selectedTrip, setSelectedTrip] = useState("");

	function explorePackages({
		region: nextRegion,
		preferences: next,
	}: DiscoverySelection) {
		setRegion(nextRegion);
		setPreferences(next);
	}

	function filterPackages(nextRegion: Region) {
		setRegion(nextRegion);
		setPreferences("");
	}

	function chooseDestination(place: string) {
		setDestination(place);
		setSelectedTrip(
			`Trip idea: ${place}. Change the destination below at any time.`
		);
	}

	function selectStyle(style: string) {
		setSelectedTrip(
			`Travel style: ${style}. Share your destination below, or ask for ideas.`
		);
	}

	return (
		<div
			className="overflow-x-clip bg-background font-sans text-[16px] text-foreground leading-[1.6] [color-scheme:light] [&_p]:text-pretty"
			data-home
		>
			<PrototypeBar />
			<Header account={false} />
			<main id="main">
				<HeroSection onExplore={explorePackages} />
				<BenefitsSection />
				<TripStylesSection onSelectStyle={selectStyle} />
				<PackagesSection
					onChooseDestination={chooseDestination}
					onFilter={filterPackages}
					preferences={preferences}
					region={region}
				/>
				<ProcessSection />
				<ReviewsSection />
				<PlanEnquirySection
					destination={destination}
					onDestinationChange={setDestination}
					selectedTrip={selectedTrip}
				/>
				<HelpFaqSection />
			</main>
			<SiteFooter />
		</div>
	);
}
