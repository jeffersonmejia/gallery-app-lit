import { LitElement, html, css } from "lit";

class MiCard extends LitElement {
  static properties = {
    src: { type: String },
    title: { type: String },
    description: { type: String },
  };

  static styles = css`
    .card {
      background-color: var(--bg-card);
      color: var(--fg-card);
      margin: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      border-radius: 24px;
      transition:
        background 0.3s ease,
        transform 0.3s ease;
      cursor: pointer;
    }

    .card:hover {
      transform: translateY(-1rem);
      background-color: var(--bg-card-hover);
    }

    .card img {
      width: 100%;
      height: 15rem;
      border-top-left-radius: 24px;
      border-top-right-radius: 24px;
      object-fit: cover;
    }

    .card {
      padding: 1rem;
    }
  `;
  render() {
    return html` <div class="card">
      <img src="${this.src}" />
      <div>
        <h3>${this.title}</h3>
        <p>${this.description}</p>
      </div>
    </div>`;
  }
}

customElements.define("my-card", MiCard);
