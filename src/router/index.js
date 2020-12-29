import { createRouter, createWebHashHistory } from 'vue-router'
import ButtonComponent from "@/components/ControlAndIndication/ButtonComponent";

const routes = [
  { path: '/test', component: ButtonComponent },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
