function addingItemToCart(event) {
    const button = event.target;
    const itemElement = button.closest('li');

    // Extract the item details
    const itemName = itemElement.querySelector('h3').textContent;
    const itemPrice = itemElement.querySelector('p:nth-of-type(3)').textContent.split('$')[1];
    const itemImage = itemElement.querySelector('img').src;

    // Send the item to the server
    fetch('/add-to-cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ itemName, itemPrice, itemImage }),
    })
        .then(response => {
            if (response.ok) {
                // Redirect to the cart page after successful addition
                window.location.href = "/cart";
            } else {
                alert("Failed to add item to cart.");
            }
        })
        .catch(error => console.error("Error:", error));
}
