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
			background: black;
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

		.hero video,
		.poster-fallback {
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
			display: block;
		}

		.hero video {
			opacity: 0;
			transition: opacity 220ms ease;
		}

		.hero video.ready {
			opacity: 1;
		}

		.poster-fallback {
			background-image: url('./img/cover_home.jpg');
			background-size: cover;
			background-position: center;
			opacity: 1;
			transition: opacity 220ms ease;
		}

		.poster-fallback.hidden {
			opacity: 0;
		}

		.overlay {
			position: absolute;
			inset: 0;
			background: linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.2));
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			z-index: 2;
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
		videoReady: { type: Boolean },
	}

	constructor() {
		super()
		this.expanded = false
		this.videoReady = false
		this.videoSrc = './video/sunflower.mp4'
	}

	connectedCallback() {
		super.connectedCallback()
		document.addEventListener('fullscreenchange', this.handleFullscreenChange)
		document.addEventListener('visibilitychange', this.handleVisibilityChange)
	}

	disconnectedCallback() {
		document.removeEventListener('fullscreenchange', this.handleFullscreenChange)
		document.removeEventListener('visibilitychange', this.handleVisibilityChange)

		super.disconnectedCallback()
	}

	firstUpdated() {
		const video = this.getVideo()

		if (!video) return

		video.muted = true
		video.playsInline = true
		video.preload = 'auto'

		video.addEventListener('loadeddata', this.handleVideoReady)
		video.addEventListener('canplay', this.handleVideoReady)
		video.addEventListener('playing', this.handleVideoReady)

		video.addEventListener('waiting', this.handleVideoWaiting)
		video.addEventListener('stalled', this.handleVideoWaiting)
		video.addEventListener('error', this.handleVideoWaiting)

		this.playVideo()
	}

	getVideo() {
		return this.renderRoot?.querySelector('video') ?? null
	}

	handleVideoReady = () => {
		this.videoReady = true
	}

	handleVideoWaiting = () => {
		this.videoReady = false
	}

	handleFullscreenChange = () => {
		this.expanded = Boolean(document.fullscreenElement)
	}

	handleVisibilityChange = () => {
		if (!document.hidden) {
			this.playVideo()
		}
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

	async playVideo() {
		const video = this.getVideo()

		if (!video) return

		try {
			video.muted = true
			video.playbackRate = 1
			await video.play()
			this.videoReady = video.readyState >= 2
		} catch {
			this.videoReady = false
		}
	}

	render() {
		return html`
			<div class=${this.expanded ? 'hero expanded' : 'hero'}>
				<div
					class=${this.videoReady ? 'poster-fallback hidden' : 'poster-fallback'}
				></div>

				<video
					class=${this.videoReady ? 'ready' : ''}
					muted
					loop
					playsinline
					preload="auto"
					poster="./img/cover_home.jpg"
				>
					<source src=${this.videoSrc} type="video/mp4" />
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
