import { LitElement, html, css } from '/static/js/lib/lit-all.min.js';

class OkWindow extends LitElement {
	static properties = {
		title: { type: String },
		clicked: {},
	};

	static styles = getStyles();

	constructor() {
		super();
		this.clicked = '';
	}

	_handleClick(event) {
		const actions = ['maximize', 'minimize'];
		const id = event.target.id;

		if (!actions.includes(id)) {
			return;
		}

		const className = this.className.split(' ');

		if (className.includes(id)) {
			this.className = className.filter((n) => n !== id).join(' ');
		} else {
			className.push(id);
			this.className = className.join(' ');
		}
	}

	render() {
		return html`
			<div class="inner" title="">
				<aside class="title" title="" @click="${this._handleClick}">
					<div class="inner">
						<div class="button_group">
							<a class="button" title="Close and go home" href="/">
								<img alt="Close" src="/static/icons/x.svg" />
							</a>
							<button
								class="button"
								id="minimize"
								title="Hide this window"
								aria-hidden
							>
								<img inert src="/static/icons/minimize.svg" />
							</button>
						</div>
						<span>${this.title}</span>
						<div class="button_group">
							<button
								class="button"
								id="maximize"
								title="Maximize"
								aria-hidden
							>
								<img inert src="/static/icons/maximize.svg" />
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
			background-color: var(--surface);
			border: 1rem solid var(--surface-shadow);
			box-shadow: 2rem 2rem var(--surface-shadow);
			color: var(--text);
			display: block;
			height: calc(90% - 24px);
			width: 80vw;
			max-width: 64vw;
			position: absolute;
			top: 16rem;
			right: 13%;
			box-sizing: border-box;
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
			box-shadow: inset 1rem 1rem var(--surface-glow);
			min-height: 80rem;
			height: 100%;
		}

		.title {
			padding: 2rem;
			padding-right: 1rem;
			font-family: 'Sysfont', sans-serif;
		}

		.title > .inner {
			align-items: center;
			background-color: var(--title);
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			min-height: 16rem;
			padding: 2rem;
		}

		.title > .inner span {
			font-size: 12rem;
			color: var(--text);
		}

		.content {
			padding: 2rem;
		}

		.content > .inner {
			padding: 2rem;
			font-size: 9rem;
		}

		.button_group {
			display: flex;
			flex-direction: row;
			gap: 2rem;
		}

		.button {
			align-items: center;
			background-color: var(--surface);
			border: none;
			box-shadow: inset 1rem 1rem var(--surface-glow);
			box-sizing: border-box;
			cursor: pointer;
			display: flex;
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
			background-color: var(--surface-shadow);
			box-shadow: inset -1rem -1rem var(--surface-glow);
		}

		:host(.maximize) .button#maximize img {
			opacity: 1;
		}
	`;
}
