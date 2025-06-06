const header = `
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="shop.html">Shop</a></li>
        <li><a href="sale.html">Sale</a></li>
        <li><a href="about.html">About</a></li>
     </ul>

    <a href="index.html" class="logo">proudfurniture</a>

    <div>
        <img class="icon" id="searchButton" src="assets/common/search-black.svg"></img>
        <input type="text" id="searchBox" placeholder="Search...">
        <img class="icon" id="cartButton" src="assets/common/cart-black.svg"></img>
     </div>
`

const cartMenu = `
    <h2>CART</h2>
    <div id="cartContents"></div>
    <div>
        <p>Subtotal</p>
        <p id="subtotal"></p>
    </div>
    <button id="checkout">Checkout</button>
`

document.getElementById("header").innerHTML = header;
document.getElementById("cartMenu").innerHTML = cartMenu;

const cart = JSON.parse(localStorage.getItem("cart")) || [];

function loadCart() {
    const cartContents = document.getElementById("cartContents")
    cartContents.innerHTML = "";

    let subtotal = 0;

    cart.forEach(item => {

        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
            <strong>${item.name}</strong><br>
            ${item.price}<br>
            ${item.size}<br>
            ${item.material}
            <button id="${item.id}" class="removeFromCart">X</button>
        `;
        cartContents.appendChild(cartItem);
    });

    document.getElementById("subtotal").textContent = `${subtotal}`;

    document.querySelectorAll(".removeFromCart").forEach(button => {
        button.addEventListener("click", (click) => {
            const id = click.target.getAttribute("id");

            const removedProduct = cart.findIndex(item => item.id === id);
            cart.splice(removedProduct, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            loadCart();
        });
    });
}

document.getElementById("payNow").addEventListener("click", () => {
    window.location.href = "order-confirmation.html";
});

loadCart();