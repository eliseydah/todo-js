<script setup>
defineProps(['humidity']);
</script>
<template>
    <p class=""> <i class="bi bi-droplet"></i> {{ humidity }}<span class="humidity"></span></p>

</template>
<styles scoped>
</styles>