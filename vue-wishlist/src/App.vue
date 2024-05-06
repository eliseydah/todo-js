<script setup>
import { onMounted, ref, computed } from 'vue';
import WishItem from './WishItem.vue';
import BackgroundPicture from './BackgroundPicture.vue';
import ModalButton from './ModalButton.vue';
import CategoryFilter from './CategoryFilter.vue';
let mainPicture = ref('green');
let huivalue = ref('filter');
function changeColor(value) {
  return mainPicture.value = value
}

onMounted(() => {
  const exampleModal = new bootstrap.Modal(document.getElementById('exampleModal'))
})

let id = 0;
const wishes = ref([]);

function addWish(description, name, link, category) {
  wishes.value.push({
    id: id++, description: description, name: name, link: link,
    category: category

  })
  description = '';
  link = '';
  name = '';

}
function removeWish(wish) {
  wishes.value = wishes.value.filter((t) => t !== wish)
}

function huiChangeValue(value) {
  console.log(value)
  return huivalue.value = value;
}
const filteredWishes = computed(function () {
  if (huivalue.value === "filter") {
    return wishes.value
  }
  if (huivalue.value === "filter-price-1") {
    return wishes.value.filter((t) => t.category === "category-1")
  }
  if (huivalue.value === "filter-price-2") {
    return wishes.value.filter((t) => t.category === "category-2")
  }
  if (huivalue.value === "filter-price-3") {
    return wishes.value.filter((t) => t.category === "category-3")
  }
})
</script>

<template>

  <body :class="mainPicture">
    <header class="top">
      <div class="inscription"> &#x270E; MyWishlist</div>
      <div class="theme-choice">
        <div class="color-choice"> Design choice
        </div>
        <BackgroundPicture @picture-background="changeColor" />

      </div>
      <CategoryFilter @selected-value="huiChangeValue" />

      <button class="add-wishes btn btn-warning btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        + Add wishes
      </button>
    </header>
    <main>
      <div class="main-content">

        <ModalButton @form-input="addWish" />


      </div>
      <div class="container">
        <WishItem v-for="wish in filteredWishes" :wish="wish" :key="wish.id" @remove-wish="removeWish(wish)" />

      </div>

    </main>
  </body>
</template>

<style scoped>
body {
  background-color: rgb(2, 21, 5);
  height: 853px;
  background-size: cover;
  width: 100%;
  margin: 0;
}

.top {
  margin: 0;
  height: 100px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10%;
  align-items: center;
  padding: 20px 10px;
  box-sizing: border-box;
}

.rose {
  background-image: url(https://img2.akspic.ru/crops/8/7/7/3/6/163778/163778-pashalnoe_yajco-kulinariya-rozovyj-blyuda-bulyzhnik-2560x1440.jpg);
}

.blue {
  background-image: url(https://img1.akspic.ru/crops/8/5/8/5/7/175858/175858-oblako-atmosfera-poslesvechenie-prirodnyj_landshaft-solnechnyj_svet-2560x1440.jpg);
}

.green {
  background-image: url(https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200);
}

.beige {
  background-image: url(https://img3.akspic.ru/crops/3/3/1/7/87133/87133-rozovyj-gora-vecher-orientir-tsvetok-2560x1440.jpg);
}

.brown {
  background-image: url(https://img2.akspic.ru/crops/5/5/5/1/4/141555/141555-nebo-sumrak-solnce-zolotoj_chas-voshod_solnca-2560x1440.jpg);
}

.yellow {
  background-image: url(https://img2.akspic.ru/crops/1/2/5/1/4/141521/141521-utro-zakat-priroda-voshod_solnca-prirodnyj_landshaft-2560x1440.jpg);
}

input:active,
input:hover,
input:focus,
select {
  outline: 0;
  outline-offset: 0;
}

.main-content {
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  margin-top: 20px;

}


.buttons-form-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
}


.theme-choice {

  width: 100%;
  height: 100%;
  background-color: rgba(113, 187, 187, 0.139);
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.392);
  font-size: 24px;
}

.inscription {
  width: 100%;
  height: 100%;
  font-size: 40px;
  padding-left: 30px;
  color: rgba(255, 255, 255, 0.554);
}

.theme-choice {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.wish-container {
  color: white;
  background-color: rgba(255, 255, 255, 0.315);
  border-radius: 10px;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  display: flex;
  flex-direction: row;
  gap: 15px;
  flex-wrap: wrap;
}

div.unvisible {
  display: none;
}

.fetch {

  width: 30%;
}

.input-and-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
}

.wish-name {
  font-size: 32px;
}

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

.form-wrap {
  display: flex;
  flex-direction: column;
}
</style>
