<script setup>
defineProps(['counter', 'completedCounter']);

const emit = defineEmits(['remove-completed']);

function onRemoveCompleted() {
    emit('remove-completed');
}
</script>
<template>


    <div class="counter">
        <span id="elementCounter">{{ counter }}</span>
        item left
    </div>
    <div class="clear-completed">
        <button @click="onRemoveCompleted" class="clear-completed-button" type="button">
            <span id="clearElementCounter">{{ completedCounter }}</span>
            clear completed</button>

    </div>
</template>