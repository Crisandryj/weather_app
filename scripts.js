const apiKey = "40ac864e98b34846a2e172323230512";
const searchInput = document.querySelector("#search");
const weather = document.querySelector(".weather");
const main = document.querySelector("main");

console.log(searchInput);
console.log(searchInput.value);

async function todaysWeather(location) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`,
    { mode: "cors" }
  );
  const json = await response.json();
  const data = await json;
  console.log(data);
  const weatherLocation = document.createElement("div");
  weatherLocation.classList.add(".weatherlocal");
  main.appendChild(weatherLocation);
  weather.textContent = data.current.temp_f;
  weatherLocation.textContent = data.location.country;
}

searchInput.addEventListener("keyup", (e) => {
  todaysWeather(e.target.value);
});
