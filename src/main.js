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
import UserHeader from './components/UserHeader.vue'
import UserOrderFooter from './components/UserOrderFooter.vue'
import UserWishlistFooter from './components/UserWishlistFooter.vue'

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
        // redirect
        {
            path: "/home",
            redirect: "/",
        },
        {
            path: "/products/search",
            component: ProductSearch,
            name: 'product-search',
        },
        {
            path: "/products/search/:keyword",
            redirect: route => {
                return {
                    name: "product-search",
                    query: {
                        product: route.params.keyword
                    }
                }
            }
        },
        {
            path: "/users",
            component: User,
            children: [
                {
                    path: '',
                    // component: UserProfile,

                    // menggunakan named view
                    components: {
                        header: UserHeader,
                        default: UserProfile,
                    },
                    name: 'user', // named route 
                },
                {
                    path: 'profile',
                    // component: UserProfile,
                    components: {
                        header: UserHeader,
                        default: UserProfile,
                    },
                    name: 'user-profile',
                },
                {
                    path: 'order',
                    // component: UserOrder,
                    components: {
                        header: UserHeader,
                        default: UserOrder,
                        footer: UserOrderFooter,
                    },
                    name: 'user-order',
                },
                {
                    path: 'wishlist',
                    // component: UserWishlist,
                    components: {
                        header: UserHeader,
                        default: UserWishlist,
                        footer: UserWishlistFooter,
                    },
                    name: 'user-wishlist',
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
 