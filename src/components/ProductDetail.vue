<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const loaded = ref(false);
const error = ref(false);
const product = ref(null);
const route = useRoute();

watchEffect(() => {
    if (route.params.id) {
        fetch(`/api/products/${route.params.id}.json`)
            .then(res => res.json())
            .then(data => {
                product.value = data;
                loaded.value = true;
            })
            .catch(err => {
                console.error(`error loading product: ${err}`);
                error.value = true;
            });
    }
})
</script>

<template>
    <template v-if="route.params.id">
        <div v-if="loaded">
            <h1>{{ product.id }} - {{ product.name }}</h1>
            <p>Price: {{ product.price }}</p>
        </div>
        <div v-else-if="error">
            <h1>Error loading products: {{ route.params.id }}</h1>
        </div>
        <div v-else>
            <h1>Loading products: {{ route.params.id }}</h1>
        </div>
    </template>
    <template v-else>
        <h1>No products selected.</h1>
    </template>
</template>

<style scoped></style>