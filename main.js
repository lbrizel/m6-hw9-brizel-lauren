var formE1 = docment.querySelector('form')
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
    fetch(api.openweathermap.org/data/2.5/weather?q=YOURQUERY&units=imperial&appid=1dcd4bcfc67e05de26c5c34496a4fe7e)
.then(function(res){
    return res.json()
})
.then(function(res){
    console.log(res) {
        renderWeather(res)
        inputE1.value= ""
})
.catch (fucntion(err){
    console.log(err)
})
}

function renderWeather(weatherObj) {
    //clear previous weather
    weatherE1.innerHTML = ""
    //handle weather not found
    if (weatherObj.Response ===='False'){
        weatherE1.textContent = 'Weather not found'
        return
    }

//render current weather 
var currentWeatherE1 = document.createElement('h2')
currentWeatherE1.textContent = weatherObj.weather
weatherE1.appendChild(currentWeatherE1)

//render weather icon
var weathericon = document.createElement('img')
temperature.textContent = 'Current' + weatherObj.main.temp
weatherE1.appendChild(temperature)

//render feels like temp
var feelsLike == document.createElement('p')
feelsLike.style.fontStyle = 'italic'
feelsLike.textContent = 'Feels like' + weatherObj.main.feels_like
weatherE1.appendChild(feels)
}