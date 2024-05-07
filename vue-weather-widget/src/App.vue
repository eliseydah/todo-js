<script setup>
import { onMounted, ref, computed } from 'vue';
import temperature from './temperature.vue';
import humidity from './humidity.vue';
import pressure from './pressure.vue';
import description from './description.vue'
import wind from './wind.vue'
import sunInfo from './sunInfo.vue';
let weather = ref({});
let mainContentDisplay = ref('hidden');
let mainPicture = ref('default-image');
let cityName = ref('');

function convertUnixTimestamp(timestamp) {
  // Создание объекта Date, используя timestamp (в миллисекундах)
  var date = new Date(timestamp * 1000);

  // Получение компонентов времени: часы, минуты и секунды
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  // var seconds = "0" + date.getSeconds();

  // Форматирование времени
  var formattedTime = hours + ':' + minutes.substr(-2);

  return formattedTime;
}


function addInfoInInput(data) {
  weather.value.temp = Math.round(data.main.temp);
  weather.value.desc = data.weather[0].main;
  weather.value.wind = data.wind.speed + " m/s";
  weather.value.humidity = data.main.humidity + " %";
  weather.value.pressure = Math.round(data.main.pressure * 0.750062) + " mm/Hg";
  let sunriseTime = data.sys.sunrise;
  weather.value.sunrise = convertUnixTimestamp(sunriseTime);
  let sunsetTime = data.sys.sunset;
  weather.value.sunset = convertUnixTimestamp(sunsetTime);

  weather.value.weatherCard = data.weather[0].main;

  switch (weather.value.weatherCard) {
    case 'Clouds':
      mainPicture.value = 'clouds';

      break
    case 'Clear':
      mainPicture.value = 'clear';

      break
    case 'Snow':
      mainPicture.value = 'snow';
      break

    case 'Rain':
      mainPicture.value = 'rain';
      break

    default:
      mainPicture.value = 'default-image';

  }
}

function weatherInfo() {

  mainContentDisplay.value = 'display-weather';
  console.log(mainContentDisplay.value)
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=8698a1225dd8dbde8eb62a37a25c278e`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data)
      addInfoInInput(data);
    })
    .catch(err => {
      console.error(err)
      alert('Wrong city name')
    })

}

</script>

<template>

  <body :class="mainPicture">
    <div class="container">
      <div class="city-input">
        <input v-model="cityName" type="text" class="city-value" placeholder="Enter Location">
        <button @click="weatherInfo" class="button"><i class="bi bi-search"></i></button>
      </div>
      <div :class="mainContentDisplay">
        <temperature :temperature="weather.temp" />
        <humidity :humidity="weather.humidity" />
        <!-- <h3 class=""><i class="bi bi-thermometer-half"></i>{{ weather.temp }}<span class="temperature"></span> °C</h3> -->
        <!-- <p class=""> <i class="bi bi-droplet"></i> {{ weather.humidity }}<span class="humidity"></span></p> -->
        <!-- <p class="description">{{ weather.desc }}</p> -->
        <!-- <p class=""> <i class="bi bi-chevron-compact-down"></i> {{ weather.pressure }}<span class="pressure"> </span>
        </p> -->
        <description :description="weather.desc" />
        <pressure :pressure="weather.pressure" />
        <wind :wind="weather.wind" />
        <sunInfo :sunrise="weather.sunrise" :sunset="weather.sunset" />

        <!-- <p class=""><i class="bi bi-wind"></i> {{ weather.wind }}<span class="wind"></span> </p> -->
        <!-- <div class="sun-info">
          <p class=""> <i class="bi bi-sunrise"></i> {{ weather.sunrise }}<span class="sunrise"></span></p>
          <p class=""><i class="bi bi-sunset"></i> {{ weather.sunset }}<span class="sunset"></span></p>
        </div> -->
      </div>
    </div>
  </body>
</template>

<style scoped>
.container {
  background-color: rgba(35, 36, 37, 0.695);
  display: flex;
  flex-direction: column;
  width: auto;
  border: none;
  padding: 30px 50px;
  box-sizing: border-box;
  align-items: center;
}

body {
  width: 100%;
  height: 100%;
  position: fixed;
  margin: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  overflow: auto;
  color: white;
  font-size: 20px;
}

div.hidden {
  display: none;
}

.clouds {
  background-image: url(https://img1.akspic.ru/crops/3/7/6/1673/1673-kuchevoe_oblako-dozhd-meteorologicheskoe_yavlenie-groza-atmosfera_zemli-3840x2160.jpg);
  background-size: cover;
}

.snow {
  background-image: url(https://img3.akspic.ru/crops/9/7/5/8/5/158579/158579-zima-sneg-rastenie-mir-prirodnyj_landshaft-3840x2160.jpg);
  background-size: cover;
}

.clear {
  background-image: url(https://img2.akspic.ru/crops/9/6/4/0/40469/40469-zakat-atmosfera-rassvet-solnce-poslesvechenie-3840x2160.jpg);
  background-size: cover;
}

.rain {
  background-image: url(https://media.istockphoto.com/id/1429701799/photo/raindrops-on-asphalt-rain-rainy-weather-downpour.jpg?s=612x612&w=0&k=20&c=w3lp5jGXo71lNrZeg9iWX1Gv8gSEz8fjHtvpneEjdyw=);
  background-size: cover;
}

.default-image {
  background-image: url(https://img2.akspic.ru/crops/8/0/5/2508/2508-solnce-noch-gorizont-spokojnyj-vecher-3840x2160.jpg);
  background-size: cover;
}

.city-input {
  display: flex;
  align-items: center;
  gap: 5px;
}

input {
  border: 0;
  border-radius: 15px;
  padding: 5px 10px;
}

.city-input button {
  background-color: rgb(255, 255, 255);
  width: 25px;
  height: 25px;
  border: 0;
  border-radius: 20px;
}

.h3 {
  margin: 0;
  padding: 0;
}

/* .sun-info {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
} */

.display-weather {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  gap: 20px;
}
</style>
