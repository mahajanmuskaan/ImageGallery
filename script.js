const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav_list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
}
