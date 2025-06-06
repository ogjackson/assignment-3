const checkoutCart = `
    <h2>CART</h2>
    <div id="checkoutCartContents"></div>
    <div>
        <p>Subtotal</p>
        <p id="checkoutSubtotal"></p>
        <p>Shipping = 250$</p>
        <p>Total</p>
        <p id="checkoutTotal"></p>
    </div>
`

document.getElementById("checkoutCart").innerHTML = checkoutCart;

function loadCheckoutCart() {
    const checkoutCartContents = document.getElementById("checkoutCartContents");
    checkoutCartContents.innerHTML = "";

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    let subtotal = 0;

    cart.forEach(item => {

        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
            <strong>${item.name}</strong><br>
            ${item.price}<br>
            ${item.size}<br>
            ${item.material}<br><br>
        `;
        checkoutCartContents.appendChild(cartItem);
    });

    document.getElementById("checkoutSubtotal").textContent = `${subtotal}`;
    document.getElementById("checkoutTotal").textContent = `${subtotal + 250}`;
};

document.getElementById("payNow").addEventListener("submit", () => {
    window.location.href = "order-confirmation.html";
});

loadCheckoutCart()