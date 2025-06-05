const products = [
    {
        id: 'recliner1',
        type: 'recliner',
        name: 'recliner',
        image: '/assets/placeholder.jpg',
        description: 'lorem ipsum',
        price: '100 dollary doos',
        sizes: '',
        materials: ''
    },

    {
        id: 'recliner2',
        type: 'recliner',
        name: 'recliner',
        image: '/assets/placeholder.jpg',
        description: 'im nice at ping pong',
        price: '200 dollary doos',
        sizes: '',
        materials: ''
    },
]

const productID = new URLSearchParams(window.location.search).get('id');
const product = products.find(product => product.id === productID)


document.getElementById("name").textContent = product.name;
document.getElementById("image").src = product.image;
document.getElementById("image").alt = product.name;
document.getElementById("description").textContent = product.description;
document.getElementById("price").textContent = product.price;