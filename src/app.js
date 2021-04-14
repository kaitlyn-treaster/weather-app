function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  let dayIndex = date.getDay();
  let days = [
      "Sunday", 
      "Monday", 
      "Tuesday", 
      "Wednesday", 
      "Thursday", 
      "Friday", 
      "Saturday"
  ];
  let day = days[dayIndex];
  
  return `${day} ${hours}:${minutes}`;
}




function displayTemperature(response) {  
let temperatureElement = document.querySelector("#number");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
let dateElement = document.querySelector("#date");
let currentTime = new Date();
let iconElement = document.querySelector("#icon");


temperatureElement.innerHTML = Math.round(response.data.main.temp);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed);
dateElement.innerHTML = formatDate(currentTime);
iconElement.setAttribute("src", 
`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
iconElement.setAttribute("alt", response.data.weather[0].description);
}


let apiKey = "e29b2285a8a53e39bda51449f0504bf1";
let city = "New York";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
