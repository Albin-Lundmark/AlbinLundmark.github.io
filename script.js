const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-meny");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("transform");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-länk").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("transform");
        navMenu.classList.remove("active");
    }))