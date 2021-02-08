let apiKey = "b3e42e31fac8142ce6cd9098ee00ef9d";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather"
let currentCity;
const weatherData = (location) => {
	let fullUrl= `${apiUrl}?q=${location}&units=metric&appid=${apiKey}`;
	fetch(fullUrl)
		.then(response => response.json())
		.then(data => updated(data));
}
let readLocation = function(){
	currentCity = document.getElementById('city').value;
	console.log(currentCity);
	weatherData(currentCity);
}
let searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", readLocation);

// update html
const updated = (data) =>{
	let temperature = data.main.temp;
	let icon = data.weather[0].icon;
	let main = data.weather[0].main;
	currentCity = data.name || "Unknown location";
	document.getElementById("location").innerText = currentCity;
	document.getElementById("temperature").innerText = temperature;
	document.getElementById("sky").innerText = main;
	document.getElementById("weather-icon").setAttribute("src", "https://openweathermap.org/img/wn/" + `/${icon}.png`);

}

