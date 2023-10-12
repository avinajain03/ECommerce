document.addEventListener("DOMContentLoaded", function() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            displayProducts(data);
        })
        .catch(error => {
            console.error("Error fetching products:", error);
        });
});

function displayProducts(products) {
    const productsContainer = document.getElementById('products');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'col-md-4 mb-4';

        productDiv.innerHTML = `
            <div class="card">
                <a href="product.html?id=${product.id}">
                    <img src="${product.image}" alt="${product.title}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description.substring(0,100)}...</p>
                    </div>
                </a>
                <div class="card-footer">
                    <p><strong>Price: $${product.price}</strong></p>
                    <button class="btn btn-primary" onclick="addToCart('${product.title}', ${product.price})">Add to Cart</button>
                </div>
            </div>
        `;

        productsContainer.appendChild(productDiv);
    });
}



function addToCart(productName, productPrice) {
    // You'd normally send this data to a server or store in local storage.
    // For simplicity, we'll use local storage.
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let productIndex = cart.findIndex(item => item.name === productName);

    if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} added to cart.`);
}
