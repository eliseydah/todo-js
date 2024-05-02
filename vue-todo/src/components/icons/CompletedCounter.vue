<script setup>
defineProps(['completedCounter']);

const emit = defineEmits(['remove-completed']);

function onRemoveCompleted() {
    emit('remove-completed');
}
</script>
<template>
    <div class="clear-completed">
        <button @click="onRemoveCompleted" class="clear-completed-button" type="button">
            <span id="clearElementCounter">{{ completedCounter }}</span>
            clear completed</button>

    </div>
</template>
<style>
.clear-completed-button {
    border: 0;
    color: rgb(171, 167, 167);
    background-color: white;
}

.clear-completed-button:hover {
    border: 1px solid #f2e9e9;
    border-radius: 6px;
}
</style>