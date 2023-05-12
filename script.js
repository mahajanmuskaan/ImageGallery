const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav_list");
const navItems = document.querySelectorAll(".nav_list_items");

// Here the function mobileMenu() also adds an active class on our hamburger and our nav_list which makes our mobile menu open.

hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
}

// The closeMenu() function removes the active class from both the nav_list and the hamburger which makes our mobile menu close.

navItems.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
}

