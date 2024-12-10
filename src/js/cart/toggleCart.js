import { getElement } from "../utils.js";

const cartOverlay = getElement(".cart-overlay");
const closeCartBtn = getElement(".cart-close");
const toggleCartBtn = getElement(".toggle-cart");

// Reusable function to toggle cart visibility
const toggleCart = (show) => {
  cartOverlay.classList[show ? 'add' : 'remove']('show');
  document.body.style.overflow = show ? 'hidden' : 'visible';
};

// Event listeners using the toggle function
toggleCartBtn.addEventListener('click', () => toggleCart(true));
closeCartBtn.addEventListener('click', () => toggleCart(false));

// Export openCart function
export const openCart = () => toggleCart(true);
