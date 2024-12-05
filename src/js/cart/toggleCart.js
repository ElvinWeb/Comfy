import { getElement } from "../utils.js";

const cartOverlay = getElement(".cart-overlay");
const closeCartBtn = getElement(".cart-close");
const toggleCartBtn = getElement(".toggle-cart");

toggleCartBtn.addEventListener("click", () => {
  cartOverlay.classList.add("show");
  document.body.style.overflow = "hidden";
});
closeCartBtn.addEventListener("click", () => {
  cartOverlay.classList.remove("show");
  document.body.style.overflow = "visible";
});

export const openCart = () => {
  cartOverlay.classList.add("show");
};
