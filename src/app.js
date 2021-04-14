function displayTemperature(response) {
let temperatureElement = document.querySelector("#number");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
temperatureElement.innerHTML = Math.round(response.data.main.temp);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
}




let apiKey = "e29b2285a8a53e39bda51449f0504bf1";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);