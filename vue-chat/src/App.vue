<script setup>
import { ref } from 'vue';
import Message from './message.vue';
import MainForm from './MainForm.vue'

let id = 0;

const messages = ref([]);
function addMessage(text, name, side, time) {
  //данные в аргументы приходят из функции дочернего элемента. 
  messages.value.push({
    id: id++, text: text, name: name,
    side: side, time: time
  })

}
function removeMessage(message) {
  messages.value = messages.value.filter((t) => t !== message)
}

</script>

<template>

  <body>
    <div class="chat">
      <Message v-for="message in messages" :key="message.id" :message="message"
        @remove-message="removeMessage(message)" />

    </div>
    <MainForm @create-message="addMessage" />
  </body>

</template>

<style>
body {
  height: 853px;
  width: 100%;
  margin: 0;

}

.chat {
  background-image: url(https://png.pngtree.com/background/20210715/original/pngtree-hand-drawn-cute-seamless-cat-paw-background-picture-image_1282901.jpg);
  background-size: cover;
  height: 90%;
  width: 100%;
  overflow-y: scroll;
}

.right {
  display: grid;
  justify-self: right;
  background-color: rgb(35, 64, 126);
  border-radius: 10px;
  align-self: end;
  width: 20vw;
  margin-right: 40px;
}

.left {
  display: grid;
  justify-self: left;
  background-color: rgb(18, 36, 74);
  border-radius: 10px;
  width: 20vw;
  margin-left: 20px;
}
</style>