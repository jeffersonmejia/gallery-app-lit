import { LitElement, html, css } from 'lit'

class HomePage extends LitElement {
	static styles = css`
		:host {
			display: block;
			overflow: hidden;
		}

		.hero {
			position: relative;
			height: 66vh;
			overflow: hidden;

			opacity: 0;
			transform: scale(1.02);
			animation: fadeIn 700ms ease-out forwards;
		}

		.hero img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
			display: block;
		}

		.overlay {
			position: absolute;
			inset: 0;
			background: linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.2));
			display: flex;
			align-items: flex-end;
		}

		.content {
			padding: 2rem;
			color: white;
			max-width: 600px;
		}

		h1 {
			margin: 0;
			font-size: 2rem;
		}

		p {
			margin: 0.5rem 0 0;
			font-size: 0.95rem;
			line-height: 1.4;
		}

		.quote {
			margin-top: 1rem;
			font-size: 0.85rem;
			opacity: 0.85;
			font-style: italic;
		}

		@media (max-width: 700px) {
			.hero {
				height: 50vh;
			}

			h1 {
				font-size: 1.4rem;
			}
		}

		@keyframes fadeIn {
			from {
				opacity: 0;
				transform: scale(1.06);
				filter: blur(6px);
			}
			to {
				opacity: 1;
				transform: scale(1.02);
				filter: blur(0);
			}
		}
	`

	render() {
		return html`
			<div class="hero">
				<img src="./img/cover_home.jpg" />
				<div class="overlay">
					<div class="content">
						<h1>Spider-Man: Into the Spider-Verse</h1>
						<p>
							Historia de Miles Morales que descubre el multiverso y aprende que
							cualquiera puede llevar la máscara mientras distintas versiones del héroe se
							unen para salvar la realidad.
						</p>
						<div class="quote">"Solo es un salto de fé, miles."</div>
					</div>
				</div>
			</div>
		`
	}
}

customElements.define('home-page', HomePage)
