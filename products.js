const products = [
    {
        id: 'recliner1',
        type: '',
        name: 'recliner',
        image: '/assets/placeholder.jpg',
        description: 'lorem ipsum',
        price: '100 dollary doos',
        sizes: '',
        materials: ''
    },
]

const product = products[0];


document.getElementById("name").textContent = product.name;
document.getElementById("image").src = product.image;
document.getElementById("image").alt = product.name;
document.getElementById("description").textContent = product.description;
document.getElementById("price").textContent = product.price;
