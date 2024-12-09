import { getElement } from "../utils.js";
import { displayProducts } from "../displayProducts.js";

const companiesList = getElement(".companies");
const allProductsContainer = getElement(".products-container");

const setupCompanies = (store) => {
  let companies = ["all", ...new Set(store.map((product) => product.company))];

  companiesList.innerHTML = companies.map((company) => `<button class="company-btn">${company}</button>`).join("");

  const companyFilter = function (e) {
    const element = e.target;
    if (element.classList.contains("company-btn")) {
      let newStore = [];
      if (element.textContent === "all") {
        newStore = [...store];
      } else {
        newStore = store.filter(
          (product) => product.company === e.target.textContent
        );
      }

      displayProducts(newStore, allProductsContainer, true);
    }
  };

  companiesList.addEventListener("click", companyFilter);
};

export default setupCompanies;
