<template>
    {{ weatherStore.temperatura }}°
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