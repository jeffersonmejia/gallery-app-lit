import { LitElement, html, css } from "lit";

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
      margin: 0 0 10px 0;
      margin-top: 1rem;
      margin-bottom: 1rem;
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
      transition: all 200ms ease;
    }

    a::after {
      content: "";
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

    a.active::after {
      width: 100%;
    }
  `;
  render() {
    return html` <header>
      <h1>Aplicación de galería 🕷️</h1>
      <nav>
        <a href="/" data-link>Inicio</a>
        <a href="/gallery" data-link>Galeria</a>
        <a href="/address" data-link>Dirección</a>
        <a href="/contact" data-link>Contacto</a>
        <a href="/services" data-link>Servicios</a>
      </nav>
    </header>`;
  }
}

customElements.define("my-header", Header);
