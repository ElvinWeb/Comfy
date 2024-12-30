import { ALL_PRODUCTS_API_URL } from "./config.js";

const snackbarContainer = document.createElement("div");
snackbarContainer.classList.add("snackbar-container");
document.body.appendChild(snackbarContainer);

const showNotification = (message) => {
  const snackbar = document.createElement("div");
  snackbar.classList.add("snackbar");
  snackbar.innerHTML = `<p class="snackbar-message">${message}</p>`;
  snackbarContainer.appendChild(snackbar);
  snackbar.addEventListener("animationend", (e) =>
    snackbarContainer.removeChild(snackbar)
  );
};

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
  return storageItem ? JSON.parse(storageItem) : [];
};
const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};
const fetchProducts = async () => {
  try {
    const response = await fetch(ALL_PRODUCTS_API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    showNotification(error.message);
    throw new Error("Failed to fetch products. Please try again later!");
  }
};

export {
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
  showNotification,
  fetchProducts,
};
