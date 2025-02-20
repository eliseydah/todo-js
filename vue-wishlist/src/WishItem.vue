<script setup>
defineProps(['wish']);
const emit = defineEmits(['remove-wish'])

function onButtonClick() {
    emit('remove-wish');
}

</script>
<template>
    <div class="wish-container card" tabindex="0" style="width: 18rem;">
        <div class="wish-wrap card-body">
            <div class="top-message">
                <div>
                    <h5 class="wish-name card-title">{{ wish.title}}</h5>
                    <p class="wish-category"> {{ wish.category }}</p>
                    <p class="wish-description card-text">{{ wish.description }}</p>
                </div>
                <div class="button-wrap">
                    <a :href="wish.link" class="wish-link btn btn-primary">Go somewhere</a>
                    <button class="wish-delete-button" type="button" @click="onButtonClick">&#x2715</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.card-body{
  display: flex;
  flex-direction: row;

}
.wish-container {
  color: white;
  background-color: rgba(255, 255, 255, 0.315);
  border-radius: 10px;
  width: 30%;
}
.button-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.wish-delete-button {
    padding: 10px;
    font-size: 24px;
    color: rgba(212, 25, 25, 0.595);
    border: 0;
    background-color: rgba(252, 252, 252, 0);
}

.top-message{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
