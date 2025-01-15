document.addEventListener('DOMContentLoaded', () => {
    // Change the Header - h1 text content
    function headerTextClick(event) {
        const headerText = document.getElementById('nature_img').querySelector('h1');
        if (headerText.textContent === "Nature of the Weather") {
            headerText.textContent = "Lives depend on the Nature";
        } else {
            headerText.textContent = "Nature of the Weather";
        }
    }

    // Attach the function to the click event
    const headerText = document.getElementById('nature_img').querySelector('h1');
    if (headerText) {
        headerText.addEventListener('click', headerTextClick);
    }

    // Change the image of the main element
    function imageClicked(event) {
        const mainImage = document.getElementById('nature_img').querySelector('img');
        if (mainImage.src.includes("weatherImg1.webp")) {
            mainImage.src = "./assets/weather.jpg";
        } else {
            mainImage.src = "./assets/weatherImg1.webp";
        }
    }

    // Attach event listener
    const mainImage = document.getElementById('nature_img').querySelector('img');
    if (mainImage) {
        mainImage.addEventListener('click', imageClicked);
    }
});
