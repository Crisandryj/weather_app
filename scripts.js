const apiKey = "40ac864e98b34846a2e172323230512";
const searchInput = document.querySelector("#search");
const weather = document.querySelector(".weather");

console.log(searchInput);
console.log(searchInput.value);

async function todaysWeather(location) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`,
    { mode: "cors" }
  );
  const json = await response.json();
  const data = await json;
  weather.textContent = data.current.temp_f;
}

searchInput.addEventListener("keyup", (e) => {
  todaysWeather(e.target.value);
});
