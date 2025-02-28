<script setup>

</script>

<template>
    <!-- <h1>User</h1>

    <ul>
        <li><RouterLink :to="{name: 'user-profile'}">User Profile </RouterLink></li>
        <li><RouterLink :to="{name: 'user-order'}">User Order</RouterLink></li> -->
        <!-- <li><RouterLink to="/users/wishlist">User Wishlist</RouterLink></li> -->
         <!-- mengunakan named route -->
        <!-- <li><RouterLink :to="{name: 'user-wishlist'}">User Wishlist</RouterLink></li>
    </ul> -->

    <RouterView name="header"/>
    <!-- <RouterView/> -->
    <!-- router view slot -->
    <RouterView v-slot="{Component}">
        <component :is="Component" :request-id="$route.query.requestId"/>
    </RouterView>
    <RouterView name="footer"/> 
</template>

<style scoped>
/* RouterLink akan menambahkan class router-link-active & router-link-exact-active */
/* .router-link-active {
    color: red;
    font-weight: bold;
} */
/* .router-link-exact-active {
    color: red;
    font-weight: bold;
} */
</style>