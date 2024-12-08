import { ALL_PRODUCTS_API_URL } from "./utils.js";

const fetchProducts = async () => {
  try {
    const response = await fetch(ALL_PRODUCTS_API_URL);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchProducts;
