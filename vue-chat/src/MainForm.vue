<script setup>
import { ref } from 'vue';
let newMessage = ref('');
let selected = ref('Artem');
function sideChoise() {
    if (selected.value === "Artem") {
        return "left"
    } else {
        return "right"
    }
}

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

const emit = defineEmits(['create-message', 'update:selected']);
//emit это переменнная. в ней лежит результат выполнения defineEmits, 
//результат дефайнэмитс это функция которая вызывает события. указаны в скобках.
// 1 аргумент - всегда название события. все оставшиеся - любые данные, которые захочешь перебросить 
function onFormInput() {
    emit('create-message', newMessage.value, selected.value, sideChoise(), messageTime());
    newMessage.value = '';
}
</script>

<template>
    <div class="print-section">
        <select v-model="selected" class="select-choice" name="author" id="author-select">
            <option value='Artem' class="Artem">Artem</option>
            <option value='Daria' class="Daria">Daria</option>
        </select>
        <form class="message" @submit.prevent="onFormInput" action="">
            <input v-model="newMessage" class="message-input" type="text" placeholder="Напишите что-нибудь" required>
            <button class="send-button">
                <span>Отправить</span></button>
        </form>
    </div>
</template>

<style scoped>
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
</style>