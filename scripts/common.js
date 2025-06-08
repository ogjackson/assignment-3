const header = `
    <section>

    <img class="icon" id="menuButtonOpen" src="./assets/common/menu-black.svg">

    <ul id="mobileMenu">
        <li><img class="icon" id="menuButtonClose" src="./assets/common/menu-white.svg"></li>
        <li><a href="./index.html">Home</a></li>
        <li><a href="./shop.html">Shop</a></li>
        <li><a href="./sale.html">Sale</a></li>
        <li><a href="./about.html">About</a></li>
        <li class="logo" id="mobileLogo"><a href="./index.html">proudfurniture</a></li>

     </ul>

    <a href="./index.html" class="logo">proudfurniture</a>

    <div>
        <img class="icon" id="searchButton" src="assets/common/search-black.svg">
        <input type="text" id="searchBox" placeholder="Search...">
        <img class="icon" id="cartButton" src="assets/common/cart-black.svg">
     </div>
    </section>
`

const cartMenu = `
    <div id="cartHeader">
        <p>CART</p>
        <img class="icon" id="closeCart" src="assets/common/close-white.svg">
    </div>
    <div id="cartContents"></div>
    <div id="cartPrice">
        <div>
            <p>Subtotal</p>
            <p id="subtotal"></p>
        </div>
        <button id="checkout">Checkout</button>
    </div>
`

document.getElementById("header").innerHTML = header;
document.getElementById("cartMenu").innerHTML = cartMenu;

const menu = document.getElementById('mobileMenu');
const openBtn = document.getElementById('menuButtonOpen');
const closeBtn = document.getElementById('menuButtonClose');

const toggleMenu = () => {
    menu.classList.toggle('active');
};

openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);


const cart = JSON.parse(localStorage.getItem("cart")) || [];

document.getElementById("cartButton").addEventListener("click", () => {
    document.getElementById("cartMenu").classList.toggle("active");
});

document.getElementById("closeCart").addEventListener("click", () => {
    document.getElementById("cartMenu").classList.toggle("active");
});

function loadCart() {
    const cartContents = document.getElementById("cartContents")
    cartContents.innerHTML = "";

    let subtotal = 0;

    cart.forEach(item => {

        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
        <img src="./assets/product-photos/${item.id}.jpg">
        <div>
            <div>
                <strong>${item.name}</strong>
                <span><br>$${item.price}</span>
            </div>
            <div>
                <span>${item.size}</span>
                <span><br>${item.material}</span>
            </div>
        </div>
        <button id="${item.id}" class="removeFromCart">X</button>
        `;
        cartContents.appendChild(cartItem);
    });

    document.getElementById("subtotal").textContent = `$${subtotal}`;

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

document.getElementById("checkout").addEventListener("click", () => {
    window.location.href = "./checkout.html";
});

loadCart();