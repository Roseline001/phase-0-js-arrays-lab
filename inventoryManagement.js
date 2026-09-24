// Write your code here
let products = ["Laptop", "Phone", "Headphones", "Monitor"]
// creating a function to console log details of the first product
function logFirstProduct() {
  console.log(products[0]);
}

// function to add a new product
function addProduct(newProduct) {
  products.push(newProduct);
}

// function to change the name of a product
function updateProductName(position, newName) {
  products[position] = newName;
}

//function to remove the last product in the array
function removeLastProduct(delLastProduct) {
  products.pop();
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
