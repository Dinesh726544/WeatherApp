const api_key = "5854125a94507d4332c04b7c9980daf0";

const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inputBox = document.querySelector(".input-field input")
const inputBtn = document.querySelector("button")
weatherIcon = document.querySelector(".main-image") 
async function checkWeather(city) {
    try {
        const responce = await fetch(url + city + `&appid=${api_key}`)
        var data = await responce.json();
        console.log(data)
    

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = (data.main.temp + `<sup>o</sup>c`)
        document.querySelector(".pra p:nth-child(1)").innerHTML = (data.main.humidity + "%")
        document.querySelector(".speed p:nth-child(1)").innerHTML = (data.wind.speed + "km/hr")

        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "weather_app/images/clouds.png"
        }else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "weather_app/images/clear.png"
        }else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "weather_app/images/drizzle.png"
        }else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "weather_app/images/mist.png"
        }else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "weather_app/images/rain.png"
        }else if(data.weather[0].main == "Snow") {
            weatherIcon.src = "weather_app/images/snow.png"
        }else {
            weatherIcon.src = "weather_app/images/wind.png"

        }

        document.querySelector(".to-hide").style.display = "block"
        

        }catch (error) {
        document.querySelector(".to-hide").style.display = "none"

        alert("Oops! Typo error: City name input box does not exist")
        console.log("invalid url:--",error)
    }
    
}

inputBtn.addEventListener("click", () => {
    checkWeather(inputBox.value)
})


