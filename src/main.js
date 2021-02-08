import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { makeServer } from "./server"

let app = createApp(App).use(store).use(router)

if (process.env.NODE_ENV === "test") {
    makeServer()
}

//директива клика вне компонента
app.directive('click-outside', {
    beforeMount(el, binding, ) {
        el.clickOutsideEvent = function(event) {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value(event, el);
            }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
    }
});

app.mount('#app')
