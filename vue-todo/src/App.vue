<script setup>
import { ref, computed, onMounted } from 'vue'
import Item from './components/Item.vue'
import Counter from './components/icons/Counter.vue'
import CompletedCounter from './components/icons/CompletedCounter.vue'
import Radiobuttons from './components/icons/Radiobuttons.vue'
const newTodo = ref('')
const todos = ref([])
let todobuttonfilter = ref('All')

function changeValue(value) {
  todobuttonfilter.value = value
}

const filteredTodos = computed(function () {
  if (todobuttonfilter.value === 'All') {
    return todos.value
  }
  if (todobuttonfilter.value === 'Active') {
    return todos.value.filter((t) => !t.completed)
  }
  if (todobuttonfilter.value === 'Completed') {
    return todos.value.filter((t) => t.completed)
  }

  return []
})
const counter = computed(function () {
  return todos.value.filter((t) => !t.completed).length
})
const completedCounter = computed(function () {
  return todos.value.filter((t) => t.completed).length
})

async function addTodo() {
  await createTodo()
  await fetchTodos()
  newTodo.value = ''
}
function completedTodo(id, completed, checkValue) {
  console.log('find completed todo')
  console.log(checkValue.value)
  console.log(id)
}
async function removeCompletedTodo() {
  let completedTodos = todos.value.filter((t) => t.completed)
  await Promise.all(
    completedTodos.map(async (todo) => {
      return deleteTodo(todo.id)
    })
  )
  await fetchTodos()
}

// add backend call here!
async function removeTodo(todo) {
  console.log(todo)
  await deleteTodo(todo.id)
  await fetchTodos()
}

// api calls
async function fetchTodos() {
  try {
    const response = await fetch('http://localhost:3000/todos', {
      method: 'GET'
    })

    todos.value = await response.json()
  } catch (err) {
    console.error('Todo fetching has failed, the server is not accessible!', err)
  }
}
async function deleteTodo(id) {
  try {
    await fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (err) {
    console.error('Todo remove has failed!', err)
  }
}
async function createTodo() {
  try {
    await fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: newTodo.value, completed: false })
    })
  } catch (err) {
    console.error('Add todo has failed!', err)
  }
}

// fetch todo list from backend
onMounted(fetchTodos)
</script>

<template>
  <h1>todos</h1>
  <div class="main-content">
    <form class="todo-form" @submit.prevent="addTodo" action="">
      <input
        v-model="newTodo"
        class="todo-form-input"
        type="title"
        placeholder="What needs to be completed?"
        required
      />
    </form>
  </div>

  <Item
    v-for="todo in filteredTodos"
    :key="todo.id"
    :todo="todo"
    @remove-item="removeTodo(todo)"
    @complete-todo="completedTodo"
  />

  <div class="panel">
    <Counter :counter="counter" />

    <Radiobuttons @filter-todo="changeValue" />

    <CompletedCounter
      :completedCounter="completedCounter"
      @remove-completed="removeCompletedTodo(todo)"
    />
  </div>
</template>

<style scoped>
.completed {
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
</style>
