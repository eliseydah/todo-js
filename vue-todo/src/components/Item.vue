<script setup>
defineProps(['todo']);
const emit = defineEmits(['remove-item'])

function onButtonClick() {
    emit('remove-item');
}

</script>
<template>
    <div class="panel">
        <label>
            <input type="checkbox" class="todo-checkbox" v-model="todo.done">
            <span></span>
        </label>
        <p :class="{ done: todo.done }">{{ todo.text }}</p>
        <button @click="onButtonClick" class="todo-delete-button">X</button>
        <!-- @click="removeTodo(todo)" -->
    </div>
</template>