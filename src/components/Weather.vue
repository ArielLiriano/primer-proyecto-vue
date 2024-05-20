<template>
    <h3>La temperatura actual es: {{ weatherStore.temperatura }}°</h3>
</template>
<script setup>
import { useWeather } from '@/composables/useWeather';
import { onMounted } from 'vue';
import { useWheaterStore } from '@/stores/weatherStore';

const weatherStore = useWheaterStore();

onMounted(() => {
    useWeather();
})
</script>
<style scoped>
</style>