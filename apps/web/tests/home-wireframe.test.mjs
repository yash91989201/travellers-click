import assert from "node:assert/strict";
import test from "node:test";
import { JSDOM } from "jsdom";
import { createElement } from "react";
import { HomeComponent } from "../src/routes/index.tsx";

test("package discovery, destination prefill, and enquiry preview work without network requests", async () => {
	const dom = new JSDOM("<!doctype html><html><body></body></html>", {
		url: "http://localhost/",
		pretendToBeVisual: true,
	});
	const { window } = dom;
	const { document } = window;
	const saved = {
		window: globalThis.window,
		document: globalThis.document,
		FormData: globalThis.FormData,
	};
	Object.assign(globalThis, {
		window,
		document,
		FormData: window.FormData,
		IS_REACT_ACT_ENVIRONMENT: true,
	});
	let networkCalls = 0;
	window.fetch = () => {
		networkCalls += 1;
		throw new Error("Prototype must not send enquiries");
	};
	window.HTMLElement.prototype.scrollIntoView = () => {};
	window.matchMedia = () => ({
		matches: false,
		addEventListener: () => {},
		removeEventListener: () => {},
	});
	const { render, fireEvent, cleanup } = await import(
		"@testing-library/react/pure"
	);
	render(createElement(HomeComponent));

	const hero = document.querySelector("#destinations");
	assert.equal(document.querySelectorAll("#destinations").length, 1);
	assert.equal(document.querySelector(".destinations"), null);
	fireEvent.click(
		document.querySelector(
			'[aria-label="Sample destinations"] button:nth-child(3)',
		),
	);
	assert.equal(hero.dataset.running, "false");
	assert.match(
		document.querySelector('[title*="Ulun Danu"]').title,
		/Ulun Danu/,
	);
	fireEvent.click(
		document.querySelector('[aria-label^="Start planning a trip to"]'),
	);
	assert.equal(
		document.querySelector('#discovery [name="destination"]').value,
		"International",
	);
	const pause = document.querySelector(
		'[aria-label="Sample destinations"] button:last-child',
	);
	fireEvent.click(pause);
	assert.equal(hero.dataset.running, "true");
	fireEvent.click(pause);
	assert.equal(hero.dataset.running, "false");

	fireEvent.click(
		document.querySelector(
			'[aria-label="Filter sample packages"] button:nth-child(3)',
		),
	);
	assert.equal(
		document.querySelectorAll("[data-region]:not([hidden])").length,
		1,
	);
	assert.match(
		document.querySelector("#package-status").textContent,
		/1 sample trip idea/,
	);
	fireEvent.click(
		document.querySelector(
			'[aria-label="Filter sample packages"] button:first-child',
		),
	);
	assert.equal(
		document.querySelectorAll("[data-region]:not([hidden])").length,
		3,
	);

	document.querySelector('[name="destination"]').value = "India";
	document.querySelector('[name="type"]').value = "Family";
	fireEvent.submit(document.querySelector("#discovery"));
	assert.equal(
		document.querySelectorAll("[data-region]:not([hidden])").length,
		2,
	);
	assert.match(document.querySelector("#package-status").textContent, /Family/);
	assert.match(
		document.querySelector("#package-status").textContent,
		/need a live catalogue/,
	);

	fireEvent.click(document.querySelector('[data-destination="Bali"]'));
	assert.equal(document.querySelector("#destination").value, "Bali");
	fireEvent.click(document.querySelector('[data-style="Family holidays"]'));
	assert.match(
		document.querySelector("#selected-trip").textContent,
		/Family holidays/,
	);

	const enquiry = document.querySelector("#enquiry");
	assert.equal(enquiry.checkValidity(), false);
	document.querySelector('[name="travelers"]').value = "2";
	document.querySelector('[name="phone"]').value = "0000000000";
	assert.equal(enquiry.checkValidity(), true);
	fireEvent.submit(enquiry);
	assert.match(
		document.querySelector("#enquiry-status").textContent,
		/sent and saved nothing/,
	);
	assert.equal(networkCalls, 0);
	assert.equal(window.localStorage.length, 0);

	for (const anchor of document.querySelectorAll('a[href^="#"]')) {
		assert.ok(
			document.getElementById(anchor.hash.slice(1)),
			`Missing anchor ${anchor.hash}`,
		);
	}
	assert.equal(document.querySelector("iframe"), null);
	cleanup();
	Object.assign(globalThis, saved);
	dom.window.close();
});
