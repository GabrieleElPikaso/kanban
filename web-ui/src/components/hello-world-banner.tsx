import type { ReactElement } from "react";

export function HelloWorldBanner(): ReactElement {
	return (
		<section className="kb-status-banner kb-hello-world-banner" aria-label="Hello world banner" data-testid="hello-world-banner">
			<span aria-hidden="true">👋</span>
			<strong>Hello world</strong>
		</section>
	);
}