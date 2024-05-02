<script setup>
// defineProps(['todo']);
const emit = defineEmits(['filter-todo'])

function onButtonChange(value) {
    emit('filter-todo', value);
} 
</script>
<template>
    <div class="multi-buttons">
        <input class="all-button" id="radio-1" type="radio" name="button-type" value="all" checked
            @change="onButtonChange('All')">
        <label for="radio-1"> All </label>
        <input class="active-button" id="radio-2" type="radio" name="button-type" value="active"
            @change="onButtonChange('Active')">
        <label for="radio-2">Active</label>
        <input class="completed-button" id="radio-3" type="radio" name="button-type" value="completed"
            @change="onButtonChange('Completed')">
        <label for="radio-3">Completed</label>

    </div>
</template>
<style>
.multi-buttons input[type=radio] {
    display: none;
}

.multi-buttons label {

    padding: 5px;

}

.multi-buttons input[type=radio]:checked+label {
    border: 1px solid #ecc1c1;
    border-radius: 6px;

}

.multi-buttons label:hover {
    border: 1px solid #f2e9e9;
    border-radius: 6px;
}
</style>