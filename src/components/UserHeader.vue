<script setup>
</script>
<template>
    <div>

    <ul>
        <li><RouterLink :to="{name: 'user-profile'}">User Profile </RouterLink></li>
        <li><RouterLink :to="{name: 'user-order'}">User Order</RouterLink></li>
        <li><RouterLink :to="{name: 'user-wishlist'}">User Wishlist</RouterLink></li>
    </ul>
    </div>
</template>
<style scoped>
.router-link-exact-active {
    color: red;
    font-weight: bold;
}
</style>