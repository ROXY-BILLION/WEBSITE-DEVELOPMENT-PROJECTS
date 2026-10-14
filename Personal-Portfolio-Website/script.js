
/* FEATURE 1: Mobile Navigation */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("is-open");
});


/* FEATURE 2: Contact Form */

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        formStatus.textContent = "Please fill in all fields.";
    } else {
        formStatus.textContent = "Thank you! Your form was submitted successfully.";
        contactForm.reset();
    }
});


/* FEATURE 3: Automatic Footer Year */

document.getElementById("current-year").textContent =
    new Date().getFullYear();
