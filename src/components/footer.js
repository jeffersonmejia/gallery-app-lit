import { LitElement, html, css } from "lit";

class Footer extends LitElement {
  static styles = css`
    footer {
      color: var(--fg-header);
      padding: 1.5rem;
      text-align: center;
    }
  `;
  render() {
    return html` <footer>
      <small>Todos los derechos reservados 2026</small>
    </footer>`;
  }
}

customElements.define("my-footer", Footer);
