class MiServices extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          overflow: hidden;
          padding: 2rem;
          box-sizing: border-box;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          grid-auto-rows: 180px;
          gap: 1.2rem;

          opacity: 0;
          transform: scale(1.02);
          animation: fadeIn 700ms ease-out forwards;
        }

        .card {
          background: var(--bg-card);
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 200ms ease, background 200ms ease;
          position: relative;
          display: flex;
        }

        .card:hover {
          background: var(--bg-card-hover);
          transform: translateY(-4px);
        }

        .card-wide {
          grid-column: span 2;
          grid-row: span 2;
        }

        .card-tall {
          grid-row: span 2;
        }

        .card img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-content {
          position: relative;
          margin-top: auto;
          width: 100%;
          padding: 0.8rem;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
          color: white;
        }

        h3 {
          margin: 0;
          font-size: 1rem;
        }

        p {
          margin: 0.3rem 0 0;
          font-size: 0.8rem;
        }

        @media (max-width: 700px) {
          .card-wide {
            grid-column: span 1;
            grid-row: span 1;
          }

          .card-tall {
            grid-row: span 1;
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
      </style>

      <div class="grid">
        <div class="card card-wide">
          <img src="./img/movies/spider_2004.png">
          <div class="card-content">
            <h3>Eventos</h3>
            <p>Experiencias, proyecciones y encuentros temáticos.</p>
          </div>
        </div>

        <div class="card card-tall">
          <img src="./img/movies/spider_2002.png">
          <div class="card-content">
            <h3>Películas</h3>
            <p>Alquiler de clásicos.</p>
          </div>
        </div>

        <div class="card">
          <img src="./img/movies/spider_2007.png">
          <div class="card-content">
            <h3>Coleccionables</h3>
            <p>Figuras exclusivas.</p>
          </div>
        </div>

        <div class="card card-tall">
          <img src="./img/movies/spider_2012.png">
          <div class="card-content">
            <h3>Vestimenta</h3>
            <p>Ropa temática.</p>
          </div>
        </div>

        <div class="card">
          <img src="./img/movies/spider_2018.png">
          <div class="card-content">
            <h3>Accesorios</h3>
            <p>Gadgets y más.</p>
          </div>
        </div>

        <div class="card">
          <img src="./img/movies/spider_2019.png">
          <div class="card-content">
            <h3>Ediciones</h3>
            <p>Contenido especial.</p>
          </div>
        </div>

        <div class="card">
          <img src="./img/movies/spider_2026.png">
          <div class="card-content">
            <h3>Premium</h3>
            <p>Experiencia completa.</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("mi-services", MiServices);
