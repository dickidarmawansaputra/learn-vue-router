import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import ProductDetail from './components/ProductDetail.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    routes: [
        {
            path: "/",
            component: Home,
        },
        {
            path: "/about",
            component: About,
        },
        {
            path: "/products/:id",
            component: ProductDetail,
        }
    ],
    history: createWebHistory(),
});

createApp(App).use(router).mount('#app')
 