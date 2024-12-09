import { getElement } from "../utils.js";
import { displayProducts } from "../displayProducts.js";

const form = getElement(".input-form");
const nameInput = getElement(".search-input");
const allProductsContainer = getElement(".products-container");

const setupSearch = (store) => {
  const searchProducts = function () {
    const searchValue = nameInput.value.trim();

    if (searchValue) {
      const newStore = store.filter((product) => {
        let { name } = product;
        if (name.toLowerCase().includes(searchValue.toLowerCase()))
          return product;
      });
      displayProducts(newStore, allProductsContainer, true);
      if (newStore.length < 1) {
        allProductsContainer.innerHTML = `<h3 class="filter-error">
             sorry, no products matched your search
             </h3>`;
      }
    } else {
      displayProducts(store, allProductsContainer, true);
    }
  };
  form.addEventListener("keyup", searchProducts);
};

export default setupSearch;
