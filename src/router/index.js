import { ConverterPage, CurrencyListPage } from '@/pages'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{ path: '/', component: CurrencyListPage },
	{ path: '/converter', component: ConverterPage },
]

const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL),
})

export default router
