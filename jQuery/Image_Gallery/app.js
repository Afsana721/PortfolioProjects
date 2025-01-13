const fullImages = [
    './assets/Full_Images/fullImg.jpeg',
    './assets/Full_Images/fullimg1.jpeg',
    './assets/Full_Images/fullimg2.jpeg',
    './assets/Full_Images/fullimg3.jpeg',
    './assets/Full_Images/fullimg4.jpeg',
    './assets/Full_Images/fullimg5.jpeg',
    './assets/Full_Images/fullimg6.jpeg',
];



const thumbnails = [
    './assets/thumbnails/img1.jpeg',
    './assets/thumbnails/img6.jpeg',
    './assets/thumbnails/img7.jpeg',
    './assets/thumbnails/img5.jpeg',
    './assets/thumbnails/img16.jpeg',
    './assets/thumbnails/img3.jpeg',
];

// Locate the thumbnails section element by its ID
const thumbnailsSection = $('#thumbnails');

// Loop through the thumbnails array
thumbnails.forEach((thumbnail) => {
    const imgEle = $('<img>');
    imgEle.attr('src', thumbnail).attr('alt', 'Thumbnail Image');
    thumbnailsSection.append(imgEle);
});

// Define the event handler function
const eventHandler = (event) => {
    // Get the index of the clicked thumbnail
    const index = $(event.target).index();

    // Update the #fullImageDisplay content
    $('#fullImageDisplay').html(
        `<img src="${fullImages[index]}" alt="Full Image" />`
    );
};

// Attach the click event to each thumbnail image
$('#thumbnails img').on('click', eventHandler);


let currentIndex = 0; // Start with the first image

// Event handler for "Previous" button
$('#prev').on('click', () => {
    currentIndex = (currentIndex - 1 + fullImages.length) % fullImages.length; // Go to the previous image
    $('#fullImageDisplay').html(
        `<img src="${fullImages[currentIndex]}" alt="Full Image" />`
    );
});

// Event handler for "Next" button
$('#next').on('click', () => {
    currentIndex = (currentIndex + 1) % fullImages.length; // Go to the next image
    $('#fullImageDisplay').html(
        `<img src="${fullImages[currentIndex]}" alt="Full Image" />`
    );
});
