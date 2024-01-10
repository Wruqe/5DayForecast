var WeatherApi = "e277e161206ae6458468cfb215fddd13"
var WeatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}"
const CityInput = document.querySelector("#city-input")
const SearchBtn = document.querySelector("#search-btn")
const input = document.querySelector("input")
h3 = document.querySelector(".recents")
h3.innerHTML = `Last Search: ${localStorage.getItem("recentSearch")}`
const clearLocalStorage = document.querySelector(".cLocal")

function citySearch (city){
    var RequestUrl = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=" + WeatherApi + "&units=imperial";
fetch(RequestUrl)
.then(function(response){
    return response.json()
}).then(function(data){
    console.log(data)
    forecast(data.coord.lon, data.coord.lat)
    document.querySelector(".city").textContent = data.name
    var iconUrl = "https://openweathermap.org/img/wn/" + data.weather[0].icon +"@2x.png"
    document.querySelector(".weather-sum").textContent = "Tempature " + data.main.temp + "°F"
    document.querySelector(".card-city").textContent = data.name
    document.querySelector(".icon-current") 
    document.querySelector(".humidity-current").textContent = `Humidity: ${data.main.humidity}% 💦`
    document.querySelector(".wind-current").textContent = `Wind Speed: ${data.wind.speed} MPH `
    console.log(iconUrl)
})
}
citySearch("Muskegon")


function forecast (longitude, latitude) {
    var RequestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat="+ latitude +"&lon=" + longitude +"&appid=" + WeatherApi + "&units=imperial";
    fetch(RequestUrl)
    .then(function(response){
        // console.log(response)
        return response.json()
    }).then(function(data){
        console.log(data)
        document.querySelector(".card-city1").textContent = data.city.name;
        document.querySelector(".date-1").textContent = ` Date: ${data.list[6].dt_txt}`
        document.querySelector(".weather-temp1").textContent = `Tempature ${data.list[6].main.temp}°F`
        document.querySelector(".humidity-1").textContent = `humidity: ${data.list[6].main.humidity}% 💦`
        document.querySelector(".wind-1").textContent = `Wind Speed: ${data.list[6].wind.speed} MPH`
        document.querySelector(".icon-1").setAttribute("src",`https://openweathermap.org/img/wn/${data.list[6].weather[0].icon}.png`)
        // day 2
        document.querySelector(".card-city2").textContent = data.city.name;
        document.querySelector(".date-2").textContent = ` Date: ${data.list[14].dt_txt}`
        document.querySelector(".weather-temp2").textContent = `Tempature ${data.list[14].main.temp}°F`
        document.querySelector(".humidity-2").textContent = `humidity: ${data.list[14].main.humidity}% 💦`
        document.querySelector(".wind-2").textContent = `Wind Speed: ${data.list[14].wind.speed} MPH`
        document.querySelector(".icon-2").setAttribute("src",`https://openweathermap.org/img/wn/${data.list[14].weather[0].icon}.png`)
        // day 3
        document.querySelector(".card-city3").textContent = data.city.name;
        document.querySelector(".date-3").textContent = ` Date: ${data.list[22].dt_txt}`
        document.querySelector(".weather-temp3").textContent = `Tempature ${data.list[22].main.temp}°F`
        document.querySelector(".humidity-3").textContent = `humidity: ${data.list[22].main.humidity}% 💦`
        document.querySelector(".wind-3").textContent = `Wind Speed: ${data.list[22].wind.speed} MPH`
        document.querySelector(".icon-3").setAttribute("src",`https://openweathermap.org/img/wn/${data.list[22].weather[0].icon}.png`)
        // day 4
        document.querySelector(".card-city4").textContent = data.city.name;
        document.querySelector(".date-4").textContent = ` Date: ${data.list[30].dt_txt}`
        document.querySelector(".weather-temp4").textContent = `Tempature ${data.list[30].main.temp}°F`
        document.querySelector(".humidity-4").textContent = `humidity: ${data.list[30].main.humidity}% 💦`
        document.querySelector(".wind-4").textContent = `Wind Speed: ${data.list[30].wind.speed} MPH`
        document.querySelector(".icon-4").setAttribute("src",`https://openweathermap.org/img/wn/${data.list[30].weather[0].icon}.png`)
        // day 5

        document.querySelector(".card-city5").textContent = data.city.name;
        document.querySelector(".date-5").textContent = ` Date: ${data.list[38].dt_txt}`
        document.querySelector(".weather-temp5").textContent = `Tempature ${data.list[38].main.temp}°F`
        document.querySelector(".humidity-5").textContent = `humidity: ${data.list[38].main.humidity}% 💦`
        document.querySelector(".wind-5").textContent = `Wind Speed: ${data.list[38].wind.speed} MPH`
        document.querySelector(".icon-5").setAttribute("src",`https://openweathermap.org/img/wn/${data.list[38].weather[0].icon}.png`)
        
    })
}
// local storage 
input.addEventListener("keyup", localSearches)
function localSearches() {
    localStorage.setItem("recentSearch", input.value)
    console.log(localStorage.getItem("recentSearch"));
    h3.innerHTML = localStorage.getItem("recentSearch")
}
// clear local storage 
clearLocalStorage.addEventListener("click", function () {
    // Clear the local storage
    localStorage.clear();
    h3.innerHTML = "Local storage cleared!";
})
SearchBtn.addEventListener("click", function(){
    var city = CityInput.value
    console.log(city)
    citySearch(city)
})
CityInput.addEventListener("keydown", function(event){
    if(event.key === 'Enter')
    var city = CityInput.value
    console.log(city)
    citySearch(city)
})