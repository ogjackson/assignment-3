const productID = new URLSearchParams(window.location.search).get('id');
const product = products.find(product => product.id === productID)

document.getElementById("backLink").addEventListener("click", () => {
    window.history.back();
});

document.getElementById("name").textContent = product.name;
document.getElementById("image").src = product.image;
document.getElementById("image").alt = product.name;
document.getElementById("description").textContent = product.description;
document.getElementById("price").textContent = `$${product.price}`;

const sizes = document.getElementById("size");
sizes.innerHTML = "<option>Select your size</option>";
product.sizes.forEach(size => {
    const option = document.createElement("option");
    option.value = size;
    option.textContent = size;
    sizes.appendChild(option);
});

const materials = document.getElementById("material");
materials.innerHTML = "<option>Select your material</option>";
product.materials.forEach(material => {
    const option = document.createElement("option");
    option.value = material;
    option.textContent = material;
    materials.appendChild(option);
});

const addToCart = document.getElementById("addToCart");

addToCart.addEventListener("click", () => {
    const selectedSize = document.getElementById("size").value;
    const selectedMaterial = document.getElementById("material").value;
    const itemQuantity = document.getElementById("quantity").value;

    if (selectedSize === "Select your size" || selectedMaterial === "Select your material") {
        alert("Please make all required selections.");
        return;
    }

    cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        size: selectedSize,
        material: selectedMaterial,
        quantity: itemQuantity
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart)
    loadCart();
})