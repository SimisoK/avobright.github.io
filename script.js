// Example data structure for featured products
const featuredProducts = [
  {
    name: "Hair Food",
    image: "assets/img/a5.jpeg",
    price: 24.99,
    description: "Deeply hydrates and softens skin with natural ingredients.",
  },
  {
    name: "Shampoo",
    image: "assets/img/a6.jpeg",
    price: 24.99,
    description: "Deeply hydrates and softens skin with natural ingredients.",
  },
  {
    name: "Face Cream",
    image: "assets/img/a7.jpeg",
    price: 24.99,
    description: "Deeply hydrates and softens skin with natural ingredients.",
  },
  {
    name: "Nail Polish",
    image: "assets/img/a8.jpeg",
    price: 24.99,
    description: "Deeply hydrates and softens skin with natural ingredients.",
  },
  {
    name: "Face Wash",
    image: "assets/img/a9.jpeg",
    price: 24.99,
    description: "Deeply hydrates and softens skin with natural ingredients.",
  },
  {
    name: "Nail Polish",
    image: "assets/img/a10.jpeg",
    price: 24.99,
    description: "Deeply hydrates and softens skin with natural ingredients.",
  },
];

// Generate featured product cards dynamically
const productContainer = document.querySelector("#featured");

featuredProducts.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("col-md-4", "mb-3");

  // Add product image, name, price, and description
  const image = document.createElement("img");
  image.src = product.image;
  image.alt = product.name;
  image.classList.add("img-fluid");
  image.classList.add("text-align-center");



  const name = document.createElement("h5");
  name.textContent = product.name;
  //name.classList.add("text-center")

  const price = document.createElement("p");
  price.textContent = `E${product.price.toFixed(2)}`;

  const description = document.createElement("p");
  description.textContent = product.description;

  // Add elements to the card
  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(price);
  card.appendChild(description);

  productContainer.appendChild(card);
});

