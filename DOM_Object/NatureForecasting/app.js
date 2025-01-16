// Wait for the DOM to fully load before executing any JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Function to change the header text when clicked
    function headerTextClick(event) {
        const headerText = document.getElementById('nature_img').querySelector('h1');
        // Toggle between two text contents
        if (headerText.textContent === "Nature of the Weather") {
            headerText.textContent = "Lives depend on the Nature";
        } else {
            headerText.textContent = "Nature of the Weather";
        }
    }

    // Get the header element (h1) and attach a click event listener to it
    const headerText = document.getElementById('nature_img').querySelector('h1');
    if (headerText) {
        headerText.addEventListener('click', headerTextClick);
    }

    // Function to change the image in the main element when clicked
    function imageClicked(event) {
        const mainImage = document.getElementById('nature_img').querySelector('img');
        // Toggle between two image sources
        if (mainImage.src.includes("weatherImg1.webp")) {
            mainImage.src = "./assets/weather.jpg";
        } else {
            mainImage.src = "./assets/weatherImg1.webp";
        }
    }

    // Get the main image element and attach a click event listener to it
    const mainImage = document.getElementById('nature_img').querySelector('img');
    if (mainImage) {
        mainImage.addEventListener('click', imageClicked);
    }
});

// Wait for the DOM to fully load before executing the weather data logic
document.addEventListener('DOMContentLoaded', () => {
    // Get the logo image inside the weather data section
    const logo = document.querySelector('#weather_data img');
    // Get the container where weather data will be displayed
    const weatherDataElement = document.getElementById('weather_data');

    // Add a click event listener to the logo to fetch weather data
    logo.addEventListener('click', () => {
        // API URL to fetch current weather data for Austin
        const weatherDataUrl = "https://api.weatherapi.com/v1/current.json?key=d8068976e5c440ca85a61029251501&q=Austin";

        // Fetch the weather data from the API
        fetch(weatherDataUrl)
            .then(response => response.json()) // Convert the response to JSON
            .then(data => {
                // Extract temperature and condition from the API response
                const temp = data.current.temp_c;
                const condition = data.current.condition.text;

                // Update the DOM with the fetched weather data
                weatherDataElement.innerHTML = `<img src="./assets/Temp_logo.jpg" alt="Weather Logo" style="cursor: pointer; width: 50px; height: 50px;">
                <br>Current Temp: ${temp}°C, Condition: ${condition}`;
            })
            .catch(error => {
                // Display an error message if the fetch fails
                weatherDataElement.textContent = "Error fetching weather data.";
                console.error(error);
            });
    });
});
