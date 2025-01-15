//Create a event handler or listener who take care of the header text click 
function headerTextClick(event) {
    const headerText = document.getElementById('main').querySelector('h1');
    
    // Check the current text and toggle it
    if (headerText.textContent === "Nature of the Weather") {
        headerText.textContent = "Lives depend on the Nature";
    } else {
        headerText.textContent = "Nature of the Weather";
    }
}

// Attach the function to the click event
document.getElementById('main').querySelector('h1').addEventListener('click', headerTextClick);

Event Object in headerTextClick(event):

The browser generates an event object when the click happens.
This object contains details about the event, like the type (click), the target element (in this case, the h1), and more.
The event object is passed to your headerTextClick function automatically when the event fires.
addEventListener():

addEventListener('click', headerTextClick) sets up a listener for the click event on the h1.
When the click happens, it calls headerTextClick and provides the event object.
Logic Inside the Function:

Correctly check headerText.textContent to see if it matches a specific value.
Depending on the condition, the text content is toggled between the two strings.
Execution Context:

The event object is available within the function's execution context because it is passed from the addEventListener.


// change the imag of the main element *****************
function itmageClicked(event) {
    const mainImage = document.getElementById('main').querySelector('img');  
// If the src contains (includes) "weatherImg1.webp", it returns true and executes the block
    if (mainImage.src.includes("weatherImg1.webp")) { // Use `includes` for a partial match
        mainImage.src = "./assets/weather.jpg"; // Use `=` to set the value
    } else {
        mainImage.src = "./assets/weatherImg1.webp"; // Use `=` to set the value
    }
}

// Attach event listener
document.getElementById('main').querySelector('img')
    .addEventListener('click', itmageClicked);

###########
Key Points:
includes: Efficiently checks if the image source contains the specific substring.
Comment: Correctly describes the logic of the if statement.