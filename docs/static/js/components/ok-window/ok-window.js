import { LitElement, html, css, classMap } from '/static/js/lib/lit-all.min.js';

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
		this.maximized = true;
	}

	static styles = getStyles();

	render() {
		return html`

<article class=${classMap({ window: true, maximized: this.maximized })}>
	<div class="inner">
		<aside class="title" aria-hidden="true">
			<div class="inner">
				<div class="button_group">
					<a class="button" href="/">
						<img alt="Close" src="/static/icons/x.svg">
					</a>
					<button class="button">
						<img alt="Hide" src="/static/icons/-.svg">
					</button>
				</div>
				<span>${this.title}</span>
				<div class="button_group">
					<button class="button">
						<img alt="Night mode On" src="/static/icons/moon.svg">
					</button>
				</div>
			</div>
		</aside>
		<section class="content">
			<div class="inner">
				<slot></slot>
			</div>
		</section>
	<div>
</article>
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
			height: 90%;
			width: 80vw;
			max-width: 640rem;
			position: absolute;
			top: 4%;
			right: 6%;
			box-sizing: border-box;
		}

		.window.maximized {
			position: relative;
			top: auto;
			right: auto;
			height: 100%;
			width: 100%;
			max-width: 100vw;
		}

		.window > .inner {
			box-shadow: inset 1rem 1rem #4d4d4d;
			min-height: 80rem;
			height: 100%;
		}

		.title {
			padding: 2rem;
			padding-right: 1rem;
			font-family: 'Deluxe', sans-serif;
		}

		.title > .inner {
			align-items: center;
			background-color: #1a1a1a;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			min-height: 16rem;
			padding: 2rem;
		}

		.title > .inner span {
			font-size: 8rem;
		}

		.content {
			padding: 2rem;
		}

		.content > .inner {
			padding: 2rem;
			font-size: 9rem;
		}

		.button {
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

		.button img {
			display: block;
			height: 16rem;
			opacity: 0.3;
		}

		.button:hover img {
			opacity: 1;
		}

		.button:active {
			background-color: #222;
			box-shadow: inset -1rem -1rem #4d4d4d;
		}

		.button_group {
			display: flex;
			flex-direction: row;
			gap: 2rem;
		}
	`;
}
