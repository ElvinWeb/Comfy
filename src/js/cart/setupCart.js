// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from "../utils.js";
import { openCart } from "./toggleCart.js";
import { findProduct } from "../store.js";
import addToCartDOM from "./addToCartDOM.js";

const cartItemCountDOM = getElement(".cart-item-count");
const cartItemsDOM = getElement(".cart-items");
const cartTotalDOM = getElement(".cart-total");
let cart = getStorageItem("cart");

export const addToCart = (id) => {
  const item = cart.find(cartItem => cartItem.id === id);

  if (!item) {
    // Add new item
    const product = { ...findProduct(id), amount: 1 };
    cart = [...cart, product];
    addToCartDOM(product);
  } else {
    // Update existing item amount
    const amountElement = cartItemsDOM.querySelector(`.cart-item-amount[data-id="${id}"]`);
    if (amountElement) {
      amountElement.textContent = item.amount + 1;
      item.amount++;
    }
  }

  // Update cart state
  displayCartItemCount();
  displayCartTotal(); 
  setStorageItem("cart", cart);
  openCart();
};

function displayCartItemCount() {
  const amount = cart.reduce((total, { amount }) => total + amount, 0);
  cartItemCountDOM.textContent = amount;
}

function displayCartTotal() {
  const total = cart.reduce((sum, { price, amount }) => sum + (price * amount), 0);
  cartTotalDOM.textContent = `Total : ${formatPrice(total)}`;
}

function displayCartItemsDOM() {
  cart.forEach(addToCartDOM);
}

const init = () => {
  displayCartItemCount();
  displayCartTotal();
  displayCartItemsDOM();
};

window.addEventListener("DOMContentLoaded", init);
