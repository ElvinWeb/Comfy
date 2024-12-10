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
  let item = cart.find((cartItem) => cartItem.id === id);

  if (!item) {
    let product = findProduct(id);
    // add item to the the
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    // add item to the DOM;
    addToCartDOM(product);
  } else {
    // update values
    const items = [...cartItemsDOM.querySelectorAll(".cart-item-amount")];
    const newAmount = items.find((value) => value.dataset.id === id);
    newAmount.textContent = amount;
  }

  // add one to the item count
  displayCartItemCount();
  // display cart totals
  displayCartTotal();
  // set cart in local storage
  setStorageItem("cart", cart);
  // show the cart sidebar
  openCart();
};

function displayCartItemCount() {
  const amount = cart.reduce((total, cartItem) => {
    return (total += cartItem.amount);
  }, 0);
  cartItemCountDOM.textContent = amount;
}
function displayCartTotal() {
  let total = cart.reduce((total, cartItem) => {
    return (total += cartItem.price * cartItem.amount);
  }, 0);
  cartTotalDOM.textContent = `Total : ${formatPrice(total)} `;
}
function displayCartItemsDOM() {
  cart.forEach((cartItem) => {
    addToCartDOM(cartItem);
  });
}

const init = () => {
  // display amount of cart items
  displayCartItemCount();
  // display total
  displayCartTotal();
  // add all cart items to the dom
  displayCartItemsDOM();
};

window.addEventListener("DOMContentLoaded", init);
