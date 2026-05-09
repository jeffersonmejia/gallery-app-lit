import { LitElement, html, css } from 'lit'

class Header extends LitElement {
	static styles = css`
		:host {
			width: 100%;
		}

		header {
			color: var(--fg-header);
			padding: 15px;
			text-align: center;
		}

		h1 {
			margin: 1rem 0;
		}

		nav {
			display: flex;
			justify-content: center;
			gap: 10px;
			flex-wrap: wrap;
			margin-bottom: 1rem;
		}

		a {
			position: relative;
			color: var(--fg-header);
			text-decoration: none;
			padding: 6px 10px;
			border-radius: 6px;
			font-weight: 400;
			transition: all 200ms ease;
		}

		a::after {
			content: '';
			position: absolute;
			left: 0;
			bottom: -2px;
			width: 0%;
			height: 2px;
			background: var(--fg-header);
			transition: width 200ms ease;
		}

		a:hover::after {
			width: 100%;
		}

		a.active {
			font-weight: 700;
		}

		a.active::after {
			width: 0%;
		}
	`

	get basePath() {
		return window.location.hostname.includes('github.io') ? '/gallery-app-lit' : ''
	}

	get currentPath() {
		const path = window.location.pathname

		if (this.basePath && path.startsWith(this.basePath)) {
			return path.replace(this.basePath, '') || '/'
		}

		return path
	}

	getHref(path) {
		if (path === '/') {
			return `${this.basePath}/`
		}

		return `${this.basePath}${path}`
	}

	getLinkClass(path) {
		return this.currentPath === path ? 'active' : ''
	}

	handleClick() {
		setTimeout(() => {
			this.requestUpdate()
		}, 0)
	}

	render() {
		return html`
			<header>
				<h1>Aplicación de galería 🕷️</h1>

				<nav>
					<a
						class=${this.getLinkClass('/')}
						href=${this.getHref('/')}
						@click=${this.handleClick}
					>
						Inicio
					</a>

					<a
						class=${this.getLinkClass('/gallery')}
						href=${this.getHref('/gallery')}
						@click=${this.handleClick}
					>
						Galeria
					</a>

					<a
						class=${this.getLinkClass('/address')}
						href=${this.getHref('/address')}
						@click=${this.handleClick}
					>
						Dirección
					</a>

					<a
						class=${this.getLinkClass('/contact')}
						href=${this.getHref('/contact')}
						@click=${this.handleClick}
					>
						Contacto
					</a>

					<a
						class=${this.getLinkClass('/services')}
						href=${this.getHref('/services')}
						@click=${this.handleClick}
					>
						Servicios
					</a>
				</nav>
			</header>
		`
	}
}

customElements.define('my-header', Header)
