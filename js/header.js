let menuBtn = document.querySelector(".menu-btn");
let headerMenu = document.querySelector(".header__menu");
let headerSocialIcons = document.querySelector(".header__social-icons");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  headerMenu.classList.toggle("active");
  headerSocialIcons.classList.toggle("active");
})
