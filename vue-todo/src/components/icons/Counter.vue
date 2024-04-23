<script setup>
defineProps(['counter']);
</script>

<template>
    <div class="counter">
        <span id="elementCounter">{{ counter }}</span>
        item left
    </div>

</template>