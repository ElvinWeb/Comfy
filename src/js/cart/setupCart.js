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

const cartItemsDOM = getElement(".cart-items");
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

  setStorageItem("cart", cart);
  //more stuff coming up
  openCart();
};
