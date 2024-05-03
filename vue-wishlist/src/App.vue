<script setup>
import { onMounted, ref, computed } from 'vue';
import WishItem from './WishItem.vue';
let mainPicture = ref('green');
function changeColor(buttonClass) {
  return mainPicture.value = buttonClass
}

onMounted(() => {
  const exampleModal = new bootstrap.Modal(document.getElementById('exampleModal'))
})
let wishDescription = ref('');
let wishLink = ref('');
let wishName = ref('');
let id = 0;
const wishes = ref([]);
let selected = ref('');
let selectedPrice = ref('filter');

function addWish() {
  wishes.value.push({
    id: id++, description: wishDescription.value, name: wishName.value, link: wishLink.value,
    category: selected.value

  })
  wishDescription.value = '';
  wishLink.value = '';
  wishName.value = '';

}
function removeWish(wish) {
  wishes.value = wishes.value.filter((t) => t !== wish)
}
const filteredWishes = computed(function () {
  if (selectedPrice.value === "filter") {
    return wishes.value
  }
  if (selectedPrice.value === "filter-price-1") {
    return wishes.value.filter((t) => t.category === "category-1")
  }
  if (selectedPrice.value === "filter-price-2") {
    return wishes.value.filter((t) => t.category === "category-2")
  }
  if (selectedPrice.value === "filter-price-3") {
    return wishes.value.filter((t) => t.categor === "category-3")
  }
})

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

  <body :class="mainPicture">
    <header class="top">
      <div class="inscription"> &#x270E; MyWishlist</div>
      <div class="theme-choice">
        <div class="color-choice"> Design choice
        </div>
        <div class="buttons">
          <button class="color-button rose" @click="changeColor('rose')"></button>
          <button class="color-button blue" @click="changeColor('blue')"></button>
          <button class="color-button" id="green" @click="changeColor('green')"></button>
          <button class="color-button beige" @click="changeColor('beige')"></button>
          <button class="color-button brown" @click="changeColor('brown')"></button>
          <button class="color-button yellow" @click="changeColor('yellow')"></button>
        </div>
      </div>
      <select v-model="selectedPrice" class="filter-choice form-select" name="filter" id="filter-price-select">
        <option @click="selectedPrice = 'filter'" class="filter" value="filter"> Filter</option>
        <option @click="selectedPrice = 'filter-price-1'" class="filter-price-1" value="filter-price-1">filter-price-1
        </option>
        <option @click="selectedPrice = 'filter-price-2'" class="filter-price-2" value="filter-price-2">filter-price-2
        </option>
        <option @click="selectedPrice = 'filter-price-3'" class="filter-price-3" value="filter-price-3">filter-price-3
        </option>
      </select>
      <button class="add-wishes btn btn-warning btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        + Add wishes
      </button>
    </header>
    <main>
      <div class="main-content">




        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">

                <form class="create-element-form" action="" @submit.prevent="addWish">
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
                    <input v-model="wishDescription" class="description-input form-control" type="text" id="description"
                      placeholder="Print a description">
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
        </div>
      </div>
      <div class="container">
        <WishItem v-for="wish in filteredWishes" :wish="wish" :key="wish.id" @remove-wish="removeWish(wish)" />
        <!-- <template id="wish-template"> -->
        <!-- <div class="wish-container card" tabindex="0" style="width: 18rem;" v-for="wish in filteredWishes"
          :key="wish.id"> -->
        <!-- <img src="pic.jpg" class="card-img-top" alt="..."> -->
        <!-- <div class="wish-wrap card-body">
            <div class="top-message">
              <div>
                <h5 class="wish-name card-title">{{ wish.name }}</h5>
                <p class="wish-category"> {{ wish.category }}</p>
                <p class="wish-description card-text">{{ wish.description }}</p>
              </div>
              <div class="button-wrap">
                <a href="#" class="wish-link btn btn-primary">Go somewhere</a>
                <button class="wish-delete-button" type="button" @click="removeWish(wish)">&#x2715</button>
              </div>
            </div>

          </div> -->
        <!-- </div> -->
      </div>
      <!-- </template> -->
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

.button-theme-choice {
  border: 0;
}

.color-button {
  border: 0;
  width: 15px;
  height: 15px;
  /* background-color: rgb(0, 102, 255); */
}

.rose {
  /* background-color: pink; */
  background-image: url(https://img2.akspic.ru/crops/8/7/7/3/6/163778/163778-pashalnoe_yajco-kulinariya-rozovyj-blyuda-bulyzhnik-2560x1440.jpg);
}

.blue {
  /* background-color: rgb(61, 162, 216); */
  background-image: url(https://img1.akspic.ru/crops/8/5/8/5/7/175858/175858-oblako-atmosfera-poslesvechenie-prirodnyj_landshaft-solnechnyj_svet-2560x1440.jpg);
}

.green {
  /* background-color: rgb(7, 43, 7); */
  background-image: url(https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200);
}

.beige {
  /* background-color: beige; */
  background-image: url(https://img3.akspic.ru/crops/3/3/1/7/87133/87133-rozovyj-gora-vecher-orientir-tsvetok-2560x1440.jpg);
}

.brown {
  /* background-color: rgb(46, 24, 24); */
  background-image: url(https://img2.akspic.ru/crops/5/5/5/1/4/141555/141555-nebo-sumrak-solnce-zolotoj_chas-voshod_solnca-2560x1440.jpg);
}

.yellow {
  /* background-color: yellow; */
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

/* .create-element-form, */
.theme-choice {
  /* padding: 20px 30px; */
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
  /* height: 300px; */
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

/* 
.cat-1 .wish-category {
  background-color: rgba(34, 139, 34, 0.246);
  border-radius: 5px;

}

.cat-2 .wish-category {
  background-color: rgba(255, 217, 0, 0.263);
  border-radius: 5px;
}

.cat-3 .wish-category {
  background-color: rgba(235, 77, 77, 0.257);
  border-radius: 5px;
} */

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

.form-wrap {
  display: flex;
  flex-direction: column;
}
</style>
