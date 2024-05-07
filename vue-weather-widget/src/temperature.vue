<script setup>
defineProps(['temperature']);

</script>
<template>
    <h3 class=""><i class="bi bi-thermometer-half"></i>{{ temperature }}<span class="temperature"></span> °C</h3>
</template>
<style scoped></style>