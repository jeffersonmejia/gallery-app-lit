import { LitElement, html, css } from 'lit'

class AddressPage extends LitElement {
	static styles = css`
		:host {
			display: block;
			overflow: hidden;
		}

		.address-cover {
			width: 100%;
			grid-column: 1 / -1;
			height: 33.5rem;
			object-fit: cover;

			opacity: 0;
			transform: scale(1.03);
			animation: fadeIn 600ms ease-out forwards;
		}

		@keyframes fadeIn {
			from {
				opacity: 0;
				transform: scale(1.08);
			}
			to {
				opacity: 1;
				transform: scale(1.03);
			}
		}
	`

	render() {
		return html` <img class="address-cover" src="./img/address.gif" /> `
	}
}

customElements.define('address-page', AddressPage)
