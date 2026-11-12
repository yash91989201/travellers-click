import assert from "node:assert/strict";
import test from "node:test";
import { JSDOM } from "jsdom";
import { createElement } from "react";
import { HeroSection } from "../src/components/home/hero-section.tsx";

async function mountHero({ reduced = false } = {}) {
	const dom = new JSDOM("<!doctype html><html><body></body></html>", {
		url: "http://localhost/",
		pretendToBeVisual: true,
	});
	const { window } = dom;
	const { document } = window;
	const saved = {
		window: globalThis.window,
		document: globalThis.document,
		IntersectionObserver: globalThis.IntersectionObserver,
	};
	let mediaChange;
	let intersect;
	let disconnected = false;
	const media = {
		matches: reduced,
		addEventListener: (_name, listener) => {
			mediaChange = listener;
		},
		removeEventListener: (_name, listener) => {
			if (mediaChange === listener) mediaChange = undefined;
		},
	};
	window.matchMedia = () => media;
	window.AnimationEvent = window.Event;
	class MockIntersectionObserver {
		constructor(callback) {
			intersect = callback;
		}
		observe() {}
		disconnect() {
			disconnected = true;
		}
	}
	Object.assign(globalThis, {
		window,
		document,
		IntersectionObserver: MockIntersectionObserver,
		IS_REACT_ACT_ENVIRONMENT: true,
	});
	const { act, cleanup, fireEvent, render } = await import(
		"@testing-library/react/pure"
	);
	const view = render(createElement(HeroSection, { onExplore() {} }));
	return {
		act,
		cleanup,
		dispatchAnimationEnd(element, name) {
			const event = new window.Event("animationend", { bubbles: true });
			Object.defineProperty(event, "animationName", { value: name });
			act(() => fireEvent(element, event));
		},
		document,
		fireEvent,
		get disconnected() {
			return disconnected;
		},
		get mediaChange() {
			return mediaChange;
		},
		get intersect() {
			return intersect;
		},
		media,
		restore() {
			view.unmount();
			cleanup();
			Object.assign(globalThis, saved);
			dom.window.close();
		},
	};
}

test("hero advances from animation end and wraps through matching photo and pin", async () => {
	const hero = await mountHero();
	try {
		const section = hero.document.querySelector("#destinations");
		const activeName = () =>
			hero.document.querySelector("[data-hero-destination]").textContent.trim();
		const animatedPhoto = () =>
			hero.document.querySelector('#destinations img[class*="hero-zoom"]');
		const destinations = ["Kerala", "Rajasthan", "Bali", "Vietnam"];
		const assertDestination = (name) => {
			const slug = name.toLowerCase();
			assert.equal(activeName(), `${name}?`);
			assert.equal(
				hero.document
					.querySelector("#destinations img[alt]:not([aria-hidden])")
					.getAttribute("src"),
				`/images/hero/${slug}-1920.webp`
			);
			assert.ok(
				hero.document
					.querySelector("#destinations img[alt]:not([aria-hidden])")
					.getAttribute("srcset")
					.includes(`/images/hero/${slug}-960.webp`)
			);
			assert.equal(
				hero.document
					.querySelector(`#destinations img[src$="${slug}-pin.webp"]`)
					?.getAttribute("src"),
				`/images/hero/${slug}-pin.webp`
			);
		};
		assert.equal(section.dataset.running, "true");
		const heading = hero.document.querySelector("h1");
		assert.match(heading.textContent, /What’s your next/);
		assert.match(heading.textContent, /destination\?/);
		assert.ok(heading.querySelector("br"));
		assert.equal(
			hero.document.querySelector('[aria-label="Sample destinations"]'),
			null
		);
		assertDestination(destinations[0]);
		for (const expected of destinations.slice(1).concat(destinations[0])) {
			hero.dispatchAnimationEnd(animatedPhoto(), "hero-zoom");
			assertDestination(expected);
		}
		hero.dispatchAnimationEnd(animatedPhoto(), "hero-sweep");
		assertDestination(destinations[0]);
	} finally {
		hero.restore();
	}
});

test("icon-only pause control freezes and resumes the current scene without static mode", async () => {
	const hero = await mountHero();
	try {
		const section = hero.document.querySelector("#destinations");
		const activeName = () =>
			hero.document.querySelector("[data-hero-destination]").textContent.trim();
		const photo = () =>
			hero.document.querySelector("#destinations img[alt]:not([aria-hidden])");
		const pause = () =>
			hero.document.querySelector(
				'button[aria-label="Pause animation"], button[aria-label="Resume animation"]'
			);
		assert.equal(
			hero.document.querySelector('[aria-label="Sample destinations"]'),
			null
		);
		assert.equal(pause().getAttribute("aria-pressed"), "false");
		assert.equal(pause().textContent.trim(), "");
		assert.doesNotMatch(
			section.textContent,
			/slideshow|pause animation|resume animation/i
		);
		hero.fireEvent.click(pause());
		assert.equal(pause().getAttribute("aria-label"), "Resume animation");
		assert.equal(pause().getAttribute("aria-pressed"), "true");
		assert.equal(section.dataset.running, "false");
		assert.equal(section.dataset.static, "false");
		hero.dispatchAnimationEnd(
			hero.document.querySelector('#destinations img[class*="hero-zoom"]'),
			"hero-zoom"
		);
		assert.equal(activeName(), "Kerala?");
		assert.equal(photo().getAttribute("src"), "/images/hero/kerala-1920.webp");
		hero.fireEvent.click(pause());
		assert.equal(pause().getAttribute("aria-label"), "Pause animation");
		assert.equal(pause().getAttribute("aria-pressed"), "false");
		assert.equal(section.dataset.running, "true");
		assert.equal(section.dataset.static, "false");
	} finally {
		hero.restore();
	}
});

test("paused, hidden, offscreen, and reduced-motion states block animation end", async () => {
	const hero = await mountHero();
	try {
		const section = hero.document.querySelector("#destinations");
		const activeName = () =>
			hero.document.querySelector("[data-hero-destination]").textContent.trim();
		const image = () =>
			hero.document.querySelector('#destinations img[class*="hero-zoom"]');
		const pause = () =>
			hero.document.querySelector(
				'button[aria-label="Pause animation"], button[aria-label="Resume animation"]'
			);
		hero.fireEvent.click(pause());
		hero.dispatchAnimationEnd(image(), "hero-zoom");
		assert.equal(activeName(), "Kerala?");
		hero.fireEvent.click(pause());
		hero.act(() => hero.intersect([{ isIntersecting: false }]));
		assert.equal(section.dataset.running, "false");
		hero.dispatchAnimationEnd(image(), "hero-zoom");
		assert.equal(activeName(), "Kerala?");
		hero.act(() => hero.intersect([{ isIntersecting: true }]));
		Object.defineProperty(hero.document, "hidden", {
			configurable: true,
			value: true,
		});
		hero.act(() =>
			hero.document.dispatchEvent(
				new hero.document.defaultView.Event("visibilitychange")
			)
		);
		assert.equal(section.dataset.running, "false");
		Object.defineProperty(hero.document, "hidden", {
			configurable: true,
			value: false,
		});
		hero.act(() =>
			hero.document.dispatchEvent(
				new hero.document.defaultView.Event("visibilitychange")
			)
		);
		hero.media.matches = true;
		hero.act(() => hero.mediaChange());
		assert.equal(section.dataset.running, "false");
		assert.equal(section.dataset.static, "true");
		assert.equal(
			hero.document.querySelector('button[aria-label="Motion disabled"]')
				.disabled,
			true
		);
		hero.dispatchAnimationEnd(image(), "hero-zoom");
		assert.equal(activeName(), "Kerala?");
	} finally {
		hero.restore();
	}
});

test("hero visibility and motion listeners are cleaned up on unmount", async () => {
	const hero = await mountHero();
	assert.equal(typeof hero.mediaChange, "function");
	hero.restore();
	assert.equal(hero.disconnected, true);
	assert.equal(hero.mediaChange, undefined);
});
