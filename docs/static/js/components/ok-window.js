import { LitElement, html, css } from '/static/js/dependencies/lit-all.min.js';
import { toggleClassName } from '/static/js/utils.js';

class OkWindow extends LitElement {
	static properties = {
		title: { type: String },
	};

	static styles = getStyles();

	constructor() {
		super();
	}

	_handleClick(event) {
		const actions = ['maximize', 'minimize'];
		const actionId = event.target.id;

		if (actions.includes(actionId)) {
			toggleClassName(this, actionId);
		}
	}

	render() {
		return html`
			<div class="inner" title="">
				<aside class="title" @click="${this._handleClick}">
					<div class="inner">
						<div class="button_group">
							<a class="button" title="Close" href="/">
								<img alt="Close" src="/static/img/svg/x.svg" />
							</a>
							<button
								class="button"
								id="minimize"
								title="Hide"
							>
								<img inert src="/static/img/svg/minimize.svg" />
							</button>
						</div>
						<span>${this.title}</span>
						<div class="button_group">
							<button
								class="button"
								id="maximize"
								title="Maximize"
							>
								<img inert src="/static/img/svg/maximize.svg" />
							</button>
						</div>
					</div>
				</aside>
				<section class="content">
					<div class="inner">
						<slot></slot>
					</div>
				</section>
				<div></div>
			</div>
		`;
	}
}

customElements.define('ok-window', OkWindow);

function getStyles() {
	return css`
		:host {
			position: absolute;
			top: 16rem;
			right: 13%;

			display: block;

			height: calc(90% - 24px);
			width: 80vw;
			max-width: 64vw;
			box-sizing: border-box;

			background-color: var(--surface);
			border: 1rem solid var(--border);
			box-shadow: 2rem 2rem var(--surface-shadow-darker);

			color: var(--text);
		}

		:host(.maximize) {
			position: relative;
			top: auto;
			right: auto;

			height: 100%;
			width: 100%;
			max-width: 100vw;
		}

		:host(.minimize) {
			display: none;
		}

		:host > .inner {
			height: 100%;
			min-height: 80rem;

			box-shadow: inset 1rem 1rem var(--surface-glow);
		}

		.title {
			padding: 2rem;
			padding-right: 1rem;

			font-family: 'Sysfont', sans-serif;
		}

		.title > .inner {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;

			min-height: 16rem;
			padding: 2rem;

			background: var(--title);
			background: linear-gradient(
				90deg,
				var(--title) 0%,
				var(--title-darker) 100%
			);
		}

		.title > .inner span {
			font-size: 12rem;
			color: var(--title-text);
		}

		.content {
			padding: 0 2rem;
		}

		.content > .inner {
			padding: 2rem;

			font-size: 9rem;
			line-height: 1.2em;
		}

		.button_group {
			display: flex;
			flex-direction: row;
			gap: 2rem;
		}

		.button {
			display: flex;
			align-items: center;
			justify-content: center;

			height: 16rem;
			width: 16rem;

			border: none;
			outline: none;
			background-color: var(--surface);
			box-shadow: inset 1rem 1rem var(--surface-glow);
			box-sizing: border-box;
			cursor: pointer;
			text-decoration: none;
		}

		.button img {
			display: block;
			height: 16rem;

			opacity: 0.7;
			filter: var(--button-filter);
		}

		.button:hover img {
			opacity: 1;
		}

		.button:active {
			background-color: var(--surface-shadow);
			box-shadow: inset -1rem -1rem var(--surface-glow);
		}

		:host(.maximize) .button#maximize img {
			opacity: 1;
		}
	`;
}
