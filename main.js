const parameters = {
  latitude: 25.20,
  longitude: 55.27,
  current_weather: "true",
//   temperature_unit: "fahrenheit"
};

async function retrieveWeather(params) {
  const url = `https://api.open-meteo.com/v1/forecast${params}`;

//   try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`Error received: ${response.status}`);
    }

    const data = await response.json();
    return data;
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
}


// composes a string of the format ?latitude=25.2&longitude=55.27&current_weather=true
// from the parameters passed
function composeParameters(params) {
  let paramString = "";
  for (const key in params) {
    const separator = paramString.length === 0 ? "?" : "&";
    paramString += separator + key + "=" + params[key];
  }

  return paramString;
}

// fetch the weather data
async function fetchData() {
//   try {
    const params = composeParameters(parameters);
    const data = await retrieveWeather(params);
    console.log("Weather data:", data);
    return await data
//   } catch (error) {
//     console.error("Failed to retrieve weather data:", error.message);
//   }
}


// Input fetched API date to the DOM

async function displayToDom(){
  const weather = await fetchData()
  console.log(weather)
  let temperature = document.querySelector("#temperature");
  temperature.textContent = weather.current_weather.temperature
}
displayToDom()


// let temperature = document.querySelector("#temperature");
// temperature.textContent = weather.current_weather