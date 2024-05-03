<script setup>
defineProps(['wish']);
const emit = defineEmits(['remove-wish'])

function onButtonClick() {
    emit('remove-wish');
}

</script>
<template>
    <div class="wish-container card" tabindex="0" style="width: 18rem;">
        <!-- <img src="pic.jpg" class="card-img-top" alt="..."> -->
        <div class="wish-wrap card-body">
            <div class="top-message">
                <div>
                    <h5 class="wish-name card-title">{{ wish.name }}</h5>
                    <p class="wish-category"> {{ wish.category }}</p>
                    <p class="wish-description card-text">{{ wish.description }}</p>
                </div>
                <div class="button-wrap">
                    <a href="#" class="wish-link btn btn-primary">Go somewhere</a>
                    <button class="wish-delete-button" type="button" @click="onButtonClick">&#x2715</button>
                </div>
            </div>

        </div>
    </div>
</template>

<style>
.wish-container.card-img-top {
    width: 70%;
    height: 70%;
}

.wish-container {
    height: 300px;
}

p {
    margin: 0;
    padding: 10px 5px 5px 0px;
}

.top-message {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
}

.wish-category {
    padding: 0px 5px;
}

.wish-wrap {
    width: 100%;
    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
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
</style>