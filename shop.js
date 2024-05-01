const products = [
  { name: "Toy", price: 15 },
  { name: "Hat", price: 12 },
  { name: "Mug", price: 10 },
];

function displayProduct(product) {
  console.log(`- ${product.name}: $${product.price}`);
}

let isLoggedIn = true;

if (!isLoggedIn) {
  console.log("Please login to start shopping.");
} else {
  console.log("Product Names:");

  for (let i = 0; i < products.length; i++) {
    displayProduct(products[i]);
  }

  let cart = [];

  function addToCart(productName) {
    const product = products.find((item) => item.name === productName);
    if (product) {
      cart.push(product);
      console.log(`${productName} added to cart!`);
    } else {
      console.log(`${productName} is not found.`);
    }
  }

  while (true) {
    const userInput = prompt(
      "Enter product name to add to cart (or 'q' to quit): "
    );
    if (userInput.toLowerCase() === "q") {
      break;
    }
    addToCart(userInput);
  }

  let totalCost = 0;
  cart.forEach((item) => (totalCost += item.price));

  console.log(`Total cost: $${totalCost}`);
}
