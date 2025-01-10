// create an array var variable that takes three fruits images. 
var fruits = ["./assets/apple.jpeg", "./assets/banana.jpg", "./assets/mango.jpg"];


// Function to display the fruits array in the DOM
function displayFruits() {
  //located ul element
    const ulEle = document.querySelector('ul'); 
      ulEle.innerHTML = "";   //clear previous fruits contents. 
 
    //create li and img elements for each fruit
    fruits.forEach((fruit) => {
      //create li element and img element
      const liEle = document.createElement('li');
      const imgEle = document.createElement('img');

      //attached image URL as fruits individual item as fruit to the img src attribute
      imgEle.src = fruit;
      imgEle.alt = "fruit images";    // for accessibility stand point for user agent

      // add image element into the li and li into the ul element as their child.
      liEle.appendChild(imgEle);
      ulEle.appendChild(liEle);
    });
}

/* to modify the var fruits array items from inside modify funciton as it a 
local let variable */
function modifiedFruits() {

/*use map to create a modified version of the fruits array where we can change 
the index position of the items */
//use funciton expression 
  let modifiedFruits = fruits.map((fruit, index) => {

    switch(index) {
      case 0: return "./assets/mango.jpg";
      case 1: return "./assets/apple.jpeg";
      case 2: return  "./assets/banana.jpg";
      default: return fruit;

    }
  });

//update the global fruits arry with the local let variable inside the function. 
  fruits = modifiedFruits;
  displayFruits(); // use to refress the page to display with modified array. 
}

//add event listener to handle click event when button is clicked 
document.querySelector('button').addEventListener( "click", modifiedFruits);

//initial rerendering of the fruits array. 
displayFruits();

