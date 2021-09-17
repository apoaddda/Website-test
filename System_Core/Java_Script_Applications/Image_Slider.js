// Last update on: 17/09/2021

// Getting basic variables/important objects
const carousel_slide = document.querySelector(".carousel_slide");
const carousel_images = document.querySelectorAll(".carousel_slide_img");

// Buttons
const previous_button = document.querySelector("#Previous_Button");
const next_button = document.querySelector("Next_Button");

// Counter
let counter = 1
const size = carousel_images[0].clientWidth;

carousel_slide.style.transform = "translateX(" + (-size * counter) + "px)";

// Button Listeners
next_button.addEventListener("click", () => {
    carousel_slide.style.transition = " 0.4s ease-in-out";
    counter++;
    carousel_slide.style.transform = "translateX(" + (-size * counter) + "px)";
});

previous_button.addEventListener("click", () => {
    carousel_slide.style.transition = " 0.4s ease-in-out";
    counter--;
    carousel_slide.style.transform = "translateX(" + (-size * counter) + "px)";
});