const searchBox = document.getElementById('searchBox');
const searchButton = document.getElementById("searchButton");
const results = document.getElementById('results');

function executeSearch() {
    const query = searchBox.value.replaceAll(' ', '');
    console.log(query);
    if (query) {
        window.location.href = `./search.html?q=${query}`;
    }
}

searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        executeSearch();
    }
});


searchButton.addEventListener("click", executeSearch);

const query = new URLSearchParams(window.location.search).get('q');

const resultsFor = document.getElementById("resultsFor");
resultsFor.innerHTML = `<span class="grey">Results for</span> "<span class="black">${query}</span>"`;


if (query) {
    let resultsCount = products.filter(queryMatch);

    function queryMatch(product) {
        return product.name.toLowerCase().includes(query) || product.type.toLowerCase().includes(query);
    }

    
    if (query === "all") {
        resultsCount = products;
    } else if (resultsCount.length > 0) {
        const ul = document.createElement("ul");
        resultsCount.forEach(product => {
            const li = document.createElement("li");

            const productLinkImg = document.createElement("a");
            productLinkImg.href = `./product.html?id=${product.id}`;
            
            const productImg = document.createElement("img");
            productImg.src = product.image;
            productImg.alt = product.name;
            
            productLinkImg.appendChild(productImg);
        
            const productDetails = document.createElement("div");
            productDetails.classList.add("productDetails");

            const productNameType = document.createElement("div");
            productNameType.classList.add("productNameType");
        
            const productLink = document.createElement("a");
            productLink.href = `./product.html?id=${product.id}`;
            productLink.textContent = product.name;
        
            const productType = document.createElement("p");
            productType.innerHTML = `<span class="grey">${product.type}</span>`;
        
            productNameType.appendChild(productLink);
            productNameType.appendChild(productType);
        
            const productPrice = document.createElement("p");
            productPrice.classList.add("productPrice");
            productPrice.textContent = `$${product.price}`;

            productDetails.appendChild(productNameType);
            productDetails.appendChild(productPrice);
        
            li.appendChild(productLinkImg);
            li.appendChild(productDetails);
    
            ul.appendChild(li);
        });
        results.innerHTML = "";
        results.appendChild(ul);
    } else {
        results.innerHTML = "<p>this search came up empty :(</p>"
    }
}