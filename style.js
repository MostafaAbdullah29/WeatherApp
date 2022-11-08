
const weather={
 apiKey: "9c86f8a6402c03615cb50f6996a22e32",
 fetchWeather: function(city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
    .then((response) => response.json())
    .then((data) => this.displayWeather(data))
    .catch((error) => {
        document.getElementById("errorMessage").innerText = "Sorry! Invalid city name";
     });
 },
 
 displayWeather: function(data) {
    const {name} = data;
    const {description, icon} = data.weather[0];
    const {temp, humidity} = data.main;
    const {speed} = data.wind;
    document.querySelector(".city").innerText ="Weather in " + name; 
    document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + "@2x.png"
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed: " + speed + " Km/h";
    document.body.style.backgroundImage = "url('https://source.unsplash.com/random/?" + name + "')"
    document.getElementById("errorMessage").innerText = "";

 },
 

 search: function () {
    this.fetchWeather(document.querySelector(".searchWeather").value);
 }


};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search").addEventListener("keyup", function(event) {
    if(event.key == "Enter") {
        weather.search();
    }

})