<script setup>
import { ref } from 'vue';
let color = ref('red')
const name = ref('Dasha')
</script>

<template>
  <div :class='color'> hello {{ name }}
  </div>
  <h1>todos</h1>
  <div class="main-content">
    <form class="todo-form" action="">
      <input class="todo-form-input" type="text" placeholder="What needs to be done?" required>
    </form>
  </div>
  <div class="panel">
    <div class="counter">
      <span id="elementCounter">0</span>
      item left
    </div>
    <div class="multi-buttons">

      <input class="all-button" id="radio-1" type="radio" name="button-type" value="all" checked>
      <label for="radio-1"> All </label>
      <input class="active-button" id="radio-2" type="radio" name="button-type" value="active">
      <label for="radio-2">Active</label>
      <input class="completed-button" id="radio-3" type="radio" name="button-type" value="completed">
      <label for="radio-3">Completed</label>
    </div>
    <div class="clear-completed">
      <button class="clear-completed-button" type="button">
        <span id="clearElementCounter">0</span>
        clear completed</button>

    </div>
  </div>
</template>

<style scoped>
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
}

.todo-form-input {
  border: none;
  font-size: 24px;
  margin-left: 20px;

}

.todo-input {
  height: 100%;
  width: 100%;
}

.panel {
  display: flex;
  flex-direction: row;
  color: rgb(171, 167, 167);
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
