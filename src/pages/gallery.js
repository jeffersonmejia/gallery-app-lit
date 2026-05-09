import { LitElement, html, css } from 'lit'

class GalleryPage extends LitElement {
	get elements() {
		return [
			{
				src: '/img/movies/spider_2026.png',
				title: 'Spider Man Brand New Day, 2026',
				description:
					'Nueva entrega del universo cinematografico donde se plantea una etapa distinta para Peter Parker tras eventos previos que redefinen su identidad y su rol como heroe',
			},
			{
				src: '/img/movies/spider_2019.png',
				title: 'Spider Man Far From Home, 2019',
				description:
					'Historia donde Peter Parker enfrenta amenazas internacionales mientras intenta mantener una vida normal durante un viaje escolar en Europa',
			},
			{
				src: '/img/movies/spider_2018.png',
				title: 'Spider Man Into the Spider Verse, 2018',
				description:
					'Película animada centrada en Miles Morales que introduce el multiverso y diferentes versiones del heroe',
			},
			{
				src: '/img/movies/spider_2012.png',
				title: 'The Amazing Spider Man, 2012',
				description:
					'Reinicio que presenta una versión más moderna del personaje explorando su pasado y su relación con Gwen Stacy junto a un enfoque más científico',
			},
			{
				src: '/img/movies/spider_2007.png',
				title: 'Spider Man 3, 2007',
				description:
					'Entrega que desarrolla conflictos internos del protagonista al ser influenciado por el simbionte mientras enfrenta nuevos enemigos',
			},
			{
				src: '/img/movies/spider_2004.png',
				title: 'Spider Man 2, 2004',
				description:
					'Película que profundiza en el equilibrio entre la vida personal de Peter Parker y su responsabilidad como superheroe frente a Doctor Octopus',
			},
			{
				src: '/img/movies/spider_2002.png',
				title: 'Spider Man, 2002',
				description:
					'Origen del personaje donde se presenta la transformación de Peter Parker y su primera gran prueba como heroe frente al Duende Verde',
			},
		]
	}

	static styles = css`
		:host {
			display: block;
			padding: 0 20px;
			overflow: hidden;
		}

		.galeria {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
			gap: 25px;
			opacity: 0;
			transform: translateY(18px);
			animation: galleryEnter 700ms ease-out forwards;
		}

		.gallery-item {
			opacity: 0;
			transform: translateY(24px) scale(0.98);
			animation: cardEnter 650ms ease-out forwards;
			transition:
				transform 220ms ease,
				opacity 220ms ease,
				filter 220ms ease;
		}

		.gallery-item:hover {
			transform: translateY(-6px) scale(1.01);
			filter: saturate(1.08);
		}

		.gallery-item:nth-child(1) {
			animation-delay: 80ms;
		}

		.gallery-item:nth-child(2) {
			animation-delay: 150ms;
		}

		.gallery-item:nth-child(3) {
			animation-delay: 220ms;
		}

		.gallery-item:nth-child(4) {
			animation-delay: 290ms;
		}

		.gallery-item:nth-child(5) {
			animation-delay: 360ms;
		}

		.gallery-item:nth-child(6) {
			animation-delay: 430ms;
		}

		.gallery-item:nth-child(7) {
			animation-delay: 500ms;
		}

		@keyframes galleryEnter {
			from {
				opacity: 0;
				transform: translateY(18px);
			}

			to {
				opacity: 1;
				transform: translateY(0);
			}
		}

		@keyframes cardEnter {
			from {
				opacity: 0;
				transform: translateY(24px) scale(0.98);
				filter: blur(5px);
			}

			to {
				opacity: 1;
				transform: translateY(0) scale(1);
				filter: blur(0);
			}
		}
		h1 {
			grid-column: 1/-1;
			margin: 0;
			text-align: center;
			font-size: 2.5rem;
		}
		@media (max-width: 700px) {
			:host {
				padding: 16px;
				margin-top: 12px;
			}

			.galeria {
				grid-template-columns: 1fr;
				gap: 18px;
			}
		}
	`

	render() {
		return html`
			<div class="galeria">
				<h1>Cronología</h1>
				${this.elements.map(
					(element) => html`
						<div class="gallery-item">
							<my-card
								src="${element.src}"
								title="${element.title}"
								description="${element.description}"
							></my-card>
						</div>
					`,
				)}
			</div>
		`
	}
}

customElements.define('gallery-page', GalleryPage)
