// FEATURE 1: Mobile Navigation

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

function closeMenu() {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
}

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeMenu();
    }
});


// FEATURE 2: Contact Form Validation and Feedback

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    formStatus.className = "form-status";
    formStatus.textContent = "";

    if (!name || !email || !message) {
        formStatus.textContent = "Please complete all fields.";
        formStatus.classList.add("error");
        return;
    }

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    formStatus.textContent =
        "Thank you, " + name + "! Your form passed validation, but this demo does not send messages yet.";

    formStatus.classList.add("success");

    contactForm.reset();
});


// FEATURE 3: Automatic Footer Year

const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();