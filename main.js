var formEl = document.querySelector('form')
var inputEl = document.querySelector('input')
var weatherEl = document.getElementById('weather')
console.log (formEl, inputEl, weatherEl)

//attach submit to form event
//fetch weather data if there is a query
//call render weather function
formEl.onsubmit = function(e) {
    e.preventDefault()
    var weatherQuery = inputEl.value.trim()
    if (!weatherQuery) return
    fetch('https://api.openweathermap.org/data/2.5/weather?appid=b3989a6cae8c8d75a992609a4373766d&units=imperial&q=' + weatherQuery)
    .then(function(res) {
    return res.json()
    })
    .then(function(res) {
    renderWeather(res)
    inputEl.value = ""
    })
    .catch (function(err){
    console.log(err)
    })
}
//
function renderWeather(weatherObj) {
    //clear previous 
    weatherEl.innerHTML = ""
    var name = document.createElement('h2')
    var country = document.createElement('h2')
    var forecastEl = document.getElementById('weather')
    name.textContent = weatherObj.name + "" + " , " + weatherObj.sys.country + ""
    forecastEl.appendChild(name)
    forecastEl.appendChild(country)
    //not found
    //current temp
    var currentTemp = document.createElement('p')
    currentTemp.textContent = "The weather today is:  " + weatherObj.main.temp + "°F"
    weatherEl.appendChild(currentTemp)
    //weather description
    weatherObj.weather.forEach(function(weather) {
        var weather_descrip = document.createElement('h2')
        weather_descrip.textContent = weather.description
        weatherEl.appendChild(weather_descrip)
    })
    if (weatherObj.Response === 'False') {
        weatherEl.textContent = "Location not found"
        return
    }
    //icon
        var icon = document.createElement('img')
    icon.src = 'https://openweathermap.org/img/wn/' + weatherObj.weather[0].icon + '@2x.png'
        weatherEl.appendChild(icon)



    //feels like
    var feelsLike = document.createElement('p')
    feelsLike.textContent = "Feels Like: " + weatherObj.main.feels_like + "°F"
    feelsLike.style.fontStyle = 'italic'
    weatherEl.appendChild(feelsLike)


}