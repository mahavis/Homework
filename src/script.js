function showPosition(position) {
  console.log(position);
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let city = response.data.name;
  let h1 = document.querySelector("#the-city");
  h1.innerHTML = `${city}`;
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${temperature}`;
}

function clickCity(event) {
  event.preventDefault();

  let city = document.querySelector("#input-city-search").value;
  console.log(city);

  let h1 = document.querySelector("#the-city");
  h1.innerHTML = `${city}`;
  let apiKey = "4d6942c0f6f8b66b251e082acf3b3d83";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

let searchForm = document.querySelector("#form-search");
searchForm.addEventListener("submit", clickCity);
