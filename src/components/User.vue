<script setup>

</script>

<template>
    <h1>User</h1>

    <ul>
        <li><RouterLink to="/users/profile">User Profile </RouterLink></li>
        <li><RouterLink to="/users/order">User Order</RouterLink></li>
        <li><RouterLink tofi="/users/wishlist">User Wishlist</RouterLink></li>
    </ul>

    <RouterView/>
    <div>Put footer here</div>
</template>

<style scoped>
/* RouterLink akan menambahkan class router-link-active & router-link-exact-active */
/* .router-link-active {
    color: red;
    font-weight: bold;
} */
.router-link-exact-active {
    color: red;
    font-weight: bold;
}
</style>