const url = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

async function weatherfn() {
    var cityName = document.getElementById("cityName").value;
    const apiURL = `${url}?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        const res = await fetch(apiURL);
        const data = await res.json();

        if (res.ok) {
            console.log(data);
            document.getElementById("city-name").textContent = data.name;
            document.getElementById("temperature").textContent = `Temp: ${data.main.temp} °C`;
            document.getElementById("description").textContent = `Weather: ${data.weather[0].description}`;
            document.getElementById("wind-speed").textContent = `Wind Speed: ${data.wind.speed} m/s`;
            document.getElementById("weather-icon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            const date = new Date();
            document.getElementById("date").textContent = date.toDateString();
        } else {
            alert('City not found. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Something went wrong while fetching weather data.');
    }
}
