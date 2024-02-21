let button = document.querySelector('.button');
let inputValue = document.querySelector('.city-value');
let nameVal = document.querySelector('.name');
let temp = document.querySelector('.temperature');
let desc = document.querySelector('.description');
let wind = document.querySelector('.wind')
let humidity = document.querySelector('.humidity');
let pressure = document.querySelector('.pressure');
let sunrise = document.querySelector('.sunrise');
let sunset = document.querySelector('.sunset');
let mainContainer = document.querySelector('body');
let displayWeather = document.querySelector('.display-weather')

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
    temp.textContent = Math.round(data.main.temp);
    desc.textContent = data.weather[0].main;
    wind.textContent = data.wind.speed + " m/s";
    humidity.textContent = data.main.humidity + " %";
    pressure.textContent = Math.round(data.main.pressure * 0.750062) + " mm/Hg";
    sunriseTime = data.sys.sunrise;
    sunrise.textContent = convertUnixTimestamp(sunriseTime);
    sunsetTime = data.sys.sunset;
    sunset.textContent = convertUnixTimestamp(sunsetTime);
    console.log(desc.textContent);
    console.log(temp.textContent);
    console.log(wind.textContent);
    console.log(sunset.textContent);
    let weatherCard = data.weather[0].main;
    console.log(weatherCard);
    switch (weatherCard) {
        case 'Clouds':
            mainContainer.className = "";
            mainContainer.classList.add('clouds');
            break
        case 'Clear':
            mainContainer.className = "";
            mainContainer.classList.add('clear');

            break
        case 'Snow':
            mainContainer.className = "";
            mainContainer.classList.add('snow');

            break
        // default:
        //     mainContainer.classList.add('default-image');
    }
}

button.addEventListener('click', function () {
    displayWeather.classList.remove('hidden');
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=8698a1225dd8dbde8eb62a37a25c278e`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            addInfoInInput(data);

        })
        .catch(err => alert('Wrong city name'))

})

// temperature.value = '';
// desc.value = '';
// 

// }