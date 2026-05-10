import { LitElement, html, css } from 'lit'

class ServicesPage extends LitElement {
	static styles = css`
		:host {
			display: grid;
			place-items: center;
			height: 70vh;
			padding: 2rem;
			box-sizing: border-box;
			background: #ffffff;
			overflow: hidden;
		}

		.carousel {
			width: min(100%, 1100px);
			overflow: hidden;
			background: #ffffff;
			opacity: 0;
			transform: translateY(1rem);
			animation: fadeIn 700ms ease forwards;
		}

		.track {
			display: flex;
			width: max-content;
			animation: slide 60s linear infinite;
		}

		.group {
			display: grid;
			grid-template-columns: repeat(4, minmax(180px, 260px));
			gap: 1rem;
			padding-right: 1rem;
		}

		.card {
			position: relative;
			height: 420px;
			overflow: hidden;
			background: #111;
			border-radius: 1.4rem;
		}

		.card img {
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			filter: brightness(0.78) contrast(1.08) saturate(1.08);
		}

		.card-content {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			padding: 1rem;
			color: #ffffff;
			background: linear-gradient(to top, rgba(0, 0, 0, 0.78), transparent);
		}

		h3 {
			margin: 0;
			font-size: 1.05rem;
			line-height: 1;
			letter-spacing: -0.04em;
			text-transform: uppercase;
		}

		p {
			margin: 0.35rem 0 0;
			font-size: 0.78rem;
			line-height: 1.35;
			opacity: 0.82;
		}

		@media (max-width: 900px) {
			.group {
				grid-template-columns: repeat(4, minmax(160px, 220px));
			}

			.card {
				height: 340px;
			}
		}

		@media (max-width: 640px) {
			:host {
				padding: 1rem;
			}

			.group {
				grid-template-columns: repeat(4, 72vw);
			}

			.card {
				height: 380px;
				border-radius: 1.1rem;
			}
		}

		@keyframes slide {
			from {
				transform: translateX(0);
			}
			to {
				transform: translateX(-50%);
			}
		}

		@keyframes fadeIn {
			to {
				opacity: 1;
				transform: translateY(0);
			}
		}
	`

	render() {
		const items = [
			[
				'./img/movies/spider_2004.png',
				'Eventos',
				'Experiencias, proyecciones y encuentros temáticos.',
			],
			[
				'./img/movies/spider_2002.png',
				'Películas',
				'Alquiler de clásicos y estrenos seleccionados.',
			],
			[
				'./img/movies/spider_2007.png',
				'Coleccionables',
				'Figuras, pósters y piezas exclusivas.',
			],
			[
				'./img/movies/spider_2012.png',
				'Vestimenta',
				'Ropa temática inspirada en el universo Spider.',
			],
			['./img/movies/spider_2018.png', 'Accesorios', 'Gadgets y objetos de uso diario.'],
			[
				'./img/movies/spider_2019.png',
				'Ediciones',
				'Contenido especial y versiones limitadas.',
			],
			[
				'./img/movies/spider_2026.png',
				'Premium',
				'Experiencia completa con beneficios superiores.',
			],
			[
				'./img/movies/spider_2018.png',
				'Archivo',
				'Material visual y referencias de colección.',
			],
		]

		return html`
			<section class="carousel">
				<div class="track">
					<div class="group">${items.slice(0, 4).map((item) => this.card(...item))}</div>
					<div class="group">${items.slice(4, 8).map((item) => this.card(...item))}</div>
					<div class="group">${items.slice(0, 4).map((item) => this.card(...item))}</div>
					<div class="group">${items.slice(4, 8).map((item) => this.card(...item))}</div>
				</div>
			</section>
		`
	}

	card(src, title, text) {
		return html`
			<article class="card">
				<img src=${src} alt=${title} />
				<div class="card-content">
					<h3>${title}</h3>
					<p>${text}</p>
				</div>
			</article>
		`
	}
}

customElements.define('services-page', ServicesPage)
