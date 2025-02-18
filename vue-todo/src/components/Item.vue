<script setup>
import { ref } from 'vue'
const props = defineProps(['todo'])
const emit = defineEmits(['remove-item', 'complete-todo'])

function onButtonClick() {
  emit('remove-item')
}
let checkValue = ref(false)
function completeTodo() {
  checkValue.value = !checkValue.value
  emit('complete-todo', props.todo.id, props.todo.completed, checkValue)
}
</script>
<template>
  <div class="panel">
    <label>
      <!-- v-model="todo.completed" -->
      <input @change="completeTodo" type="checkbox" class="todo-checkbox" />
      <span></span>
    </label>
    <p :class="{ completed: checkValue }">{{ todo.title }}</p>
    <button @click="onButtonClick" class="todo-delete-button">X</button>
    <!-- @click="removeTodo(todo)" -->
  </div>
</template>
<style scoped>
.completed {
  text-decoration: line-through;
}

.todo-checkbox {
  display: none;
}

.todo-delete-button {
  font-size: 20px;
  padding-right: 10px;
  border: 0;
  color: rgb(210, 116, 147);
  background-color: white;
  margin-right: 10px;
  opacity: 0;
}

.panel:hover .todo-delete-button {
  opacity: 1;
}

.panel label span {
  height: 12px;
  width: 12px;
  border: 1px solid rgb(67, 216, 159);
  border-radius: 100%;
  display: inline-block;
  position: relative;
  background-color: #fff;
  padding: 3px;
}

[type='checkbox']:checked + span:before {
  /* <-- ставим иконку, когда чекбокс включен  */
  content: '\2713';
  position: absolute;
  top: -5px;
  left: 2px;
  font-size: 20px;
  color: rgb(141, 235, 199);
}

.line-through {
  text-decoration: line-through;
  color: rgb(184, 180, 180);
}
</style>
