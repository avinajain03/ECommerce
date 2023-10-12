document.addEventListener("DOMContentLoaded", function() {
    displayCartItems();
});

function displayCartItems() {
    const cartContainer = document.getElementById('cart-items');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartContainer.innerHTML = "";
    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
        
            <p>${item.name} - $${item.price} x ${item.quantity} = $${item.price * item.quantity}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
            <button onclick="addQuantity(${index})">Add Quantity</button>
        `;

        cartContainer.appendChild(itemDiv);
    });
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

function addQuantity(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity += 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}
function proceedToPayment() {
    window.location.href = 'payment.html';
}






// document.addEventListener("DOMContentLoaded", function() {
//     displayCartItems();
// });

// function addToCart(productName, productPrice) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const existingItem = cart.find(item => item.name === productName);

//     if (existingItem) {
//         existingItem.quantity += 1;
//     } else {
//         const newItem = {
//             name: productName,
//             price: productPrice,
//             quantity: 1
//         };
//         cart.push(newItem);
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));
//     displayCartItems();
// }

// function displayCartItems() {
//     const cartContainer = document.getElementById('cart-items');
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     let totalAmount = 0;

//     cartContainer.innerHTML = "";
//     cart.forEach((item, index) => {
//         const itemDiv = document.createElement('div');
//         const itemTotal = item.price * item.quantity;
//         totalAmount += itemTotal;
// c
//         itemDiv.innerHTML = `
//             <p>${item.name} - $${item.price} x ${item.quantity} = $${itemTotal}</p>
//             <button onclick="removeFromCart(${index})">Remove</button>
//             <button onclick="addQuantity(${index})">Add Quantity</button>
//         `;

//         cartContainer.appendChild(itemDiv);
//     });

//     document.getElementById('cart-total-amount').textContent = totalAmount.toFixed(2);
// }

// function removeFromCart(index) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart.splice(index, 1);
//     localStorage.setItem('cart', JSON.stringify(cart));
//     displayCartItems();
// }

// function addQuantity(index) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart[index].quantity += 1;
//     localStorage.setItem('cart', JSON.stringify(cart));
//     displayCartItems();
// }

// function proceedToPayment() {
//     window.location.href = 'payment.html';
// }

