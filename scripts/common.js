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

const cart = `
    <div id="cart">
             <h2>CART</h2>
    </div>
`

document.getElementById("header").innerHTML = header;