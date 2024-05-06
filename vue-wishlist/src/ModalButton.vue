<script setup>
import { ref } from 'vue';
defineProps(['wish']);
const emit = defineEmits(['form-input'])
let wishDescription = ref('');
let wishLink = ref('');
let wishName = ref('');
let selected = ref('');
function onSubmit() {
    emit('form-input', wishDescription.value, wishName.value, wishLink.value, selected.value,)
    wishLink.value = '';
    wishName.value = '';
    wishDescription.value = '';
    selected.value = '';
}
function addInfoInInput(data) {
    wishName.value = data.title;
    wishDescription.value = data.body;

}
function handleClick(event) {
    event.preventDefault()



    fetch(wishLink.value)
        .then((response) => {

            return response.json()
        })
        .then((data) => {

            console.log(data)
            addInfoInInput(data);
            // {title: "foo", body: "bar", userId: 1, id: 101}
        })

}
</script>

<template>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <form class="create-element-form" action="" @submit.prevent="onSubmit">
                        <div class="form-wrap mb-3">
                            <label for="link" class="form-label">Add a link</label>
                            <div class="input-and-button">
                                <input v-model="wishLink" class="link-input form-control" type="text" id="link"
                                    placeholder="Add a link" />
                                <button @click="handleClick" class="fetch btn btn-primary"> For Fetch</button>
                            </div>
                        </div>
                        <div class="form-wrap mb-3">
                            <label for="name" class="form-label"> Write a title </label>
                            <input v-model="wishName" class="form-control title-input" type="text" id="name"
                                placeholder="Напишите название" required>
                        </div>
                        <div class="form-wrap mb-3">
                            <label for="filter-select">Choose a category</label>
                            <select v-model="selected" class="category-choice" name="filter" id="filter-select">
                                <option value=""> Add a category </option>
                                <option class="category-1" value='category-1'>Category 1 </option>
                                <option class="category-2" value='category-2'>Category 2</option>
                                <option class="category-3" value='category-3'>Category 3</option>
                            </select>
                        </div>

                        <div class="form-wrap mb-3">
                            <label for="description" class="form-label">Print a description</label>
                            <input v-model="wishDescription" class="description-input form-control" type="text"
                                id="description" placeholder="Print a description">
                        </div>
                        <div class="form-wrap">
                            <span> Add a picture</span>
                            <input type="file" />
                        </div>
                        <div class="buttons-form-container modal-footer">
                            <button type="button" class="delete-button btn-close" data-bs-dismiss="modal"></button>
                            <button class="send-button btn btn-primary">
                                <span>Отправить</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>ы
</template>

<style scoped></style>