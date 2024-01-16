(function(){

    'use strict';

    const apiKey = "3c280b9421b7fa0b9f3433af5d179b9c";

    const weatherData = document.getElementById('weather-data');

    const cityData = document.getElementById('city-input');

    const form = document.querySelector('form');

    form.addEventListener('submit', e => {
        e.preventDefault();
        const cityValue = cityData.value;
        getWeatherData(cityValue);
    })

    async function getWeatherData(cityValue) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)

            if (!response) {
                throw new Error("Network response was not ok")
            }

            const data = await response.json();

            const tempT = Math.round(data.main.temp);
            const descripT = data.weather[0].description;
            const icon = data.weather[0].icon;
            const details = [
                `Feels like: ${Math.round(data.main.feels_like)}`,
                `Humidity: ${data.main.humidity}%`,
                `Wind speed: ${data.wind.speed} m/s`

            ]
            weatherData.querySelector('.icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt = "Weather icon">`;

            weatherData.querySelector('.temperature').textContent = `${tempT}°C`;

            weatherData.querySelector('.description').textContent = descripT;

            weatherData.querySelector('.details').innerHTML = details.map(detail => `<div>${detail}</div>`).join('');

        } 
        catch (error) {
            weatherData.querySelector('.icon').innerHTML = "";

            weatherData.querySelector('.temperature').textContent = "";

            weatherData.querySelector('.description').textContent = "Not a city";

            weatherData.querySelector('.details').innerHTML = "";
        }
    }

}())
