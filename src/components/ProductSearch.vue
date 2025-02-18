<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const products = ref([]);
const route = useRoute();

const search = route.query.product || '';

watchEffect(() => {
    fetch("/api/products/products.json")
    .then(response => response.json())
    .then(products => products.filter(product => product.name.includes(search)))
    .then(data => products.value = data);
});
</script>

<template>
    <h1>Products</h1>
    <table>
        <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Price</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
            </tr>
        </tbody>
    </table>
</template>


<style scoped>

</style>