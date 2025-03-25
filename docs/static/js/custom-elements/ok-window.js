export class OkWindowElement extends HTMLElement {
	constructor() {
		super();
	}

	static get observedAttributes() {
		return ["title"];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		console.log(name);
		if (oldValue !== newValue) {
			this.render();
		}
	}

	connectedCallback() {
		this.render();
	}

	render() {
		const title = this.getAttribute("title") || "Default Title";
		const childNodes = Array.from(this.childNodes);

		this.innerHTML = `

		<main class="window">
			<div class="window__inner">
				<header class="window_title">
					<div class="window_title__inner">
						<div class="window_button__group">
							<a
								class="window_button"
								href="/">
								<img alt="Close" src="/static/icons/x.svg">
							</a>
							<button
								class="window_button"
								id="window_button--hide">
								<img alt="Hide" src="/static/icons/-.svg">
							</button>
						</div>
						<span>
							${title}
						</span>
						<div class="window_button__group">
							<button
								class="window_button"
								id="window_button--theme-switcher">
								<img alt="Night mode On" src="/static/icons/moon.svg">
							</button>
						</div>
					</div>
				</header>
				<section class="window_content">
					<div class="window_content__inner">
					</div>
				</section>
			</div>
		</main>
		`;

	}
}

customElements.define("ok-window", OkWindowElement);

