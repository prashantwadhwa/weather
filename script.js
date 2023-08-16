const API_KEY = "404dd2cdb838f563c81e40f4af46f120";
const API_URL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".searchInput");
const searchBtn = document.querySelector(".searchBtn");

const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");

const loadingContainer = document.querySelector('.loadingContainer');

const err = document.querySelector(".err");

//fetch from the api

async function checkWeather(city) {
  const response = await fetch(API_URL + city + `&appid=${API_KEY}`);

  if (response.status == 404) 
  
  {
    err.style.display = "block";
    weather.style.display = "none";
  } 

  else 
  {
    var data = await response.json();

    // display the data

    console.log(data);
    console.log("api running successfully");

    const cityName = document.querySelector(".city");
    cityName.innerHTML = data.name;

    const temp = document.querySelector(".temp");
    temp.innerHTML = Math.round(data.main.temp) + "°C";

    const humidity = document.querySelector(".humidity");
    humidity.innerHTML = data.main.humidity + "%";

    const wind = document.querySelector(".wind");
    wind.innerHTML = data.wind.speed + " km/h";


    if (data.weather[0].main == "Clouds") 
    {
      weatherIcon.src = "images/clouds.png";
    } 

    else if (data.weather[0].main == "Clear") 
    {
      weatherIcon.src = "images/clear.png";
    } 

    else if (data.weather[0].main == "Rain") 
    {
      weatherIcon.src = "images/rain.png";
    } 

    else if (data.weather[0].main == "Drizzle") 
    {
      weatherIcon.src = "images/drizzle.png";
    } 

    else if (data.weather[0].main == "Mist") 
    {
      weatherIcon.src = "images/mist.png";
    }

    else if (data.weather[0].main == "Mist") 
    {
      weatherIcon.src = "images/mist.png";
    }

    loadingContainer.style.display="none";
    weather.style.display = "block";
    err.style.display = "none";

  }
}


searchBtn.addEventListener("click", () => {
  loadingContainer.style.display="block";
  checkWeather(search.value);
});


