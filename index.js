const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeIcon = document.querySelector(".close-icon");
const responsiveNavSection = document.querySelector(".responsive-nav-section");

hamburgerMenu.addEventListener("click", () => {
  responsiveNavSection.style.display = "flex";
});

closeIcon.addEventListener("click", () => {
  responsiveNavSection.style.display = "none";
});
