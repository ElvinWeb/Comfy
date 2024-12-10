import { getElement } from "../utils.js";
import { displayProducts } from "../displayProducts.js";

const priceInput = getElement(".price-filter");
const priceValue = getElement(".price-value");
const allProductsContainer = getElement(".products-container");

const setupPrice = (store) => {
  // Calculate max price once
  const maxPrice = Math.ceil(Math.max(...store.map(product => product.price)) / 100);

  // Initialize price input and display
  Object.assign(priceInput, {
    value: maxPrice,
    max: maxPrice,
    min: 0
  });
  priceValue.textContent = `$${maxPrice}`;

  // Debounce price filter for better performance
  let timeoutId;
  const priceFilter = () => {
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      const value = parseInt(priceInput.value);
      priceValue.textContent = `$${value}`;

      const newStore = store.filter(product => product.price / 100 <= value);
      
      if (newStore.length) {
        displayProducts(newStore, allProductsContainer, true);
      } else {
        allProductsContainer.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`;
      }
    }, 100);
  };

  priceInput.addEventListener("input", priceFilter);
};

export default setupPrice;
