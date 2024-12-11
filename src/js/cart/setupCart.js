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
  const item = cart.find((cartItem) => cartItem.id === id);

  if (!item) {
    // Add new item
    const product = { ...findProduct(id), amount: 1 };
    cart = [...cart, product];
    addToCartDOM(product);
  } else {
    // Update existing item
    const amount = increaseAmount(id);
    cartItemsDOM.querySelector(`[data-id="${id}"].cart-item-amount`).textContent = amount;
  }

  updateCartState();
  openCart();
};

function updateCartState() {
  displayCartItemCount();
  displayCartTotal();
  setStorageItem("cart", cart);
}

function displayCartItemCount() {
  cartItemCountDOM.textContent = cart.reduce((total, { amount }) => total + amount, 0);
}

function displayCartTotal() {
  const total = cart.reduce((sum, { price, amount }) => sum + price * amount, 0);
  cartTotalDOM.textContent = `Total : ${formatPrice(total)}`;
}

function displayCartItemsDOM() {
  cart.forEach(addToCartDOM);
}

function removeItem(id) {
  cart = cart.filter((cartItem) => cartItem.id !== id);
}

function updateAmount(id, operation) {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount + (operation === 'increase' ? 1 : -1);
      return { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
}

function increaseAmount(id) {
  return updateAmount(id, 'increase');
}

function decreaseAmount(id) {
  return updateAmount(id, 'decrease');
}

function setupCartOperations() {
  cartItemsDOM.addEventListener("click", function (e) {
    const element = e.target;
    const parent = element.parentElement;
    const id = element.dataset.id;
    const parentID = parent.dataset.id;

    const actions = {
      'cart-item-remove-btn': () => {
        removeItem(id);
        element.parentElement.parentElement.remove();
      },
      'cart-item-increase-btn': () => {
        const newAmount = increaseAmount(parentID);
        parent.nextElementSibling.textContent = newAmount;
      },
      'cart-item-decrease-btn': () => {
        const newAmount = decreaseAmount(parentID);
        if (newAmount === 0) {
          removeItem(parentID);
          parent.parentElement.parentElement.remove();
        } else {
          parent.previousElementSibling.textContent = newAmount;
        }
      }
    };

    // Execute action if button class matches
    for (const [className, action] of Object.entries(actions)) {
      if (element.classList.contains(className) || parent.classList.contains(className)) {
        action();
        break;
      }
    }

    updateCartState();
  });
}

const init = () => {
  displayCartItemCount();
  displayCartTotal();
  displayCartItemsDOM();
  setupCartOperations();
};

window.addEventListener("DOMContentLoaded", init);
