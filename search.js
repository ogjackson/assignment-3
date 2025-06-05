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
            li.textContent = product.name;
            ul.appendChild(li);
        });
        results.innerHTML = "";
        results.appendChild(ul);
    } else {
        results.innerHTML = "<p>this search came up empty :(</p>"
    }
}