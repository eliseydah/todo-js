<script setup>
import { ref } from 'vue';
import Message from './message.vue';

let id = 0;
let newMessage = ref('');
const messages = ref([]);
let selected = ref('Artem');

function addZero(num) {
  return num < 10 ? "0" + num : num;
}
function messageTime() {
  let currentTime = new Date()
  let hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  let newTime = addZero(hours) + ":" + addZero(minutes);
  return newTime;
}
function sideChoise() {
  if (selected.value === "Artem") {
    return "left"
  } else {
    return "right"
  }
}
//  selected.value === "Artem" ? "left" : "right",
function addMessage() {
  messages.value.push({
    id: id++, text: newMessage.value, name: selected.value,
    side: sideChoise(), time: messageTime()
  })
  newMessage.value = ''
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
      <!-- <div class="chat-message">
        <div :class="message.side" v-for="message in messages" :key="message.id">
          <div class="top-message">
            <span class="author-name"> {{ message.name }}
            </span>
            <span class="time"> {{ message.time }} </span>
            <button class="delete-button" type="button" @click="removeMessage(message)">&#x2715</button>
          </div>
          <div>
            <p class="chat-message-text"> {{ message.text }}</p>
          </div>

        </div> -->
      <!-- </div> -->

    </div>
    <div class="print-section">
      <select v-model="selected" class="select-choice" name="author" id="author-select">
        <option value='Artem' class="Artem">Artem</option>
        <option value='Daria' class="Daria">Daria</option>
      </select>
      <form class="message" @submit.prevent="addMessage" action="">
        <input v-model="newMessage" class="message-input" type="text" placeholder="Напишите что-нибудь" required>
        <button class="send-button">
          <span>Отправить</span></button>
      </form>
    </div>

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

form {
  margin: 0;
}

.print-section {
  background-color: rgb(18, 36, 74);
  width: 100%;
  height: 10%;
  display: grid;
  padding: 10px 0px;
  box-sizing: border-box;
  grid-template-columns: 1fr 3fr;
  position: fixed;
}

.message {
  display: grid;
  grid-template-columns: 2fr 1fr;
}

.message-input {
  border: none;
  border-radius: 15px;
  font-size: 24px;
  padding: 0px 20px;
}

input:active,
input:hover,
input:focus,
.select-choice {
  outline: 0;
  outline-offset: 0;
}


.send-button,
.select-choice {
  padding: 10px 10px;
  margin: 0px 20px;
  color: rgb(255, 255, 255);
  background-color: rgb(2, 16, 40);
  border-radius: 15px;
  border: 0;
  font-size: 24px;

}

/* .chat-message {
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  gap: 10px;

/* } */

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

/* .top-message {
  display: grid;
  grid-template-columns: 6fr 1fr 1fr;
  padding-left: 10px;
} */

/* .chat-message-name {
  margin-left: 20px;
} */



/* .chat-message-text {
  font-size: larger;
  margin-left: 10px;
  margin-top: 0;
  margin-bottom: 5px;
}

.author-name {
  color: rgb(164, 206, 232);
}  */

/* .delete-button {
  color: rgba(212, 25, 25, 0.81);
  border: 0;
  background-color: rgba(77, 119, 93, 0);
  opacity: 0;
}

.right:hover .delete-button {
  opacity: 1;
}

.left:hover .delete-button {
  opacity: 1;
} */
</style>