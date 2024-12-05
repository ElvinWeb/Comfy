// global imports
import '../toggleSidebar.js';
import "../activeNav.js";
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
// specific
import { addToCart } from '../cart/setupCart.js';
import { SINGLE_PRODUCT_API_URL, getElement, formatPrice } from '../utils.js';

// selections
// const loading = getElement('.page-loading');
// const centerDOM = getElement('.single-product-center');
// const pageTitleDOM = getElement('.page-hero-title');
// const imgDOM = getElement('.single-product-img');
// const titleDOM = getElement('.single-product-title');
// const companyDOM = getElement('.single-product-company');
// const priceDOM = getElement('.single-product-price');
// const colorsDOM = getElement('.single-product-colors');
// const descDOM = getElement('.single-product-desc');
// const cartBtn = getElement('.addToCartBtn');

// cart product
// let productID;

// show product when page loads
