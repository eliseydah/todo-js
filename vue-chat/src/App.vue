<script setup>
import { ref, onMounted } from "vue";
import Message from "./message.vue";
import MainForm from "./MainForm.vue";

let id = 0;

const messages = ref([]);
async function addMessage(text, title, side, time) {
  await createMessage(text, title, side, time);
  await fetchChat();
}
async function fetchChat() {
  try {
    const response = await fetch("http://localhost:3000/chat", {
      method: "GET",
    });

    messages.value = await response.json();
  } catch (err) {
    console.error(
      "Chat fetching has failed, the server is not accessible!",
      err
    );
  }
}
async function createMessage(text, title, side, time) {
  try {
    await fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
        title: title,
        side: side,
        time: time,
      }),
    });
  } catch (err) {
    console.error("Add message has failed!", err);
  }
}
async function deleteMessage(id) {
  try {
    await fetch(`http://localhost:3000/chat/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error("Message remove has failed!", err);
  }
}

async function removeMessage(message) {
  await deleteMessage(message.id);
  await fetchChat();
}
onMounted(fetchChat);
</script>

<template>
  <body>
    <div class="chat">
      <Message
        v-for="message in messages"
        :key="message.id"
        :message="message"
        @remove-message="removeMessage(message)"
      />
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
