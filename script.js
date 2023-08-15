const apiKey = '0b8fac424dae27dadac9e38d0d79bd8f';
const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast';

function fetchWeather() {
    const city = document.getElementById('city').value;
    const url = `${baseUrl}?q=${city}&units=metric&appid=${apiKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let output = '<h2>Forecast:</h2>';
            data.list.forEach(item => {
                output += `
                <div class="forecast-item">
                    <img src="https://openweathermap.org/img/w/${item.weather[0].icon}.png" alt="${item.weather[0].description}">
                    <strong>Date and Time:</strong> ${item.dt_txt}<br>
                    <strong>Temperature:</strong> ${item.main.temp}°C<br>
                    <strong>Weather:</strong> ${item.weather[0].description}<br>
                    <hr>
                </div>`;
            });
            document.getElementById('weatherData').innerHTML = output;
        })
        .catch(err => {
            console.error(err);
            alert('Error fetching weather data. Please try again.');
        });
}

