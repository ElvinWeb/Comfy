const navLinks = document.querySelectorAll(".nav-link");
const activePage = window.location.pathname;

console.log(navLinks);

navLinks.forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    console.log("active");
    link.classList.add("active");
  }
});

