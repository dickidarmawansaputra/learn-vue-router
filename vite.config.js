import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  // config untuk build ketika pake lazy loading route
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          users: [
            "./src/components/User.vue",
            "./src/components/UserHeader.vue",
            "./src/components/UserProfile.vue",
            "./src/components/UserOrder.vue",
            "./src/components/UserOrderFooter.vue",
            "./src/components/UserWishlist.vue",
            "./src/components/UserWishlistFooter.vue",
          ]
        }
      }
    }
  }
})
