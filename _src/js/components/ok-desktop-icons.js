import { LitElement, html, css } from '/static/js/dependencies/lit-all.min.js';
import { toggleClassName } from '/static/js/utils.js';

class OkDesktopIcons extends LitElement {
	static styles = getStyles();

	constructor() {
		super();
	}

	render() {
		return html`
		<div class="inner">
			<a href="/desktop" class="desktop-icon" title="¿Quién soy?">
				<img src="/static/img/icon-about-me.png" alt="¿Quién soy?" />
				<span>¿Quién soy?</span>
			</a>
			<a href="/articles" class="desktop-icon" title="Artículos">
				<img src="/static/img/icon-articles.png" alt="Artículos" />
				<span>Artículos</span>
			</a>
			<a href="/my-links" class="desktop-icon" title="Enlaces">
				<img src="/static/img/icon-my-links.png" alt="Enlaces" />
				<span>Enlaces</span>
			</a>
		</div>
		`;
	}
}

customElements.define('ok-desktop-icons', OkDesktopIcons);

function getStyles() {
	return css`
		:host {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1;
			height: 100%;
			width: 100%;
		}

		.inner {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			gap: 16rem;
			padding: 8rem 2rem;
		}

		.desktop-icon {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 64rem;
			text-decoration: none;
		}

		.desktop-icon img {
			width: 32rem;
			height: 32rem;
			margin-bottom: 1rem;
		}

		.desktop-icon span {
			font-family: 'Sysfont', sans-serif;
			font-size: 9rem;
			color: var(--text-invert);
			text-shadow: -1rem 1rem 0 var(--surface-shadow-darker);
			text-align: center;
		}
	`;
}
