let apiKey = "d4de090a5eebd44da991d310d3c41858";
let searchHistory = [];

function getLongLat(city) {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey)
    .then((response) => response.json())
    .then((data) => console.log(data));

    let lat = response.coord.lat
    let lon = response.coord.lon
    let fiveDay = `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${apiKey}`;
}

getLongLat("Irvine")