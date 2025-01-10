Summary of What Happens First and Next: ****

#############################
HTML Sent to the Browser: The browser starts parsing the HTML.
JavaScript is Loaded: Execution stops at the <script> tag to load and run the app1.js file.
JavaScript Executes Synchronously:
Global variables and functions are initialized.
The event listener is added to the button.
displayFruits() is called to display the initial fruit list.
HTML Parsing Resumes: After JS execution, the rest of the HTML is parsed.
DOM is Fully Rendered: The page is now visible with the initial list of fruits.
User Interaction: When the button is clicked, the event listener triggers modifiedFruits(), which updates the fruits array and refreshes the DOM with the modified list.


*****************
Key Points: ###############

HTML Parsing is Blocked by JavaScript:
The browser pauses parsing when it encounters a <script> tag unless it’s defer or async.
JavaScript Executes Line-by-Line:
Functions are only executed when explicitly called (like displayFruits() or via events like button clicks).
DOM Updates in Real-Time:
Changes made by JavaScript (like creating and appending <li> and <img> elements) are immediately reflected in the DOM.

Button and Event Listener: ###############################

JavaScript creates a reference to the button and adds an event listener. When the button is clicked, the modifiedFruits function is called.
modifiedFruits Function:

It creates a local let variable (modifiedFruits) and uses it to hold the updated array order.
The global var fruits array is then updated to reference this new, modified array.
displayFruits() After Modification:

After updating fruits, the displayFruits() function is called to re-render the UI. It uses the updated global fruits array to display the new order in the DOM.
Result:

The local let modifiedFruits exists only within the modifiedFruits function.
The global var fruits is updated and persists outside the function.
The DOM displays the modified array order because displayFruits() uses the updated global fruits.
In short, only the global fruits is updated, and displayFruits() reflects the modified array order. The let modifiedFruits is temporary and discarded after the function finishes.