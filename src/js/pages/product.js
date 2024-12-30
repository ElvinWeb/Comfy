// global imports
import "../toggleOverlay.js";
import "../cart/setupCart.js";
// specific
import { SINGLE_PRODUCT_API_URL } from "../config.js";
import { addToCart } from "../cart/setupCart.js";
import { getElement, formatPrice, showNotification } from "../utils.js";

// selections
const loading = getElement(".page-loading");
const centerDOM = getElement(".single-product-center");
const pageTitleDOM = getElement(".page-hero-title");
const imgDOM = getElement(".single-product-img");
const titleDOM = getElement(".single-product-title");
const companyDOM = getElement(".single-product-company");
const priceDOM = getElement(".single-product-price");
const colorsDOM = getElement(".single-product-colors");
const descDOM = getElement(".single-product-desc");
const cartBtn = getElement(".addToCartBtn");
const query = window.location.search;

// cart product
let productID;

// Fetching the product details
const fetchProductDetails = async () => {
  try {
    const response = await fetch(`${SINGLE_PRODUCT_API_URL}${query}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const {
      id,
      fields: {
        name,
        company,
        price,
        colors,
        description,
        image: [
          {
            thumbnails: {
              large: { url: imageUrl },
            },
          },
        ],
      },
    } = await response.json();

    productID = id;

    // Update DOM elements in batch
    const updates = [
      [document.title, `${name.toUpperCase()} | Comfy`],
      [pageTitleDOM, `Product / ${name}`],
      [imgDOM.src, imageUrl],
      [titleDOM, name],
      [companyDOM, `by ${company}`],
      [priceDOM, formatPrice(price)],
      [descDOM, description],
    ];

    updates.forEach(([element, value]) => {
      if (element instanceof HTMLElement) {
        element.textContent = value;
      } else {
        element = value;
      }
    });

    // Create color spans in one fragment
    const fragment = document.createDocumentFragment();
    colors.forEach((color) => {
      const span = document.createElement("span");
      span.className = "product-color";
      span.style.backgroundColor = color;
      fragment.appendChild(span);
    });
    colorsDOM.appendChild(fragment);
  } catch (error) {
    showNotification(error.message);
    centerDOM.innerHTML = `
      <div>
        <h3 class="error">sorry, something went wrong</h3>
        <a href="/index.html" class="btn">Back home</a>
      </div>`;
  }
};

// show product when page loads
window.addEventListener("DOMContentLoaded", async () => {
  try {
    loading.style.display = "flex";
    await fetchProductDetails();
  } finally {
    loading.style.display = "none";
  }
});

// Add cart click handler
cartBtn.addEventListener("click", () => addToCart(productID));
