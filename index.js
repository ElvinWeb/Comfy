// global imports
import "./src/js/toggleOverlay.js";
import "./src/js/cart/setupCart.js";

// specific imports
import { setupStore, store } from "./src/js/store.js";
import { displayProducts } from "./src/js/displayProducts.js";
import { getElement, fetchProducts } from "./src/js/utils.js";

const feturedContainer = getElement(".featured-center");

const init = async () => {
  const products = await fetchProducts();
  if (products) {
    setupStore(products);
    const featured = store.filter((product) => product.featured === true);
    displayProducts(featured, feturedContainer);
  }
};

window.addEventListener("DOMContentLoaded", init);
