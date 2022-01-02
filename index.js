"use strict";

const iconMenu = document.querySelector(".menu-icon");
const mainNav = document.querySelector(".main-nav");

iconMenu.addEventListener("click", function (e) {
  iconMenu.classList.toggle("active");
  mainNav.classList.toggle("active");
});
