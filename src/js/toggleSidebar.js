import { getElement } from "./utils.js";

const toggleNav = getElement(".toggle-nav");
const sidebarOverlay = getElement(".sidebar-overlay");
const closeBtn = getElement(".sidebar-close");

const toggleSidebar = (show) => {
  sidebarOverlay.classList[show ? 'add' : 'remove']('show');
  document.body.style.overflow = show ? 'hidden' : 'visible';
};

toggleNav.addEventListener('click', () => toggleSidebar(true));
closeBtn.addEventListener('click', () => toggleSidebar(false));
