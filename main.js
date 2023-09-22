const btn = document.querySelector('#btn')
const input = document.querySelector('#input')

const locationParameters = {
  q: "London, UK",
  format: "json",
};

const weatherParameters = {
  latitude: 25.2,
  longitude: 55.27,
  current_weather: "true",
  //   temperature_unit: "fahrenheit"
};

async function retrieveDataFromApi(url, params) {
  //   try {
  const response = await fetch(`${url}${params}`);

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

// fetch the location data
async function fetchLocation() {
  //   try {
    // compose location parameters
    const locationParams = composeParameters(locationParameters);
    // get location data from api
    const locationData = await retrieveDataFromApi( "https://nominatim.openstreetmap.org/search", locationParams );
    return await locationData;
    //   } catch (error) {
    //     console.error("Failed to retrieve weather data:", error.message);
    //   }
}


// fetch the weather data
async function fetchWeather() {
  //   try {
    const weatherParams = composeParameters(weatherParameters);
    // get weather data from api
    const data = await retrieveDataFromApi( "https://api.open-meteo.com/v1/forecast", weatherParams );
    // console.log("Weather data:", data);
    return await data;
    //   } catch (error) {
    //     console.error("Failed to retrieve weather data:", error.message);
    //   }
}

// Input fetched API date to the DOM

async function displayToDom() {
    console.log(input)
    locationParameters.q = input.value
    // get location data from api
    const locationData = await fetchLocation();

    // update teh lat and long in the weather data parameters object
    weatherParameters.latitude = locationData[0].lat;
    weatherParameters.longitude = locationData[0].lon;

    // update location on screen
    document.querySelector('#location').textContent = locationData[0].display_name;

    // get weather data from api
    const weather = await fetchWeather();
    console.log(weather);
    let temperature = document.querySelector("#temperature");
    let windSpeed = document.querySelector("#windSpeed");
    let description = document.querySelector("#description");
    let weatherImage = document.querySelector('#weather-img')

    // update weather properties on the screen
    temperature.textContent = weather.current_weather.temperature;
    windSpeed.textContent = weather.current_weather.windspeed;
    const weatherDesc = WMOData[weather.current_weather.weathercode]
    console.log(weatherDesc)

    let timeOfDay = 'night'
    if(weather.current_weather.is_day) {
      timeOfDay = 'day'
    }
    weatherImage.src = weatherDesc[timeOfDay].image
    description.textContent = weatherDesc[timeOfDay].description;

    // 
    temperature.classList.remove('hide');
    windSpeed.classList.remove('hide');
    description.classList.remove('hide');
    weatherImage.classList.remove('hide');
    
    
}


// form functionality
btn.addEventListener('click', displayToDom)



