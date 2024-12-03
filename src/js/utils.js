const ALL_PRODUCTS_API_URL = 'https://www.course-api.com/javascript-store-products';
const SINGLE_PRODUCT_API_URL = 'https://www.course-api.com/javascript-store-single-product';
// temporary single product
// 'https://www.course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

const formatPrice = () => {};
const getStorageItem = () => {};
const setStorageItem = () => {};

export {
  ALL_PRODUCTS_API_URL,
  SINGLE_PRODUCT_API_URL,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
};
