import { createRouter, createWebHistory } from 'vue-router'
import App from "@/App";

const routerHistory = createWebHistory()

const routes = [
  { name: 'app', path: '/', component: App },
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
