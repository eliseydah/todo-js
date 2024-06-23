<script setup>
defineProps(['sunrise', 'sunset']);
</script>
<template>
    <div class="sun-info">
        <p class=""> <i class="bi bi-sunrise"></i> {{ sunrise }}<span class="sunrise"></span></p>
        <p class=""><i class="bi bi-sunset"></i> {{ sunset }}<span class="sunset"></span></p>
    </div>
</template>
<style scoped>
.sun-info {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
}
</style>