const fruits = ["./assets/apple.jpeg", "./assets/banana.jpg", "./assets/mango.jpg"];
const fruitsObjects = [
  { name: "apple", img: "./assets/apple.jpeg" },
  { name: "banana", img: "./assets/banana.jpg" },
  { name: "mango", img: "./assets/mango.jpg" },
];

// Function to display fruitsObjects array in the DOM
function displayConstVariable() {
  const ulEle = document.querySelector('ul');
  ulEle.innerHTML = ""; // Clear previous content
  fruitsObjects.forEach((fruit) => {
    const liEle = document.createElement('li');
    const imgEle = document.createElement('img');
    imgEle.src = fruit.img; // Use the img property from fruitsObjects
    imgEle.alt = fruit.name; // Use the name property for alt text
    liEle.appendChild(imgEle);
    ulEle.appendChild(liEle);
  });
}

// Function to modify fruits array (will throw an error for const variable)
function modifiedFruits() {
  try {
    fruits = fruits.map((fruit, index) => { // This throws an error
      switch (index) {
        case 0:
          return "./assets/mango.jpg";
        case 1:
          return "./assets/apple.jpeg";
        case 2:
          return "./assets/banana.jpg";
        default:
          return fruit;
      }
    });
  } catch (error) {
    console.error("Cannot reassign a const variable:", error.message);
    alert("Const variable is immutable and cannot be modified!");
    return; // Prevent further execution
  }
}

// Function to modify properties of objects inside fruitsObjects array
function modifyObjectProperties() {
  fruitsObjects.forEach((fruit, index) => {
    switch (index) {
      case 0:
        fruit.name = "mango";
        fruit.img = "./assets/mango.jpg";
        break;
      case 1:
        fruit.name = "apple";
        fruit.img = "./assets/apple.jpeg";
        break;
      case 2:
        fruit.name = "banana";
        fruit.img = "./assets/banana.jpg";
        break;
    }
  });
  displayConstVariable(); // Update the DOM with modified fruitsObjects
}

// Add event listeners to buttons
document.querySelector('#modification').addEventListener('click', modifiedFruits);
document
  .querySelector('#modify_objeceProperty')
  .addEventListener('click', modifyObjectProperties);

// Initial rendering of the fruitsObjects array
displayConstVariable();
