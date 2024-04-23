<script setup>
import { ref, computed } from 'vue';
import Item from './components/Item.vue';
import Counter from './components/icons/Counter.vue';
import CompletedCounter from './components/icons/CompletedCounter.vue';
import Radiobuttons from './components/icons/Radiobuttons.vue';
let color = ref('red')
const name = ref('Dasha')
let id = 0;
const newTodo = ref('')
const todos = ref([])
let todobuttonfilter = ref('All');

const filteredTodos = computed(function () {
  if (todobuttonfilter.value === "All") {
    return todos.value
  }
  if (todobuttonfilter.value === "Active") {
    return todos.value.filter((t) => !t.done)
  }
  if (todobuttonfilter.value === "Completed") {
    return todos.value.filter((t) => t.done)
  }

})
const counter = computed(function () {
  return todos.value.filter((t) => !t.done).length
})
const completedCounter = computed(function () {
  return todos.value.filter((t) => t.done).length
})

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false })
  newTodo.value = ''
}
function removeCompletedTodo(todo) {
  return todos.value = todos.value.filter((t) => !t.done)
}
function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo);
}
</script>

<template>
  <h1>todos</h1>
  <div class="main-content">
    <form class="todo-form" @submit.prevent="addTodo" action="">
      <input v-model="newTodo" class="todo-form-input" type="text" placeholder="What needs to be done?" required>
    </form>
  </div>


  <Item v-for="todo in filteredTodos" :key="todo.id" :todo="todo" @remove-item="removeTodo(todo)" />

  <div class="panel">
    <Counter :counter="counter" />
    <div class="multi-buttons">
      <input class="all-button" id="radio-1" type="radio" name="button-type" value="all" checked
        @change="todobuttonfilter = 'All'">
      <label for="radio-1"> All </label>
      <input class="active-button" id="radio-2" type="radio" name="button-type" value="active"
        @change="todobuttonfilter = 'Active'">
      <label for="radio-2">Active</label>
      <input class="completed-button" id="radio-3" type="radio" name="button-type" value="completed"
        @click="todobuttonfilter = 'Completed'">
      <label for="radio-3">Completed</label>

    </div>
    <CompletedCounter :completedCounter="completedCounter" @remove-completed="removeCompletedTodo(todo)" />
    <!-- <Counter :completedCounter="completedCounter" /> -->

    <!-- <div class="clear-completed">
      <button class="clear-completed-button" type="button">
        <span id="clearElementCounter">{{ completedCounter }}</span>
        clear completed</button> -->

  </div>
  <!-- </div> -->
</template>

<style scoped>
.done {
  text-decoration: line-through;
}

.red {
  color: red;
}

h1 {
  font-size: 100px;
  color: rgb(230, 214, 187);
  font-weight: lighter;
  width: 200px;
  margin: 0px auto;
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 600px;
  height: 60px;
  box-shadow: 1px 1px 10px rgb(221, 215, 215);
  box-sizing: content-box;
}

.todo-form {
  width: 100%;
}

.todo-form-input {
  border: none;
  font-size: 24px;
  width: 100%;
  padding: 0;
}


input:active,
input:hover,
input:focus {
  outline: 0;
  outline-offset: 0;
}

.panel {
  display: flex;
  flex-direction: row;
  color: rgb(102, 99, 99);
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  width: 600px;
  height: 60px;
  border: rgb(229, 226, 221) 0.5px solid;
  box-shadow: 10px px 10px rgb(221, 215, 215);
}

.clear-completed-button {
  border: 0;
  color: rgb(171, 167, 167);
  background-color: white;
}

.multi-buttons input[type=radio] {
  display: none;
}

.multi-buttons label {

  padding: 5px;

}

.multi-buttons input[type=radio]:checked+label {
  border: 1px solid #ecc1c1;
  border-radius: 6px;

}

.multi-buttons label:hover {
  border: 1px solid #f2e9e9;
  border-radius: 6px;
}
</style>
