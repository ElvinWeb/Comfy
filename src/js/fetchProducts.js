import { ALL_PRODUCTS_API_URL } from "./config.js";

export const fetchProducts = async () => {
  try {
    const response = await fetch(ALL_PRODUCTS_API_URL);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return data;
  } catch (error) {
    throw error;
  }
};
