const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main-nav");

navToggle.addEventListener('click', function(){
    links.classList.toggle("show_nav");
})