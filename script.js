const API_KEY = "TMy0YuxZUhfXJaQu768IY2KoCRlWbUyWZNxyYbuXwrWVvTXBqFY5NUDl";
const PHOTO_API_URL = "https://api.pexels.com/v1/search";
const PHOTO_COLLECTIONS = "https://api.pexels.com/v1/collections/featured";
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav_list");
const navItems = document.querySelectorAll(".nav_list_items");
const slideImages = document.querySelectorAll(".carousel-inner img");
const boxImages = document.querySelectorAll(".box img");

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

// Slider
async function imageSlider() {
    try {
        const query = "Nature"; // define the query parameter
        const orient = "square"; // define the orientation parameter

        // Fetching response from Public API
        const url = `${PHOTO_API_URL}?query=${query}&orientation=${orient}`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": API_KEY,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        console.log(response.status);   // Getting Response status
        console.log(response.ok);       // Getting boolean value of response.ok
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);     // if boolean value of response.ok is false, it will throw the error.
        } else {
            const json_data = await response.json();
            if (json_data.photos.length > 0) { // check if there are any photos
                slideImages.forEach((element, index) => {
                    element.setAttribute("src", `${json_data.photos[index].src.original}`);
                });
                boxImages.forEach((element, index) => {
                    element.setAttribute("src", `${json_data.photos[index].src.medium}`);
                });
            }
        }
    } catch (e) {
        console.error(e);
    }
}
imageSlider(); // call the imageSlider function