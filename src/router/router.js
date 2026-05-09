import { Router } from '@vaadin/router'

const outlet = document.getElementById('app')
const router = new Router(outlet)

const base = window.location.hostname.includes('github.io') ? '/gallery-app-lit' : ''

router.setRoutes([
	{
		path: `${base}/`,
		component: 'home-page',
	},
	{
		path: `${base}/gallery`,
		component: 'gallery-page',
	},
	{
		path: `${base}/address`,
		component: 'address-page',
	},
	{
		path: `${base}/services`,
		component: 'services-page',
	},
	{
		path: `${base}/contact`,
		component: 'contact-page',
	},
	{
		path: '(.*)',
		redirect: `${base}/`,
	},
])

export { router }
