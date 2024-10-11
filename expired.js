// Initialize product list
let products = [];

// Function to add product
function addProduct(productName, expirationDate) {
    const product = {
        name: productName,
        expirationDate: new Date(expirationDate),
        status: 'Not Expired'
    };

    // Check if product is expired
    if (product.expirationDate < new Date()) {
        product.status = 'Expired';
    }

    products.push(product);
    updateProductList();
}

// Function to update product list
function updateProductList() {
    const productTbody = document.getElementById('product-tbody');
    productTbody.innerHTML = '';

    products.forEach((product, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.expirationDate.toLocaleDateString()}</td>
            <td>${product.status}</td>
            <td><button class="remove-btn" onclick="removeProduct(${index})">Remove</button></td>
        `;

        if (product.status === 'Expired') {
            row.classList.add('expired');
        } else {
            row.classList.add('not-expired');
        }

        productTbody.appendChild(row);
    });
}

// Function to remove product
function removeProduct(index) {
    products.splice(index, 1);
    updateProductList();
}

// Add event listener to add product form
document.getElementById('add-product-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const productName = document.getElementById('product-name').value;
    const expirationDate = document.getElementById('expiration-date').value;
    addProduct(productName, expirationDate);
    document.getElementById('add-product-form').reset();
});
