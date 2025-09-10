import { LitElement, html, css } from '/static/js/dependencies/lit-all.min.js';
import { toggleClassName } from '/static/js/utils.js';

class OkWindow extends LitElement {
	static properties = {
		title: { type: String },
		width: { type: String },
		height: { type: String },
		top: { type: String },
		left: { type: String },
	};

	constructor() {
		super();
	}

	firstUpdated() {
		super.firstUpdated();
		fetch('/static/css/components/ok-window.css')
			.then((response) => response.text())
			.then((cssText) => {
				const style = document.createElement('style');
				style.textContent = cssText;
				this.shadowRoot.appendChild(style);
			});
	}

	updated(changedProperties) {
		super.updated(changedProperties);
		if (changedProperties.has('width')) {
			this.style.width = this.width || 'calc(100dvw - 192rem)';
		}
		if (changedProperties.has('height')) {
			this.style.height = this.height || '80dvh';
		}
		if (changedProperties.has('top')) {
			this.style.top = this.top || '4dvh';
		}
		if (changedProperties.has('left')) {
			this.style.left = this.left || '96rem';
		}
	}

	_handleClick(event) {
		const actions = ['maximize', 'minimize'];
		const actionId = event.target.id;

		if (actionId === 'maximize') {
			toggleClassName(this, 'maximize');
		}

		if (actionId === 'minimize') {
			this.dispatchEvent(new CustomEvent('ok-window-minimize'));
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
							<button class="button" id="minimize" title="Hide">
								<img inert src="/static/img/svg/minimize.svg" />
							</button>
						</div>
						<span>${this.title}</span>
						<div class="button_group">
							<button class="button" id="maximize" title="Maximize">
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
			</div>
		`;
	}
}

customElements.define('ok-window', OkWindow);
