Image Gallery Application ***********

This project demonstrates a simple image gallery application built using HTML, CSS, JavaScript, and jQuery. The gallery dynamically loads thumbnail images and allows users to display a full-sized version of an image upon clicking a thumbnail.

Functionality *****************

Dynamic Thumbnail Rendering:

Thumbnails are stored in an array and dynamically added to the #thumbnails section using jQuery.
Each thumbnail is represented as an <img> element with its src and alt attributes set programmatically.
Interactive Image Display:

Clicking on a thumbnail dynamically updates the #fullImageDisplay section with the corresponding full-sized image.
The full-sized image is retrieved based on the index of the clicked thumbnail, which matches the index in the fullImages array.
Responsive and Styled Layout:

The layout is styled using CSS to ensure a visually appealing and responsive design.
Hover effects are added to thumbnails for better user interaction.
Key Features
Dynamic Content Creation: Thumbnails and full images are managed via JavaScript arrays.
Event Handling: jQuery's on() method is used to handle click events.
Efficient DOM Manipulation: html() and append() methods ensure dynamic updates to the DOM.
Index Matching: The index() method is utilized to map thumbnails to their corresponding full-sized images.
Code Breakdown
Thumbnail Rendering:

Uses a forEach loop to iterate over the thumbnails array and dynamically create <img> elements.
Appends these elements to the #thumbnails section.
Event Handler:

Retrieves the clicked thumbnail's index using index() and updates the #fullImageDisplay section using html().
Styling:

CSS ensures consistent thumbnail sizing, responsive layout, and hover effects.