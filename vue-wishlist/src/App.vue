<script setup>
import { onMounted, ref, computed } from "vue";
import WishItem from "./WishItem.vue";
import BackgroundPicture from "./BackgroundPicture.vue";
import ModalButton from "./ModalButton.vue";
import CategoryFilter from "./CategoryFilter.vue";
let mainPicture = ref("green");
let selectedvalue = ref("filter");
function changeColor(value) {
  return (mainPicture.value = value);
}
async function fetchWishes() {
  try {
    const response = await fetch("http://localhost:3000/wishes", {
      method: "GET",
    });

    wishes.value = await response.json();
  } catch (err) {
    console.error(
      "Wish fetching has failed, the server is not accessible!",
      err
    );
  }
}
async function createWish(description, name, link, category) {
  try {
    await fetch("http://localhost:3000/wishes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: name,
        description: description,
        link: link,
        category: category,
      }),
    });
  } catch (err) {
    console.error("Add wish has failed!", err);
  }
}
async function deleteWish(id) {
  try {
    await fetch(`http://localhost:3000/wishes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error("Wish remove has failed!", err);
  }
}
onMounted(fetchWishes);

// let id = 0;
const wishes = ref([]);

async function addWish(description, name, link, category) {
  await createWish(description, name, link, category);
  await fetchWishes();
}

async function removeWish(wish) {
  await deleteWish(wish.id);
  await fetchWishes();
}
function selectedChangeValue(value) {
  console.log(value);
  return (selectedvalue.value = value);
}
const filteredWishes = computed(function () {
  if (selectedvalue.value === "filter") {
    return wishes.value;
  }
  if (selectedvalue.value === "filter-price-1") {
    return wishes.value.filter((t) => t.category === "category-1");
  }
  if (selectedvalue.value === "filter-price-2") {
    return wishes.value.filter((t) => t.category === "category-2");
  }
  if (selectedvalue.value === "filter-price-3") {
    return wishes.value.filter((t) => t.category === "category-3");
  }
});
</script>

<template>
  <body :class="mainPicture">
    <header class="top">
      <div class="inscription">&#x270E; MyWishlist</div>
      <div class="theme-choice">
        <div class="color-choice">Design choice</div>
        <BackgroundPicture @picture-background="changeColor" />
      </div>
      <CategoryFilter @selected-value="selectedChangeValue" />

      <button
        class="add-wishes btn btn-warning btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        + Add wishes
      </button>
    </header>
    <main>
      <div class="main-content">
        <ModalButton @form-input="addWish" />
      </div>
      <div class="container">
        <WishItem
          v-for="wish in filteredWishes"
          :wish="wish"
          :key="wish.id"
          @remove-wish="removeWish(wish)"
        />
      </div>
    </main>
  </body>
</template>

<style scoped>
body {
  background-color: rgb(2, 21, 5);
  margin: 0;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.top {
  margin: 0;
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
  padding-left: 1rem;
  color: rgba(255, 255, 255, 0.554);
}

.theme-choice {
  display: flex;
  flex-direction: column;
  justify-content: center;
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

.wish-name {
  font-size: 32px;
}

p {
  margin: 0;
  padding: 10px 5px 5px 0px;
}

.wish-category {
  padding: 0px 5px;
}
</style>
