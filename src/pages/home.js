import { LitElement, html, css } from 'lit'

class HomePage extends LitElement {
	static styles = css`
		:host {
			display: flex;
			justify-content: center;
			padding: 0 2rem;
			overflow: hidden;
		}

		.hero {
			position: relative;
			width: min(96%, 1400px);
			height: 75vh;
			overflow: hidden;
			border-radius: 2rem;

			opacity: 0;
			transform: scale(1.02);
			animation: fadeIn 700ms ease-out forwards;
		}

		.hero.expanded {
			position: fixed;
			inset: 0;
			z-index: 9999;
			width: 100vw;
			height: 100vh;
			border-radius: 0;
			transform: none;
			animation: none;
			opacity: 1;
		}

		.hero video {
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
			align-items: center;
			justify-content: center;
			text-align: center;
		}

		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;

			padding: 2rem;
			color: white;
			max-width: 600px;
		}

		.quote {
			font-size: 0.85rem;
			opacity: 0.9;
			font-style: italic;
		}

		.control-btn {
			border: 0;
			border-radius: 999px;
			background: white;
			color: black;
			font-weight: 700;
			font-size: 0.9rem;
			padding: 0.8rem 1.4rem;
			cursor: pointer;

			backdrop-filter: blur(10px);

			transition:
				transform 180ms ease,
				opacity 180ms ease;
		}

		.control-btn:hover {
			transform: scale(1.04);
		}

		@media (max-width: 700px) {
			:host {
				padding: 1rem;
			}

			.hero {
				height: 50vh;
				border-radius: 1.4rem;
			}

			.content {
				padding: 1.5rem;
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

	static properties = {
		expanded: { type: Boolean },
	}

	constructor() {
		super()
		this.expanded = false
	}

	connectedCallback() {
		super.connectedCallback()
		window.addEventListener('intro-started', this.handleIntroStarted)
		document.addEventListener('fullscreenchange', this.handleFullscreenChange)
	}

	disconnectedCallback() {
		this.saveVideoTime()
		window.removeEventListener('intro-started', this.handleIntroStarted)
		document.removeEventListener('fullscreenchange', this.handleFullscreenChange)
		super.disconnectedCallback()
	}

	firstUpdated() {
		const continued = localStorage.getItem('continued') === 'true'

		if (!continued) return

		this.playVideo(this.getSyncedTime())
	}

	handleFullscreenChange = () => {
		this.expanded = Boolean(document.fullscreenElement)
	}

	handleIntroStarted = (event) => {
		const currentTime = event.detail?.currentTime ?? 0

		localStorage.setItem('continued', 'true')
		localStorage.setItem('videoCurrentTime', String(currentTime))
		localStorage.setItem('videoLastTimestamp', String(Date.now()))

		this.playVideo(currentTime)
	}

	async toggleFullscreen() {
		const hero = this.renderRoot.querySelector('.hero')

		if (!hero) return

		if (document.fullscreenElement) {
			await document.exitFullscreen().catch(() => {})
			this.expanded = false
			return
		}

		this.expanded = true

		if (hero.requestFullscreen) {
			await hero.requestFullscreen().catch(() => {
				this.expanded = true
			})
		}
	}

	getSyncedTime() {
		const savedTime = Number(localStorage.getItem('videoCurrentTime') || 0)
		const lastTimestamp = Number(localStorage.getItem('videoLastTimestamp') || Date.now())
		const elapsed = (Date.now() - lastTimestamp) / 1000

		return savedTime + elapsed
	}

	saveVideoTime() {
		const continued = localStorage.getItem('continued') === 'true'

		if (!continued) return

		localStorage.setItem('videoCurrentTime', String(this.getSyncedTime()))
		localStorage.setItem('videoLastTimestamp', String(Date.now()))
	}

	playVideo(currentTime = 0) {
		const continued = localStorage.getItem('continued') === 'true'

		if (!continued) return

		const video = this.renderRoot.querySelector('video')

		if (!video) return

		const start = () => {
			const duration = video.duration || 0
			const syncedTime = duration > 0 ? currentTime % duration : currentTime

			video.currentTime = syncedTime

			const promise = video.play()

			if (promise) {
				promise.catch(() => {})
			}
		}

		if (video.readyState >= 1) {
			start()
		} else {
			video.addEventListener('loadedmetadata', start, { once: true })
		}
	}

	render() {
		return html`
			<div class=${this.expanded ? 'hero expanded' : 'hero'}>
				<video muted loop playsinline preload="auto">
					<source src="/video/sunflower.mp4" type="video/mp4" />
				</video>

				<div class="overlay">
					<div class="content">
						<div class="quote">"Solo es un salto de fé, Miles."</div>

						<button class="control-btn" @click=${this.toggleFullscreen}>
							${this.expanded ? 'Salir' : 'Expandir'}
						</button>
					</div>
				</div>
			</div>
		`
	}
}

customElements.define('home-page', HomePage)
