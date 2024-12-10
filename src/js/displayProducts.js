import { formatPrice } from "./utils.js";
import { addToCart } from "./cart/setupCart.js";

export const displayProducts = (products, element, filters) => {
  // Create product HTML template function for display products
  const createProductCard = ({ id, name, image, price }) => `
    <article class="product">
      <div class="product-container">
        <img src="${image}" class="product-img img" alt="${name}" loading="lazy" />
       
        <div class="product-icons">
          <a href="/src/pages/product.html?id=${id}" class="product-icon">
            <i class="fas fa-search"></i>
          </a>
          <button class="product-cart-btn product-icon" data-id="${id}">
            <i class="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
      <footer>
        <p class="product-name">${name}</p>
        <h4 class="product-price">${formatPrice(price)}</h4>
      </footer>
    </article>`;

  // Set innerHTML once instead of for each product
  element.innerHTML = products.map(createProductCard).join('');

  if (filters) return;

  // Use event delegation more efficiently
  element.addEventListener("click", (e) => {
    const cartBtn = e.target.closest('.product-cart-btn');
    if (cartBtn) {
      addToCart(cartBtn.dataset.id);
    }
  });
};
