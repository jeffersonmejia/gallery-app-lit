import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => ({
	base: mode === 'production' ? '/gallery-app-lit/' : '/',
}))
