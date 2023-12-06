function todaysWeather() {
  fetch(
    "http://api.weatherapi.com/v1/current.json?key=40ac864e98b34846a2e172323230512&q=London&aqi=no",
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
    });
}
async function todaysWeatherAsync() {
  const response = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=40ac864e98b34846a2e172323230512&q=London&aqi=no",
    { mode: "cors" }
  );
  const json = await response.json();
  const data = await console.log(json);
}

todaysWeatherAsync();
