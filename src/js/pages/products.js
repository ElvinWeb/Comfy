// global imports
import "../toggleOverlay.js";
import "../cart/setupCart.js";

//  filter imports
import setupSearch from "../filters/search.js";
import setupCompanies from "../filters/companies.js";
import setupPrice from "../filters/price.js";

// specific imports
import { store } from "../store.js";
import { displayProducts } from "../displayProducts.js";
import { getElement, fetchProducts } from "../utils.js";

const loading = getElement(".page-loading");
const allProductsContainer = getElement(".products-container");

const init = async () => {
  // Initialize store if empty
  if (store.length < 1) {
    const products = await fetchProducts();
    setupStore(products);
  }

  // Initialize all components in parallel
  await Promise.all([
    displayProducts(store, allProductsContainer),
    setupSearch(store),
    setupCompanies(store),
    setupPrice(store),
  ]);

  // Hide loading indicator
  loading.style.display = "none";
};

window.addEventListener("DOMContentLoaded", init);
