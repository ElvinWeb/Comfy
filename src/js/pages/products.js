// global imports
import "../toggleSidebar.js";
import "../activeNav.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";

//  filter imports
import setupSearch from "../filters/search.js";
import setupCompanies from "../filters/companies.js";
import setupPrice from "../filters/price.js";

// specific imports
import { store } from "../store.js";
import display from "../displayProducts.js";
import { getElement } from "../utils.js";

const loading = getElement(".page-loading");
const allProductsContainer = getElement(".products-container");

const init = async () => {
  if (store.length < 1) {
    const products = await fetchProducts();
    setupStore(products);
  }
  display(store, allProductsContainer);

  loading.style.display = "none";
};

window.addEventListener("DOMContentLoaded", init);
