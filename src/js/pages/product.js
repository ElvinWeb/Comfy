// global imports
import "../toggleSidebar.js";
import "../activeNav.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";
// specific
import { SINGLE_PRODUCT_API_URL } from "../config.js";
import { addToCart } from "../cart/setupCart.js";
import { getElement, formatPrice } from "../utils.js";

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
const fetchProductDetails = async function () {
  try {
    const response = await fetch(`${SINGLE_PRODUCT_API_URL}${query}`);
    if (response.status >= 200 && response.status <= 299) {
      const product = await response.json();
      // grab data
      const { id, fields } = product;
      productID = id;

      const { name, company, price, colors, description } = fields;
      const image = fields.image[0].thumbnails.large.url;

      // set values
      document.title = `${name.toUpperCase()} | Comfy`;
      pageTitleDOM.textContent = `Product / ${name}`;
      imgDOM.src = image;
      titleDOM.textContent = name;
      companyDOM.textContent = `by ${company}`;
      priceDOM.textContent = formatPrice(price);
      descDOM.textContent = description;
      colors.forEach((color) => {
        const span = document.createElement("span");
        span.classList.add("product-color");
        span.style.backgroundColor = `${color}`;
        colorsDOM.appendChild(span);
      });
    } else {
      console.log(response.status, response.statusText);
      centerDOM.innerHTML = `
      <div>
        <h3 class="error">sorry, something went wrong</h3>
        <a href="index.html" class="btn">back home</a>
      </div> 
       `;
    }
  } catch (error) {
    console.log(error);
  }
};

// show product when page loads
window.addEventListener("DOMContentLoaded", async function () {
  loading.style.display = "flex";
  await fetchProductDetails();
  loading.style.display = "none";
});

// Add cart click handler
cartBtn.addEventListener("click", function () {
  addToCart(productID);
});
