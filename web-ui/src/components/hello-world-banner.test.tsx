import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { HelloWorldBanner } from "@/components/hello-world-banner";

describe("HelloWorldBanner", () => {
	it("renders the hello world message", () => {
		const markup = renderToStaticMarkup(<HelloWorldBanner />);

		expect(markup).toContain("Hello world");
		expect(markup).toContain('aria-label="Hello world banner"');
	});
});