some common DOM methods and their uses that you'll frequently encounter while working with the DOM: - ************

1. Selection Methods ***********
Used to locate or select elements in the DOM:

getElementById(id) → Selects an element by its ID.
getElementsByClassName(className) → Selects all elements with a specific class (returns an HTMLCollection).
getElementsByTagName(tagName) → Selects all elements with a specific tag name.
querySelector(selector) → Selects the first element that matches a CSS selector.
querySelectorAll(selector) → Selects all elements that match a CSS selector (returns a NodeList). 


2. Modification Methods **********************
Used to update or manipulate DOM elements:

innerHTML → Sets or gets the HTML content inside an element.
innerText / textContent → Sets or gets the text content of an element.
setAttribute(attr, value) → Adds or modifies an attribute of an element.
removeAttribute(attr) → Removes an attribute from an element.
style.property → Modifies inline styles of an element (e.g., element.style.color = "red").


3. Node Manipulation *************************
Used to create or add/remove nodes (elements):

createElement(tagName) → Creates a new element node (e.g., document.createElement('div')).
appendChild(node) → Appends a child node to a parent element.
insertBefore(newNode, existingNode) → Inserts a node before another node.
removeChild(node) → Removes a child node from its parent.
replaceChild(newNode, oldNode) → Replaces a child node with another node.


4. Event Listener Methods ********************************
Used to add or remove event listeners:

addEventListener(event, handler) → Attaches an event handler to an element.
removeEventListener(event, handler) → Removes an event handler from an element.


5. Traversal Methods ******************************
Used to navigate through DOM elements:

parentNode → Gets the parent of an element.
childNodes → Gets all child nodes (including text nodes).
children → Gets all child elements (excludes text nodes).
firstChild / lastChild → Gets the first/last child node.
nextSibling / previousSibling → Gets the next/previous sibling node.
nextElementSibling / previousElementSibling → Gets the next/previous sibling element.


6. Utility Methods **********************************
Used for other DOM tasks:

contains(node) → Checks if a node is a descendant of another node.
hasChildNodes() → Checks if an element has child nodes.
cloneNode(deep) → Creates a copy of a node (if deep is true, copies all descendants too).
getBoundingClientRect() → Returns the size and position of an element relative to the viewport.
Most Common Use Cases:
Selecting elements to modify or add functionality.
Changing content or attributes dynamically (e.g., updating inner text, adding styles).
Adding/removing elements from the DOM (e.g., building dynamic lists or UI components).
Handling events like clicks, keypresses, etc., with addEventListener.