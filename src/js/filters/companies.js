import { getElement } from "../utils.js";
import { displayProducts } from "../displayProducts.js";

const companiesList = getElement(".companies");
const allProductsContainer = getElement(".products-container");

const setupCompanies = (store) => {
  // Get unique companies and add 'all' option
  const companies = ['all', ...new Set(store.map(({ company }) => company))];

  // Create buttons HTML in one go
  companiesList.innerHTML = companies
    .map(company => `<button class="company-btn">${company}</button>`)
    .join('');

  // Optimize company filter handler
  const companyFilter = ({ target }) => {
    if (!target.classList.contains('company-btn')) return;

    const selectedCompany = target.textContent;
    const filteredProducts = selectedCompany === 'all' 
      ? store
      : store.filter(product => product.company === selectedCompany);

    displayProducts(filteredProducts, allProductsContainer, true);
  };

  companiesList.addEventListener('click', companyFilter);
};

export default setupCompanies;
