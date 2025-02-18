import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import ProductDetail from './components/ProductDetail.vue'
import { createRouter, createWebHistory } from 'vue-router'
import NotFound from './components/NotFound.vue'

const router = createRouter({
    routes: [
        {
            path: "/",
            component: Home,
        },
        {
            path: "/about",
            component: About,
            // Sensitive route
            sensitive: true,
        },
        {
            // Matching syntax route
            // Tanda ? untuk optional param
            path: "/products/:id(\\d+)?",
            component: ProductDetail,
            sensitive: true,
        },
        {
            // Repeatable route
            path: "/:notFound*",
            component: NotFound,
        }
    ],
    history: createWebHistory(),
});

createApp(App).use(router).mount('#app')
 