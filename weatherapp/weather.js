const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '031c590329msha616363f424b6d4p1bcdcbjsn89bdf09b67e2',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

function getWeather(city) {
  cityName.innerHTML = city;
  desc.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
  }

  submit.addEventListener("click", () => {
    getWeather(city.value);
  });
  getWeather("Udgir");
  


