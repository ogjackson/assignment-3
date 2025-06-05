const header = `
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="shop.html">Shop</a></li>
        <li><a href="sale.html">Sale</a></li>
        <li><a href="about.html">About</a></li>
     </ul>

    <a href="index.html" class="logo">proudfurniture</a>

    <div>
        <img class="icon" src="assets/common/search-black.svg"></img>
        <input type="text" id="searchBox" placeholder="Search...">
        <img class="icon" src="assets/common/cart-black.svg"></img>
     </div>

    `

document.getElementById("header").innerHTML = header;