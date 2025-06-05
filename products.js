const products = [
    {
        id: 'admiral',
        type: 'Recliner',
        name: 'Admiral',
        image: '/assets/placeholder.jpg',
        description: 'The ultimate in comfort and support, available in fabric or leather.',
        price: '100 dollary doos',
        sizes: ['1', '2', '3', '4'],
        materials: ['1', '2', '3', '4', '5']
    },

    {
        id: 'premier',
        type: 'Recliner',
        name: 'Premier',
        image: '/assets/placeholder.jpg',
        description: 'The ultimate in comfort and support, available in fabric or leather, with soft, medium or firm seating foam.',
        price: '200 dollary doos',
        sizes: ['1', '2', '3'],
        materials: ['1', '2', '3', '4', '5']
    },
]

const productID = new URLSearchParams(window.location.search).get('id');
const product = products.find(product => product.id === productID)


document.getElementById("name").textContent = product.name;
document.getElementById("image").src = product.image;
document.getElementById("image").alt = product.name;
document.getElementById("description").textContent = product.description;
document.getElementById("price").textContent = product.price;

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