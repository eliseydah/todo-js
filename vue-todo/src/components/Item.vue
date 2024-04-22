<script setup>
let todo = { text: 'example text', done: true }
</script>
<template>
    <div class="panel">
        <label>
            <input type="checkbox" class="todo-checkbox" v-model="todo.done">
            <span></span>
        </label>
        <p :class="{ done: todo.done }">{{ todo.text }}</p>
        <button class="todo-delete-button">X</button>
        <!-- @click="removeTodo(todo)" -->
    </div>
</template>