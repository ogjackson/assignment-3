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

const payNow = document.getElementById("payNow");
if (payNow) {payNow.addEventListener("click", () => {

  const addressStorage = {
        address: document.querySelector('input[name="address"]').value,
        city: document.querySelector('input[name="city"]').value,
        postcode: document.querySelector('input[name="postcode"]').value,
    };
        localStorage.setItem("checkoutAddress", JSON.stringify(addressStorage));

        window.location.href = "order-confirmation.html";
    });
}

function loadOrderDetails() {
    const summary = document.getElementById("orderSummary");
    if (!summary) return;

    const orderNumber = 327633280
    const date = new Date();
    const total = document.getElementById("checkoutTotal").textContent;

    summary.children[1].textContent = `Order #: ${orderNumber}`;
    summary.children[2].textContent = `Date: ${date}`;
    summary.children[3].textContent = `Total: $${total}`;

    const checkoutAddress = JSON.parse(localStorage.getItem("checkoutAddress")) || {};

    const shippingAddress = document.querySelector("#shippingAddress");
    shippingAddress.children[1].textContent = checkoutAddress.address || "";
    shippingAddress.children[2].textContent = checkoutAddress.city || "";
    shippingAddress.children[3].textContent = checkoutAddress.postcode || "";
}

loadCheckoutCart()
loadOrderDetails()