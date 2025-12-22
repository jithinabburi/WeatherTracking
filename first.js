const apiKey = "b0df3a8b5c6f21d564978c6f6c62c752"; // 🔑 API key

function getWeather() {
    const city = document.getElementById("city").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const p = document.querySelectorAll(".p1");

            p[0].innerText = "DATE: " + new Date().toDateString();
            p[1].innerText = "Temperature: " + data.main.temp + " °C";
            p[2].innerText = "Humidity: " + data.main.humidity + " %";
        })
        .catch(error => alert("City not found"));
}
