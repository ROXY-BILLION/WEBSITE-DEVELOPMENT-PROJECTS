/* FEATURE 1: Mobile Navigation */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("is-open");
});


/* FEATURE 2: CONTACT FORM */

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formStatus.textContent = "Please fill in all fields.";
        return;
    }

    formStatus.textContent =
        "Thank you! Your form was submitted successfully.";

    contactForm.reset();
});
