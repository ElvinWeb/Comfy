import { getElement } from "../utils.js";
import { displayProducts } from "../displayProducts.js";

const form = getElement(".input-form");
const nameInput = getElement(".search-input");
const allProductsContainer = getElement(".products-container");

const setupSearch = (store) => {
  // Debounce the search to avoid excessive filtering
  let timeoutId;
  
  const searchFilter = () => {
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      const searchValue = nameInput.value.trim().toLowerCase();
      
      // Only filter if there's a search value
      if (!searchValue) {
        displayProducts(store, allProductsContainer, true);
        return;
      }

      // Create case-insensitive regex pattern for more efficient searching
      const searchPattern = new RegExp(searchValue, 'i');
      const newStore = store.filter(({ name }) => searchPattern.test(name));

      // Show error or filtered results
      if (newStore.length < 1) {
        allProductsContainer.innerHTML = `<h3 class="filter-error"> sorry, no products matched your search </h3>`;
      } else {
        displayProducts(newStore, allProductsContainer, true);
      }
    }, 300); // Wait 300ms after last keyup before filtering
  };

  form.addEventListener("keyup", searchFilter);
};

export default setupSearch;
