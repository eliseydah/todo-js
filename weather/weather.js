let button = document.querySelector('.button');
let inputValue = document.querySelector('.city-value');
let nameVal = document.querySelector('.name');
let temp = document.querySelector('.temperature');
let desc = document.querySelector('.description');
let wind = document.querySelector('.wind')
let humidity = document.querySelector('.humidity');
let pressure = document.querySelector('.pressure')

function addInfoInInput(data) {
    temp.textContent = "Temperature: " + Math.round(data.main.temp) + " °C";
    desc.textContent = data.weather[0].description;
    wind.textContent = "Wind: " + data.wind.speed + " m/s";
    humidity.textContent = "Humidity: " + data.main.humidity + " %";
    pressure.textContent = "Pressure: " + data.main.pressure + " mm/Hg"
    console.log(desc.textContent);
    console.log(temp.textContent);
    console.log(wind.textContent);
}

button.addEventListener('click', function () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=8698a1225dd8dbde8eb62a37a25c278e`)
        .then((response) => {
            debugger
            return response.json()
        })
        .then((data) => {
            debugger
            console.log(data)
            addInfoInInput(data);
        })
        .catch(err => alert('Wrong city name'))
    // let displayData = (weather) => {
    //     temp.innerText = `${weather.main.temp}°C`
    //     desc.innerText = `${weather.weather[0].description}`
    //     // temperature.textContent = `${weather.main.temp}°C`;
    //     // desc.textContent = `${weather.weather[0].description}`;
    // }
})

// temperature.value = '';
// desc.value = '';
// 

// }