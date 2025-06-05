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

const searchBox = document.getElementById('searchBox');
const results = document.getElementById('results');

searchBox.addEventListener("keypress", (search) => {
    if (search.key === "Enter") {
        const query = searchBox.value.replaceAll(' ', '');
        console.log(query);
        if (query) {
            window.location.href = `search.html?q=${query}`;
        }
    }
});

if (query) {
    let resultsCount = products.filter(queryMatch);

    function queryMatch(product) {
        return product.name.toLowerCase().includes(query) || product.type.toLowerCase().includes(query);
    }

    if (resultsCount > 0) {

    } else {
        results.innerHTML = "<p>this search came up empty :(</p>"
    }
}