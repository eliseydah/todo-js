<script setup>
defineProps(['message']);
const emit = defineEmits(['remove-message']);
function onButtonClick() {
    emit('remove-message');
}

</script>

<template>
    <div class="chat-message">
        <div :class="message.side">
            <div class="top-message">
                <span class="author-name"> {{ message.name }}
                </span>
                <span class="time"> {{ message.time }} </span>
                <button class="delete-button" type="button" @click="onButtonClick(message)">&#x2715</button>
            </div>
            <div>
                <p class="chat-message-text"> {{ message.text }}</p>
            </div>

        </div>
    </div>
</template>
<style scoped>
.chat-message {
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;

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

.top-message {
    display: grid;
    grid-template-columns: 6fr 1fr 1fr;
    padding-left: 10px;
}

.chat-message-name {
    margin-left: 20px;
}



.chat-message-text {
    font-size: larger;
    margin-left: 10px;
    margin-top: 0;
    margin-bottom: 5px;
}

.author-name {
    color: rgb(164, 206, 232);
}

.delete-button {
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
}
</style>