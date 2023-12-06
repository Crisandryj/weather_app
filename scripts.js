async function todaysWeather() {
  const response = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=40ac864e98b34846a2e172323230512&q=London&aqi=no",
    { mode: "cors" }
  );
  const json = await response.json();
  const data = await console.log(json);
}

todaysWeather();
