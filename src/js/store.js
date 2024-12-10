import { getStorageItem, setStorageItem } from "./utils.js";

let store = getStorageItem("products");

const setupStore = (products) => {
  store = products.map(({id, fields: { featured, name, price, company, colors, image: img }}) => ({
    id,
    featured,
    name, 
    price,
    company,
    colors,
    image: img[0].thumbnails.large.url
  }));
  setStorageItem("products", store);
};
const findProduct = (id) => {
  let product = store.find((product) => product.id === id);
  return product;
};

export { store, setupStore, findProduct };
