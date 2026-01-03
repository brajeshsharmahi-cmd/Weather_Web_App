function getWeather() {
    let city = document.getElementById('city').value;
    let apikey = "432532afa0ca6735f8ed2f3b6fc19bbc";

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
        .then(responce => responce.json())
        .then(data => {
            document.getElementById("result").innerHTML = `
                <h3>${data.name}</h3>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            document.getElementById("result").innerHTML = "City not Found";
        });
}