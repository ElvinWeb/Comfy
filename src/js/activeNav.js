const navLinks = document.querySelectorAll(".nav-link");
const activePage = window.location.pathname;

navLinks.forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});
