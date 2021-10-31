var formE1 = document.querySelector('form')
var inputE1 = document.querySelector('input')
var weatherE1 = document.getElementById('weather')
console.log (formE1, inputE1, weatherE1)

//attach submit to form event
//fetch weather data if there is a query
//call render weather function
formE1.onsubmit = function(e) {
    e.preventDefault()
    var weatherQuery = inputE1.value.trim()
    if (!weatherQuery) return
    fetch("https://api.openweathermap.org/data/2.5/weather?appid=b3989a6cae8c8d75a992609a4373766d&units=imperial&q=" + weatherQuery)
    .then(function(res) {
     return res.json()
    })
    .then(function(res) {
     renderWeather(res)
     inputE1.value = ""
    })
    .catch (function(err){
    console.log(err)
    })
}
//
function renderWeather(weatherObj) {
    //clear previous 
    weatherE1.innerHTML = ""
    //weather description
    weatherObj.weather.forEach(function(weather) {
        var weather_descrip = document.createElement('h2')
        weather_descrip.textContent = weather.description
        weatherE1.appendChild(weather_descrip)
    }
    )}