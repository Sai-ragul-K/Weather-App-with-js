



const getWeatherData = (city) => {
    let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
   const URL = "https://api.openweathermap.org/data/2.5/weather";   
   return fetch (`${URL}?q=${city}&appid=${API_KEY}&units=imperial`)
   .then(response=>response.json()
   .then(data=>data))
   .catch(err=>console.log(err))
   
}
   

const searchCity = async() => {
    const city = document.getElementById('city-input').value;
    //console.log(city)
    //uaing await to print the statement 1 by 1
    const data = await getWeatherData(city)
    showWeatherData(data)

}
// here weather data is parameter
const showWeatherData=(weatherData)=>{
    //console.log(weatherData)
    //getting the data from the API and storing their own value to the element
    document.getElementById("city-name").innerText=weatherData.name;
    document.getElementById("weather-type").innerText=weatherData.weather[0].main;
    document.getElementById("temp").innerText=weatherData.main.temp;
    document.getElementById("min-temp").innerText=weatherData.main.temp_min;
    document.getElementById("max-temp").innerText=weatherData.main.temp_max;
    
}



  
  


