const ALL_PRODUCTS_API_URL =
  "https://www.course-api.com/javascript-store-products";
const SINGLE_PRODUCT_API_URL =
  "https://www.course-api.com/javascript-store-single-product";
// temporary single product
// 'https://www.course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
};

const formatPrice = (price) => {
  let formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  
  return formattedPrice;
};

const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item);
  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(item));
  } else {
    storageItem = [];
  }
  return storageItem;
};

const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

export {
  ALL_PRODUCTS_API_URL,
  SINGLE_PRODUCT_API_URL,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
};
