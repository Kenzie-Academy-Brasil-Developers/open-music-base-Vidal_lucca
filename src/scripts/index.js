// /* Desenvolva sua lógica aqui ... */
function filterByCategory(category) {
  if (category === 0) {
    renderCards(products);
  } else {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    renderCards(filteredProducts);
  }
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const selectedCategory = index;
    filterByCategory(selectedCategory);
  });
});

inputPrice.addEventListener("input", function (event) {
  const newPrice = parseFloat(event.target.value);
  selectedPrice.textContent = `Até R$ ${newPrice
    .toFixed(2)
    .replace(".", ",")}`;

  const filteredProducts = products.filter(
    (product) => product.price <= newPrice
  );
  renderCards(filteredProducts);
});

// Initial rendering of cards with the products array
renderCards(products);









