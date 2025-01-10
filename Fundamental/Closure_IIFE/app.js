// Create a function that takes a name as an argument
function tony(name) {
    let fullname = `${name} Jones`; // Combine name variable with string.

    // IIFE to handle the greeting
    return (function details() {
        // Add extra text to h1 text content
        document.getElementById('greeting').textContent = `Hi, I am ${name}`;
        // Add Tony's image inside the image src attribute
        document.getElementById('tony-img').src = "./assets/Bird.jpg";
        // Add p element text content with fullname variable
        document.getElementById('fullname').textContent = `My fullname is ${fullname};`;

        // Return an inner function to get its parent's scope from the JS Closure
        return function showLocation() {
            const mapImg = document.getElementById('map-img');
            if (fullname === `${name} Jones`) {
                mapImg.src = "./assets/Austin_Map.jpg";
                document.getElementById('location').textContent = `My place of living is Austin, Texas.`;
                mapImg.style.display = "block";
                mapImg.style.opacity = "1"; // Fade-in the map
            } else {
                document.getElementById('location').textContent = "You live outside of Austin.";
            }
        };
    })();
}

// To append meaningful explanation to the log
function appendToDebugLog() {
    const debugLog = document.getElementById('debug-log');
    debugLog.innerHTML = ''; // Clear existing log to avoid duplicate entries
    const explanation = document.createElement('p');
    explanation.textContent =
        "Closure in JavaScript gives a facility to get access to the parent properties even after the parent function is removed from the execution stack. This facility remains intact for the child function.";
    debugLog.appendChild(explanation);
}

// Add custom exception logic
function CustomException(message) {
    this.message = message;
    this.name = "CustomException";
}

// Test Closure Access
function testClosureAccess() {
    try {
        // Attempt to access fullname directly
        appendToDebugLog();
        throw new CustomException("Attempted access to fullname failed.");
    } catch (exception) {
        if (exception instanceof CustomException) {
            const notification = document.createElement("div");
            notification.className = "show-notification";
            notification.textContent = `Closure Test Warning: ${exception.message}`;
            document.body.appendChild(notification);

            setTimeout(() => notification.remove(), 3000);
        }
    }
}

const closures = tony('Tony');

// Add event listeners
document.getElementById('show-location').addEventListener('click', closures);
document.getElementById('test-closure').addEventListener('click', testClosureAccess);
