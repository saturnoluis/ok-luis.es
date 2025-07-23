import { LitElement, html, css } from '/static/js/dependencies/lit-all.min.js';
import { toggleClassName } from '/static/js/utils.js';

class OkTaskbar extends LitElement {
	static properties = {
		taskButton: {
			type: String,
			attribute: 'task-button',
		},
	};

	static styles = getStyles();

	constructor() {
		super();
	}

	_handleClick(event) {
		this.dispatchEvent(new CustomEvent('ok-task-button-click'));
	}

	render() {
		return html`
			<div class="inner">
				<button
					id="task-button"
					class="hidden"
					@click="${this._handleClick}"
				>
					${this.taskButton}
				</button>
			</div>
		`;
	}
}

customElements.define('ok-taskbar', OkTaskbar);

function getStyles() {
	return css`
		:host {
			display: block;
			width: 100%;
			height: var(--taskbar-height);
			box-sizing: border-box;
			background: var(--surface);
			box-shadow:
				inset -1rem -1rem var(--surface-shadow-darker),
				inset 1rem 1rem var(--surface-glow);
		}

		.inner {
			display: flex;
			align-content: center;
			padding: 2rem;
			box-sizing: border-box;
			height: 100%;
		}

		#task-button {
			display: block;
			color: var(--text);
			background: var(--surface);
			font-family: 'Sysfont', sans-serif;
			font-size: 9rem;
			padding: 0 8rem;
			cursor: pointer;
			box-sizing: border-box;
			border: none;
			box-shadow:
				inset -1rem -1rem var(--surface-shadow-darker),
				inset 1rem 1rem var(--surface-glow);
		}

		#task-button:active {
			background-color: var(--surface-shadow);
			box-shadow:
				inset 1rem 1rem var(--surface-shadow-darker),
				inset -1rem -1rem var(--surface-glow);
		}
	`;
}
