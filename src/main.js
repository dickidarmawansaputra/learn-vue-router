import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import ProductDetail from './components/ProductDetail.vue'
import { createRouter, createWebHistory } from 'vue-router'
import NotFound from './components/NotFound.vue'
import ProductSearch from './components/ProductSearch.vue'
import User from './components/User.vue'
import UserProfile from './components/UserProfile.vue'
import UserOrder from './components/UserOrder.vue'
import UserWishlist from './components/UserWishlist.vue'

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
        },
        {
            path: "/products/search",
            component: ProductSearch,
        },
        {
            path: "/users",
            component: User,
            children: [
                {
                    path: '',
                    component: UserProfile,
                },
                {
                    path: 'profile',
                    component: UserProfile,
                },
                {
                    path: 'order',
                    component: UserOrder,
                },
                {
                    path: 'wishlist',
                    component: UserWishlist,
                },
            ],
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
 