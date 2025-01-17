document.addEventListener('DOMContentLoaded', () => {
    const currentWeatherUrl = "https://api.weatherapi.com/v1/current.json?key=d8068976e5c440ca85a61029251501&q=Austin";
    const forecastWeatherUrl = "https://api.weatherapi.com/v1/forecast.json?key=d8068976e5c440ca85a61029251501&q=Austin&days=7";

    const forecastWrapper = document.querySelector('.forecast-wrapper');
    const forecastHeading = document.querySelector("#forecast h2");
    const dataLogo = document.getElementById('data_logo');
    const headerText = document.querySelector("#nature_img h1");
    const navImage = document.querySelector("#nature_img img");
    const sidebarTempValue = document.querySelector("#temp-value");
    const sidebarConditionValue = document.querySelector("#condition-value");

    // Function to fetch and display the 7-day forecast
    const fetchSevenDayForecast = () => {
        fetch(forecastWeatherUrl)
            .then(response => response.json())
            .then(data => {
                forecastHeading.textContent = "7-Day Weather Forecast";
                forecastWrapper.innerHTML = ""; // Clear previous content

                data.forecast.forecastday.forEach(day => {
                    const date = new Date(day.date);
                    const options = { weekday: 'long', month: 'short', day: 'numeric' };

                    const card = document.createElement('article');
                    card.classList.add('card');

                    card.innerHTML = `
                        <h4>${date.toLocaleDateString('en-US', options)}</h4>
                        <img src="https:${day.day.condition.icon}" alt="${day.day.condition.text}">
                        <dl>
                            <dt>Temperature:</dt>
                            <dd>${day.day.avgtemp_c}°C</dd>
                            <dt>Condition:</dt>
                            <dd>${day.day.condition.text}</dd>
                            <dt>Precipitation:</dt>
                            <dd>${day.day.daily_chance_of_rain}%</dd>
                        </dl>
                    `;

                    forecastWrapper.appendChild(card);
                });
            })
            .catch(error => {
                console.error("Error fetching 7-day forecast:", error);
            });
    };

    // Function to fetch and display the current weather
    const fetchCurrentWeather = () => {
        fetch(currentWeatherUrl)
            .then(response => response.json())
            .then(data => {
                const temp = data.current.temp_c;
                const condition = data.current.condition.text;

                forecastHeading.textContent = "Current Weather Forecast";
                forecastWrapper.innerHTML = `
                    <article class="card current">
                        <h4>${data.location.name}, ${data.location.region}</h4>
                        <img src="https:${data.current.condition.icon}" alt="${condition}">
                        <dl>
                            <dt>Temperature:</dt>
                            <dd>${temp}°C</dd>
                            <dt>Condition:</dt>
                            <dd>${condition}</dd>
                            <dt>Wind:</dt>
                            <dd>${data.current.wind_kph} km/h</dd>
                            <dt>Humidity:</dt>
                            <dd>${data.current.humidity}%</dd>
                        </dl>
                    </article>
                `;

                // Update sidebar temperature and condition
                sidebarTempValue.textContent = `${temp}°C`;
                sidebarConditionValue.textContent = condition;
            })
            .catch(error => {
                console.error("Error fetching current weather data:", error);
            });
    };

    // Header text click: Update text dynamically and load the 7-day forecast
    headerText.addEventListener('click', () => {
        headerText.textContent = "Weather Insights of the Day!";
        fetchSevenDayForecast(); // Load the 7-day forecast
    });

    // Navigation image click: Update image dynamically and fetch current weather
    navImage.addEventListener('click', () => {
        navImage.src = "./assets/new_weather_image.webp"; // Change the image
        fetchCurrentWeather(); // Fetch and display current weather
    });

    // Temperature logo click: Fetch current weather and display it dynamically
    dataLogo.addEventListener('click', fetchCurrentWeather);

    // Forecast logo click: Fetch and display the 7-day forecast
    dataLogo.addEventListener('dblclick', fetchSevenDayForecast);

    // Fetch 7-day forecast on page load as the default view
    fetchSevenDayForecast();
});
