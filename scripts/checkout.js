const checkoutCart = `
    <h2>CART</h2>
    <div id="checkoutCartContents"></div>
`

document.getElementById("checkoutCart").innerHTML = checkoutCart;

function loadCheckoutCart() {
    const checkoutCartContents = document.getElementById("checkoutCartContents");
    checkoutCartContents.innerHTML = "";

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
            <strong>${item.name}</strong><br>
            ${item.price}<br>
            ${item.size}<br>
            ${item.material}<br><br>
        `;
        checkoutCartContents.appendChild(cartItem);
    });
};

loadCheckoutCart()