<script setup>
import { ref } from 'vue';
// let selected = ref('filter')
const emit = defineEmits(['selected-value'])
let selected = ref('filter');
function selectedChange() {
    emit('selected-value', selected.value);
    console.log(value)
}
</script>
<!-- v-model="selected" -->
<template>
    <select @change="selectedChange" v-model="selected" class="filter-choice form-select" name="filter"
        id="filter-price-select">
        <option @click="selected = 'filter'" class="filter" value="filter"> Filter</option>
        <option @click="selected = 'filter-price-1'" class="filter-price-1" value="filter-price-1">filter-price-1
        </option>
        <option @click="selected = 'filter-price-2'" class="filter-price-2" value="filter-price-2">filter-price-2
        </option>
        <option @click="selected = 'filter-price-2'" class="filter-price-3" value="filter-price-3">filter-price-3
        </option>
    </select>
</template>

<style scoped></style>