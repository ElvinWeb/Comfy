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

export { getElement, formatPrice, getStorageItem, setStorageItem };
