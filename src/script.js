//Current Day and Time

let currentDate = document.querySelector("#current-date");
let currentTime = document.querySelector("#current-time");
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let date = now.getDate();

if (hours < 10) {
  hours = `0${hours}`;
}

if (minutes < 10) {
  minutes = `0${minutes}`;
}

let dayToday = now.getDay();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let thisMonth = now.getMonth();

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

currentDate.innerHTML = `${days[dayToday]}, ${months[thisMonth]} ${date}`;
currentTime.innerHTML = `${hours}:${minutes}`;

//Search Engine -- Temp + City

function searchCity(event) {
  event.preventDefault();
  let currentCity = document.querySelector("#search-city");
  let city = document.querySelector("#current-city");
  city.innerHTML = currentCity.value;
  let apiKey = "7882cc418788de0e994c37cdce235ed9";
  let cityName = `${currentCity.value}`;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

let element = document.querySelector("button");
element.addEventListener("click", searchCity);

function showTemperature(response) {
  console.log(response);
  let temperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = `${temperature}°C`;
  let city = document.querySelector("#current-city");
  city.innerHTML = response.data.name;
}

// Bonus - Current LOC

function currentLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "7882cc418788de0e994c37cdce235ed9";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

function getCity() {
  navigator.geolocation.getCurrentPosition(currentLocation);
}

let currentLoc = document.querySelector("#current-button");
currentLoc.addEventListener("click", getCity);
