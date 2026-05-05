import { LitElement, html, css } from "lit";

class GalleryPage extends LitElement {
  get Elements() {
    return (elements = [
      {
        src: "./img/movies/spider_2026.png",
        titulo: "Spider Man Brand New Day, 2026",
        descripcion:
          "Nueva entrega del universo cinematografico donde se plantea una etapa distinta para Peter Parker tras eventos previos que redefinen su identidad y su rol como heroe",
      },
      {
        src: "./img/movies/spider_2019.png",
        titulo: "Spider Man Far From Home, 2019",
        descripcion:
          "Historia donde Peter Parker enfrenta amenazas internacionales mientras intenta mantener una vida normal durante un viaje escolar en Europa",
      },
      {
        src: "./img/movies/spider_2018.png",
        titulo: "Spider Man Into the Spider Verse, 2018",
        descripcion:
          "Película animada centrada en Miles Morales que introduce el multiverso y diferentes versiones del heroe",
      },
      {
        src: "./img/movies/spider_2012.png",
        titulo: "The Amazing Spider Man, 2012",
        descripcion:
          "Reinicio que presenta una versión más moderna del personaje explorando su pasado y su relación con Gwen Stacy junto a un enfoque más científico",
      },
      {
        src: "./img/movies/spider_2007.png",
        titulo: "Spider Man 3, 2007",
        descripcion:
          "Entrega que desarrolla conflictos internos del protagonista al ser influenciado por el simbionte mientras enfrenta nuevos enemigos",
      },
      {
        src: "./img/movies/spider_2004.png",
        titulo: "Spider Man 2, 2004",
        descripcion:
          "Película que profundiza en el equilibrio entre la vida personal de Peter Parker y su responsabilidad como superheroe frente a Doctor Octopus",
      },
      {
        src: "./img/movies/spider_2002.png",
        titulo: "Spider Man, 2002",
        descripcion:
          "Origen del personaje donde se presenta la transformación de Peter Parker y su primera gran prueba como heroe frente al Duende Verde",
      },
    ]);
  }

  static styles = css`
    :host {
      display: block;
    }

    .galeria {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 0rem;
    }

    .galeria mi-card:first-child {
      grid-column: 1 / -1;
      pointer-events: none;
    }

    .galeria mi-card {
      opacity: 0;
      transform: translateY(20px);
      animation: appear 500ms ease forwards;
    }

    .galeria mi-card:nth-child(1) {
      animation-delay: 0ms;
    }
    .galeria mi-card:nth-child(2) {
      animation-delay: 80ms;
    }
    .galeria mi-card:nth-child(3) {
      animation-delay: 160ms;
    }
    .galeria mi-card:nth-child(4) {
      animation-delay: 240ms;
    }
    .galeria mi-card:nth-child(5) {
      animation-delay: 320ms;
    }
    .galeria mi-card:nth-child(6) {
      animation-delay: 400ms;
    }
    .galeria mi-card:nth-child(7) {
      animation-delay: 480ms;
    }

    @keyframes appear {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  render() {
    return html` <div class="galeria">
      ${this.elements
        .map(
          (e) => html`
            <mi-card
              src="${e.src}"
              titulo="${e.title}"
              descripcion="${e.description}"
            >
            </my-card>
          `,
        )
        .join("")}
    </div>`;
  }
}

customElements.define("gallery-page", GalleryPage);
