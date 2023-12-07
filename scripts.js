const apiKey = "40ac864e98b34846a2e172323230512";
const searchInput = document.querySelector("#search");
const weather = document.querySelector(".weather");
const main = document.querySelector("main");

async function todaysWeather(location) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`,
    { mode: "cors" }
  );
  const json = await response.json();
  const data = await json;
  showLocationTemp(data);
}

function showLocationTemp(data) {
  const weatherLocation = document.createElement("div");
  weatherLocation.classList.add(".weatherlocal");
  main.insertBefore(weatherLocation, main.childNodes[2]);
  const country = data.location.country;
  weather.textContent = data.current.temp_f;
  weatherLocation.textContent = country;
}

searchInput.addEventListener("keyup", (e) => {
  todaysWeather(e.target.value);
  weather.textContent = "";
});
