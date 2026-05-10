import { LitElement, html, css } from 'lit'

class ContactPage extends LitElement {
	static styles = css`
		<style > :host {
			display: block;
			overflow: hidden;
			padding: 2rem;
			box-sizing: border-box;
		}

		.wrapper {
			display: grid;
			grid-template-columns: 1fr 1fr;
			max-width: 900px;
			margin: 0 auto;
			border-radius: 12px;
			overflow: hidden;
			height: 75vh;
			opacity: 0;
			transform: translateY(20px);
			animation: fadeIn 600ms ease-out forwards;
		}

		.image {
			width: 100%;
			height: 70%;
		}

		.image img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			display: block;
		}

		.container {
			padding: 2rem;
			border-top: 1px solid rgb(230, 230, 230);
			border-right: 1px solid rgb(230, 230, 230);
			border-bottom: 1px solid rgb(230, 230, 230);

			box-sizing: border-box;
			height: 70%;
		}

		h2 {
			margin-top: 0;
			color: var(--fg-card);
		}

		input,
		textarea {
			width: 100%;
			margin-top: 1rem;
			padding: 0.7rem;
			border: none;
			border: 1px solid rgb(215, 215, 215);

			border-radius: 8px;
			font-family: inherit;
			outline: none;
		}

		.error {
			margin-top: 0.3rem;
			font-size: 0.8rem;
			color: #b00020;
			display: none;
		}

		.invalid {
			outline: 2px solid #b00020;
		}

		button {
			margin-top: 1.2rem;
			width: 100%;
			padding: 0.8rem;
			border: none;
			border-radius: 8px;
			background: var(--fg-header);
			color: white;
			cursor: pointer;
			transition: opacity 200ms ease;
		}

		button:disabled {
			opacity: 0.7;
			cursor: not-allowed;
		}

		@media (max-width: 700px) {
			.wrapper {
				grid-template-columns: 1fr;
			}

			.image {
				display: none;
			}
		}

		@keyframes fadeIn {
			from {
				opacity: 0;
				transform: translateY(30px);
				filter: blur(6px);
			}
			to {
				opacity: 1;
				transform: translateY(0);
				filter: blur(0);
			}
		}
	`

	firstUpdated() {
		const $ = (id) => this.renderRoot.getElementById(id)

		const name = $('name')
		const email = $('email')
		const msg = $('msg')
		const btn = $('btn')

		const errName = $('err-name')
		const errEmail = $('err-email')
		const errMsg = $('err-msg')

		const emailRegex = /^[^@]+@[^@]+\.[^@]+$/

		btn.addEventListener('click', () => {
			let valid = true

			;[name, email, msg].forEach((el) => el.classList.remove('invalid'))
			;[errName, errEmail, errMsg].forEach((el) => (el.style.display = 'none'))

			if (!name.value.trim()) {
				name.classList.add('invalid')
				errName.style.display = 'block'
				valid = false
			}

			if (!emailRegex.test(email.value.trim())) {
				email.classList.add('invalid')
				errEmail.style.display = 'block'
				valid = false
			}

			if (!msg.value.trim()) {
				msg.classList.add('invalid')
				errMsg.style.display = 'block'
				valid = false
			}

			if (!valid) return

			btn.textContent = 'Enviando...'
			btn.disabled = true

			setTimeout(() => {
				btn.textContent = 'Enviado'

				setTimeout(() => {
					name.value = ''
					email.value = ''
					msg.value = ''

					btn.textContent = 'Enviar'
					btn.disabled = false
				}, 1200)
			}, 1500)
		})
	}

	render() {
		return html`<div class="wrapper">
			<div class="image">
				<img src="./img/movies/spider_2018.png" />
			</div>

			<div class="container">
				<h2>Contacto</h2>

				<input id="name" type="text" placeholder="Nombre" />
				<div id="err-name" class="error">Ingrese su nombre</div>

				<input id="email" type="email" placeholder="Correo" />
				<div id="err-email" class="error">Correo inválido</div>

				<textarea id="msg" rows="4" placeholder="Mensaje"></textarea>
				<div id="err-msg" class="error">Ingrese un mensaje</div>

				<button id="btn">Enviar</button>
			</div>
		</div> `
	}
}

customElements.define('contact-page', ContactPage)
