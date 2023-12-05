async function todaysWeather() {
  const response = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=40ac864e98b34846a2e172323230512&q=Flushing&aqi=no",
    { mode: "cors" }
  );
  const weather = console.log(response);
  return weather;
}

todaysWeather();
