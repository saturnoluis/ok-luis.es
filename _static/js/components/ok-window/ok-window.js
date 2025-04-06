import { LitElement, html, css } from '/static/js/lib/lit-core.min.js';

class OkWindow extends LitElement {
	static properties = {
		title: { type: String },
		maximized: {
			type: Boolean,
			reflect: true,
		},
	};

	constructor() {
		super();
		this.maximized = false;
	}

	static styles = getStyles();

	render() {
		return html`

<main class=${this.maximized ? 'window maximized' : 'window'}>
	<div class="window__inner">
		<header class="title">
			<div class="title__inner">
				<div class="window_button__group">
					<a class="window_button" href="/">
						<img alt="Close" src="/static/icons/x.svg">
					</a>
					<button class="window_button" id="window_button--hide">
						<img alt="Hide" src="/static/icons/-.svg">
					</button>
				</div>
				<span>${this.title}</span>
				<div class="window_button__group">
					<button class="window_button" id="window_button--theme-switcher">
						<img alt="Night mode On" src="/static/icons/moon.svg">
					</button>
				</div>
			</div>
		</header>
		<section class="window_content">
			<div class="window_content__inner">
				<slot></slot>
			</div>
		</section>
	<div>
</main>
`;
	}
}

customElements.define('ok-window', OkWindow);

function getStyles() {
	return css`
		.window {
			background-color: var(--background);
			border: 1rem solid #1a1a1a;
			box-shadow: 2rem 2rem #1a1a1a;
			color: white;
			display: block;
			margin: 130px auto;
			width: 300rem;
		}

		.window__inner {
			box-shadow: inset 1rem 1rem #4d4d4d;
			min-height: 80rem;
			height: 100%;
		}

		.title {
			padding: 2rem;
			padding-right: 1rem;
			font-family: 'Deluxe', sans-serif;
		}

		.title__inner {
			align-items: center;
			background-color: #1a1a1a;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			min-height: 16rem;
			padding: 2rem;
		}

		.title__inner span {
			font-size: 8rem;
		}

		.window_content {
			padding: 2rem;
		}

		.window_content__inner {
			padding: 2rem;
			font-size: 9rem;
		}

		.window_button {
			align-items: center;
			background-color: #333;
			border: none;
			box-shadow: inset 1rem 1rem #4d4d4d;
			box-sizing: border-box;
			color: #fff;
			cursor: pointer;
			display: flex;
			font-family: 'Deluxe', sans-serif;
			height: 16rem;
			justify-content: center;
			outline: none;
			text-decoration: none;
			width: 16rem;
		}

		.window_button img {
			display: block;
			height: 16rem;
			opacity: 0.3;
		}

		.window_button:hover img {
			opacity: 1;
		}

		.window_button:active {
			background-color: #222;
			box-shadow: inset -1rem -1rem #4d4d4d;
		}

		.window_button__group {
			display: flex;
			flex-direction: row;
			gap: 2rem;
		}
	`;
}
