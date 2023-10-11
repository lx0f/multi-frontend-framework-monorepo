<script setup>
import { ref } from 'vue';

let count = ref(0);

function increment() {
    count.value++;
}
</script>

<template>
    <h1>Vue Counter</h1>
    <h4>Counter {{ count }}</h4>
    <button @click="increment">Add</button>
</template>