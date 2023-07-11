const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '031c590329msha616363f424b6d4p1bcdcbjsn89bdf09b67e2',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

// dubai

function dubaiWeather() {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=dubai",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      dubai_temp.innerHTML = response.temp;
      dubai_feels.innerHTML = response.feels_like;
      dubai_humidity.innerHTML = response.humidity;
      dubai_min.innerHTML = response.min_temp;
      dubai_max.innerHTML = response.max_temp;
      dubai_windSpeed.innerHTML = response.wind_speed;
      dubai_windDegree.innerHTML = response.wind_degrees;
      dubai_sunrise.innerHTML = response.sunrise;
      dubai_sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
}
dubaiWeather();

// // Bangkok
function bangkokWeather() {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bangkok",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      bangkok_temp.innerHTML = response.temp;
      bangkok_feels.innerHTML = response.feels_like;
      bangkok_humidity.innerHTML = response.humidity;
      bangkok_min.innerHTML = response.min_temp;
      bangkok_max.innerHTML = response.max_temp;
      bangkok_windSpeed.innerHTML = response.wind_speed;
      bangkok_windDegree.innerHTML = response.wind_degrees;
      bangkok_sunrise.innerHTML = response.sunrise;
      bangkok_sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
}
bangkokWeather();

// Cape Town

function capetownWeather() {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Cape Town",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      capetown_temp.innerHTML = response.temp;
      capetown_feels.innerHTML = response.feels_like;
      capetown_humidity.innerHTML = response.humidity;
      capetown_min.innerHTML = response.min_temp;
      capetown_max.innerHTML = response.max_temp;
      capetown_windSpeed.innerHTML = response.wind_speed;
      capetown_windDegree.innerHTML = response.wind_degrees;
      capetown_sunrise.innerHTML = response.sunrise;
      capetown_sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
}
capetownWeather();

// // moscow
function moscowWeather() {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Moscow",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      moscow_temp.innerHTML = response.temp;
      moscow_feels.innerHTML = response.feels_like;
      moscow_humidity.innerHTML = response.humidity;
      moscow_min.innerHTML = response.min_temp;
      moscow_max.innerHTML = response.max_temp;
      moscow_windSpeed.innerHTML = response.wind_speed;
      moscow_windDegree.innerHTML = response.wind_degrees;
      moscow_sunrise.innerHTML = response.sunrise;
      moscow_sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
}
moscowWeather();

// // Beijing

// function beijingWeather() {
//   fetch(
//     "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Beijing",
//     options
//   )
//     .then((response) => response.json())
//     .then((response) => {
//       console.log(response);

//       beijing_temp.innerHTML = response.temp;
//       beijing_feels.innerHTML = response.feels_like;
//       beijing_humidity.innerHTML = response.humidity;
//       beijing_min.innerHTML = response.min_temp;
//       beijing_max.innerHTML = response.max_temp;
//       beijing_windSpeed.innerHTML = response.wind_speed;
//       beijing_windDegree.innerHTML = response.wind_degrees;
//       beijing_sunrise.innerHTML = response.sunrise;
//       beijing_sunset.innerHTML = response.sunset;
//     })
//     .catch((err) => console.error(err));
// }
// beijingWeather();

// // Istanbul

// function istanbulWeather() {
//   fetch(
//     "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Istanbul",
//     options
//   )
//     .then((response) => response.json())
//     .then((response) => {
//       console.log(response);

//       istanbul_temp.innerHTML = response.temp;
//       istanbul_feels.innerHTML = response.feels_like;
//       istanbul_humidity.innerHTML = response.humidity;
//       istanbul_min.innerHTML = response.min_temp;
//       istanbul_max.innerHTML = response.max_temp;
//       istanbul_windSpeed.innerHTML = response.wind_speed;
//       istanbul_windDegree.innerHTML = response.wind_degrees;
//       istanbul_sunrise.innerHTML = response.sunrise;
//       istanbul_sunset.innerHTML = response.sunset;
//     })
//     .catch((err) => console.error(err));
// }
// istanbulWeather();

