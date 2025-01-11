function checkAndVanish() {
    // Append a message to the body
    $('body').append('<p id="message">Working fine with jQuery integration</p>');

    // Style the message for visibility
    $('#message').css({
        'position': 'fixed',
        'top': '10px',
        'left': '50%',
        'transform': 'translateX(-50%)',
        'background-color': 'lightgreen',
        'color': 'red',
        'padding': '10px',
        'border': '1px solid black',
        'z-index': '1000',
        'font-size': '16px'
    });

    // Remove the message after 5 seconds
    setTimeout(() => {
        $('#message').remove();
    }, 5000); // Extend to 5 seconds for consistency
}

checkAndVanish(); // Call the function

$('img').click(() => {
    // Change the image immediately
    $('img').attr('src', './assets/color_flowers.jpg');
    
    // Show the native alert after 1000ms
    setTimeout(() => {
        alert('The image has been changed!');
    }, 1000);
});
