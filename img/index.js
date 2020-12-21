/** @format */

let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },

  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

let cityName = prompt("Enter a city");

cityName = cityName.toLocaleLowerCase();
cityName = cityName.trim();
let celciusTemp = weather.paris.temp;
let fahrenheitTemp = Math.round((celciusTemp * 9) / 5 + 32);

if (cityName === "paris") {
  alert(
    `The temperature of Paris is ${weather.paris.temp}C (${fahrenheitTemp}F) and the humidity is ${weather.paris.humidity}%`
  );
}
let celciusTemp = weather.tokyo.temp;
let fahrenheitTemp = Math.round((celciusTemp * 9) / 5 + 32);

if (cityName === "tokyo") {
  alert(
    `The temperature of Tokyo is ${weather.tokyo.temp}C (${fahrenheitTemp}F) and the humidity is ${weather.tokyo.humidity}%`
  );
}

if (cityName === "lisbon") {
  alert(
    `The temperature of Lisbon is ${weather.lisbon.temp} and the humidity is ${weather.lisbon.humidity}%`
  );
}
if (cityName === "sanfrancisco" || cityName === "san francisco") {
  alert(
    `The temperature of San Francisco is ${weather["san francisco"].temp} and the humidity is ${weather["san francisco"].humidity}%`
  );
}
if (cityName === "moscow") {
  alert(
    `The temperature of Moscow is ${weather.moscow.temp} and the humidity is ${weather.moscow.humidity}%`
  );
}
