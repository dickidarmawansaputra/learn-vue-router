import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
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
        }
    ],
    history: createWebHistory(),
});

createApp(App).use(router).mount('#app')
 