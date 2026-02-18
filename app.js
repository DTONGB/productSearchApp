const searchInput = document.getElementById("searchInput");
const productList = document.getElementById("productList");

let products = [];

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    renderProducts(products);
  });

function renderProducts(list) {
  productList.innerHTML = "";

  list.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - ${"S/"} ${product.price}`;
    productList.appendChild(li);
  });
}

searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchText) ||
      product.name.toLowerCase().includes(searchText)
    );
  });

  renderProducts(filteredProducts);
});
