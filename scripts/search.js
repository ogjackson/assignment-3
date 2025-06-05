const searchBox = document.getElementById('searchBox');
const results = document.getElementById('results');

searchBox.addEventListener("keypress", (search) => {
    if (search.key === "Enter") {
        let query = searchBox.value.replaceAll(' ', '');
        console.log(query);
        if (query) {
            window.location.href = `search.html?q=${query}`;
        }
    }
});

const query = new URLSearchParams(window.location.search).get('q');


if (query) {
    let resultsCount = products.filter(queryMatch);

    function queryMatch(product) {
        return product.name.toLowerCase().includes(query) || product.type.toLowerCase().includes(query);
    }

    if (resultsCount.length > 0) {
        const ul = document.createElement("ul");
        resultsCount.forEach(product => {
            const li = document.createElement("li");

            const productImg = document.createElement("img");
            productImg.src = product.image;
        

            const productLink = document.createElement("a");
            productLink.href = `product.html?id=${product.id}`;
            productLink.textContent = product.name;
    
            const productType = document.createElement("p")
            productType.textContent = product.type

            const productPrice = document.createElement("p")
            productPrice.textContent = product.price
        
            li.appendChild(productImg);
            li.appendChild(productLink);
            li.appendChild(productType);
            li.appendChild(productPrice);
    
            ul.appendChild(li);
        });
        results.innerHTML = "";
        results.appendChild(ul);
    } else {
        results.innerHTML = "<p>this search came up empty :(</p>"
    }
}