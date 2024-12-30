import { getElement } from "./utils.js";

const cartOverlay = getElement(".cart-overlay");
const sidebarOverlay = getElement(".sidebar-overlay");
const toggleNav = getElement(".toggle-nav");
const closeBtn = getElement(".sidebar-close");
const closeCartBtn = getElement(".cart-close");
const toggleCartBtn = getElement(".toggle-cart");

const toggleOverlay = (show, overlay) => {
  if (overlay === "sidebar") {
    sidebarOverlay.classList[show ? "add" : "remove"]("show");
  }
  if (overlay === "cart") {
    cartOverlay.classList[show ? "add" : "remove"]("show");
  }
  document.body.style.overflow = show ? "hidden" : "visible";
};

toggleNav.addEventListener("click", () => toggleOverlay(true, "sidebar"));
closeBtn.addEventListener("click", () => toggleOverlay(false, "sidebar"));
toggleCartBtn.addEventListener("click", () => toggleOverlay(true, "cart"));
closeCartBtn.addEventListener("click", () => toggleOverlay(false, "cart"));

export const openCart = () => toggleOverlay(true, "cart");
