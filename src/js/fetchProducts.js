import { ALL_PRODUCTS_API_URL } from "./config.js";

export const fetchProducts = async () => {
  try {
    const response = await fetch(ALL_PRODUCTS_API_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch products. Please try again later!');
  }
};
