import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import ProductDetail from './components/ProductDetail.vue'
import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import NotFound from './components/NotFound.vue'
import ProductSearch from './components/ProductSearch.vue'
// import User from './components/User.vue'
// import UserProfile from './components/UserProfile.vue'
// import UserOrder from './components/UserOrder.vue'
// import UserWishlist from './components/UserWishlist.vue'
// import UserHeader from './components/UserHeader.vue'
// import UserOrderFooter from './components/UserOrderFooter.vue'
// import UserWishlistFooter from './components/UserWishlistFooter.vue'

const router = createRouter({
    routes: [
        {
            path: "/",
            component: Home,
            props: {
                title: "Home",
            }
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
            props: true, // namanya harus sama dengan nama props agar bisa
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
            props: route => (
                {
                    product: route.query.product,
                }
            )
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
            // lazy loading route
            component: () => import("./components/User.vue"),
            // component: User,
            children: [
                {
                    path: '',
                    // component: UserProfile,

                    // menggunakan named view
                    components: {
                        header: () => import("./components/UserHeader.vue"),
                        // header: UserHeader,
                        default: () => import("./components/UserProfile.vue"),
                        // default: UserProfile,
                    },
                    name: 'user', // named route 
                },
                {
                    path: 'profile',
                    // component: UserProfile,
                    components: {
                        header: () => import("./components/UserHeader.vue"),
                        default: () => import("./components/UserProfile.vue"),
                    },
                    name: 'user-profile',
                },
                {
                    path: 'order',
                    // component: UserOrder,
                    components: {
                        header: () => import("./components/UserHeader.vue"),
                        default: () => import("./components/UserOrder.vue"),
                        footer: () => import("./components/UserOrderFooter.vue"),
                    },
                    name: 'user-order',
                },
                {
                    path: 'wishlist',
                    // component: UserWishlist,
                    components: {
                        header: () => import("./components/UserHeader.vue"),
                        default: () => import("./components/UserWishlist.vue"),
                        footer: () => import("./components/UserWishlistFooter.vue"),
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
    history: createWebHistory(), //HTML5 mode
    // history: createWebHashHistory() // url diawali tanda #
    // history: createMemoryHistory() // hanya bisa diakses melalui routerlink
});

createApp(App).use(router).mount('#app')
 