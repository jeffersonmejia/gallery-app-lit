import { LitElement, html, css } from 'lit'

class WelcomePage extends LitElement {
	static styles = css`
		:host {
			position: fixed;
			inset: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			background: #ffffff;
			overflow: hidden;
			z-index: 999;
			opacity: 1;
			transform: scale(1);
			filter: blur(0);
			transition:
				opacity 650ms ease,
				transform 650ms ease,
				filter 650ms ease;
		}

		:host(.closing) {
			opacity: 0;
			transform: scale(1.04);
			filter: blur(6px);
			pointer-events: none;
		}

		.welcome-layout {
			width: min(92%, 980px);
			height: 84vh;
			display: grid;
			grid-template-columns: 380px 1fr;
			align-items: center;
			gap: 3rem;
		}

		.welcome-card {
			width: 100%;
			height: 100%;
			background: #ffffff;
			border-radius: 2rem;
			display: flex;
			flex-direction: column;
			opacity: 0;
			transform: translateX(-1rem) scale(1.03);
			animation: fadeInCard 600ms ease-out forwards;
		}

		.welcome-image-section {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 1.2rem;
			background: #ffffff;
			overflow: hidden;
		}

		.welcome-cover {
			width: 100%;
			min-width: 4rem;
			height: 100%;
			border-radius: 1.5rem;
			object-fit: cover;
			display: block;
		}

		.welcome-story {
			display: flex;
			flex-direction: column;
			justify-content: center;
			opacity: 0;
			transform: translateY(1rem);
			animation: fadeInStory 700ms ease-out 120ms forwards;
		}

		.story-subtitle {
			margin: 0 0 0.8rem;
			font-size: 0.85rem;
			font-weight: 600;
			letter-spacing: 0.18em;
			text-transform: uppercase;
			color: #777777;
		}

		.story-title {
			margin: 0;
			max-width: 34rem;
			font-size: clamp(2rem, 4.8vw, 4.2rem);
			line-height: 0.96;
			font-weight: 800;
			letter-spacing: -0.06em;
			color: #050505;
		}

		.story-text {
			margin: 1.5rem 0 0;
			max-width: 34rem;
			font-size: clamp(1rem, 1.8vw, 1.15rem);
			line-height: 1.7;
			color: #333333;
		}

		.story-actions {
			margin-top: 2rem;
			display: flex;
			justify-content: flex-start;
		}

		.continue-button {
			border: none;
			outline: none;
			padding: 0.95rem 1.8rem;
			border-radius: 999px;
			background: #000000;
			color: #ffffff;
			font-size: 0.95rem;
			font-weight: 500;
			cursor: pointer;
			transition: opacity 180ms ease;
		}

		.continue-button:hover {
			opacity: 0.82;
		}

		@keyframes fadeInCard {
			from {
				opacity: 0;
				transform: translateX(-1rem) scale(1.08);
			}

			to {
				opacity: 1;
				transform: translateX(0) scale(1.03);
			}
		}

		@keyframes fadeInStory {
			from {
				opacity: 0;
				transform: translateY(1rem);
			}

			to {
				opacity: 1;
				transform: translateY(0);
			}
		}

		@media (max-width: 760px) {
			:host {
				overflow-y: auto;
				align-items: flex-start;
			}

			.welcome-layout {
				width: min(92%, 420px);
				height: auto;
				min-height: 100vh;
				grid-template-columns: 1fr;
				gap: 1.8rem;
				padding: 2rem 0;
			}

			.welcome-card {
				height: 52vh;
				min-height: 380px;
			}

			.story-title {
				font-size: clamp(2rem, 10vw, 3.2rem);
			}

			.story-actions {
				width: 100%;
			}

			.continue-button {
				width: 100%;
			}
		}
	`

	audio = null

	connectedCallback() {
		super.connectedCallback()
		document.body.style.overflowY = 'hidden'
	}

	disconnectedCallback() {
		document.body.style.overflowY = 'auto'
		super.disconnectedCallback()
	}

	handleContinue() {
		window.dispatchEvent(new CustomEvent('intro-started'))

		if (!this.audio) {
			this.audio = new Audio('./audio/sunflower.mp3')
			this.audio.loop = true
			this.audio.currentTime = 0
		}

		this.audio.play().catch(() => {})

		this.classList.add('closing')
		document.body.style.overflowY = 'auto'

		setTimeout(() => {
			this.remove()
		}, 650)
	}

	render() {
		return html`
			<section class="welcome-layout">
				<section class="welcome-card">
					<section class="welcome-image-section">
						<img class="welcome-cover" src="./img/home.png" />
					</section>
				</section>

				<section class="welcome-story">
					<p class="story-subtitle">Miles Morales</p>

					<h1 class="story-title">No nació listo. Aprendió a levantarse.</h1>

					<p class="story-text">
						No empieza como una leyenda. Empieza con miedo, dudas y una ciudad demasiado
						grande sobre sus hombros. Pero ahí está lo humano de su historia: no necesita
						parecerse a nadie para ser Spider-Man. Su fuerza aparece cuando deja de pedir
						permiso para existir y entiende que su camino también puede salvar a otros.
					</p>

					<section class="story-actions">
						<button class="continue-button" @click=${this.handleContinue}>
							Continuar
						</button>
					</section>
				</section>
			</section>
		`
	}
}

customElements.define('welcome-page', WelcomePage)
