import { createRouter, createWebHashHistory } from 'vue-router'
import ButtonComponent from "@/components/ControlAndIndicationPanel/ButtonComponent";
import App from "@/App";

const routes = [
  { name: 'test', path: '/test', component: ButtonComponent },
  { name: 'app', path: '/', component: App },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
