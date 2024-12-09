import { getElement } from "../utils.js";
import { displayProducts } from "../displayProducts.js";

const priceInput = getElement(".price-filter");
const priceValue = getElement(".price-value");
const allProductsContainer = getElement(".products-container");

const setupPrice = (store) => {
  // setup filter
  let maxPrice = store.map((product) => product.price);
  maxPrice = Math.max(...maxPrice);
  maxPrice = Math.ceil(maxPrice / 100);
  priceInput.value = maxPrice;
  priceInput.max = maxPrice;
  priceInput.min = 0;
  priceValue.textContent = `$${maxPrice}`;

  const priceFilter = function () {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `$${value}`;
    let newStore = store.filter((product) => product.price / 100 <= value);
    displayProducts(newStore, allProductsContainer, true);
    if (newStore.length < 1) {
      allProductsContainer.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`;
    }
  };

  priceInput.addEventListener("input", priceFilter);
};

export default setupPrice;
