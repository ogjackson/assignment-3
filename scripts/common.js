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
`

document.getElementById("header").innerHTML = header;
document.getElementById("cartMenu").innerHTML = cartMenu;

const cart = JSON.parse(localStorage.getItem("cart")) || [];

function loadCart() {
    const cartContents = document.getElementById("cartContents")
    cartContents.innerHTML = "";

    cart.forEach(item => {
        const cartItem = document.createElement("cartItem");
        cartItem.textContent = item.name;
        cartContents.appendChild(cartItem);
    })
}

loadCart();