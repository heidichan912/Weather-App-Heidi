/** @format */

let currentTime = new Date();
let icon = document.querySelector(".weather__icon--today");
let apiKey = "9dc8ee199ca2304138fb3602241a70d0";


function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

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
    "December",
  ];

  let currentYear = date.getFullYear();
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();

  let formattedDate = `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;

  return formattedDate;
}

console.log(formatDate(currentTime));

function updateDate() {
  let liveDate = document.querySelector("#livedate");
  liveDate.innerHTML = formatDate(currentTime);
}

updateDate();

function showTemperature(event) {
event.preventDefault();
  
let input = document.querySelector("#city-input");
let city = input.value;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios
  .get(apiUrl)
  .then (function (response){
    
 
  let finalcitydisplay = response.data.name;
  console.log (response.data.name);
  let cityname = document.querySelector("#city-name")
  cityname.innerHTML = finalcitydisplay;


  let temperature = Math.round(response.data.main.temp);
  let temperaturedisplay = document.querySelector("#temperaturedisplay");
  temperaturedisplay.innerHTML = ` ${temperature}`;

  let description = document.querySelector("#description");
  let finaldescription = response.data.weather[0].main;
  description.innerHTML = `${finaldescription}`;

  let humiditydisplay = document.querySelector("#humiditydisplay");
  let humidity = response.data.main.humidity;
  humiditydisplay.innerHTML = `${humidity}`;

  icon.setAttribute(
    "src",
    "img/" +
      response.data.weather[0].main +
      ".png"
  );
  });
 showForecast();

}

let search = document.querySelector("#city-search");
search.addEventListener("submit", showTemperature);

function showForecast (response){

  let input = document.querySelector("#city-input");
  let city = input.value;
  let apiUrlf = `https://api.openweathermap.org/data/2.5/?q=${city}&appid=${apiKey}&units=metric`;

  axios
  .get(apiUrlf)
  .then(function(response) {
    document
      .querySelectorAll(".day__block")
      .forEach(function(element, index) {
        let newday = new Date(response.data.list[index].dt_txt);
        console.log (newday);
        element.querySelector(".day__block-date").innerHTML = formatDate(
          day
        );
        element.querySelector(".day__block-temp").innerHTML = Math.round(
          response.data.list[index].main.temp
        );

        element
          .querySelector(".day__block-image")
          .setAttribute(
            "src",
            "http://openweathermap.org/img/w/" +
              response.data.list[index].weather[0].icon +
              ".png")

          });});}




function showLocationTemperature(response) {
  console.log(response);

  let cityname = document.querySelector("#city-name");

  let secondcitydisplay = `${response.data.name}`;
  let finalcitydisplay =
    secondcitydisplay.charAt(0).toUpperCase() + secondcitydisplay.slice(1);
  cityname.innerHTML = finalcitydisplay;

  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  let temperaturedisplay = document.querySelector("#temperaturedisplay");
  temperaturedisplay.innerHTML = ` ${temperature}`;
  let description = document.querySelector("#description");
  let finaldescription = response.data.weather[0].main;
  description.innerHTML = `${finaldescription}`;

  let humiditydisplay = document.querySelector("#humiditydisplay");
  let humidity = response.data.main.humidity;
  humiditydisplay.innerHTML = `${humidity}`;
}


function handlePosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "9dc8ee199ca2304138fb3602241a70d0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showLocationTemperature);
}

function positionForTemperature() {
  navigator.geolocation.getCurrentPosition(handlePosition);
}

let currentlocationbutton = document.querySelector("#currentlocationbutton");
currentlocationbutton.addEventListener("click", positionForTemperature);
