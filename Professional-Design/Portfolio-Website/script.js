
/* FEATURE 0: INTRO SCREEN */

const introScreen = document.getElementById("intro-screen");
const introSkip = document.getElementById("intro-skip");

let introHasExited = false;

document.body.classList.add("intro-active");

function exitIntro() {
    if (introHasExited) {
        return;
    }

    introHasExited = true;

    introScreen.classList.add("intro-screen--exit");

    document.body.classList.remove("intro-active");

    introSkip.disabled = true;

    setTimeout(function () {
        introScreen.remove();
    }, 700);
}

const introTimer = setTimeout(function () {
    exitIntro();
}, 5000);

introSkip.addEventListener("click", function () {
    clearTimeout(introTimer);
    exitIntro();
});



/* FEATURE 1: MOBILE NAVIGATION */

const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

/* OPEN AND CLOSE THE MENU */

navToggle.addEventListener("click", function () {
    if (navLinks.classList.contains("is-open")) {
        navLinks.classList.remove("is-open");
        navToggle.classList.remove("is-open");
    } else {
        navLinks.classList.add("is-open");
        navToggle.classList.add("is-open");
    }
});

/* CLOSE THE MENU WHEN A LINK IS CLICKED */

const homeLink = document.querySelector('a[href="#home"]');
const aboutLink = document.querySelector('a[href="#about"]');
const skillsLink = document.querySelector('a[href="#skills"]');
const projectsLink = document.querySelector('a[href="#projects"]');
const contactLinks = document.querySelectorAll('a[href="#contact"]');

function closeMenu() {
    navLinks.classList.remove("is-open");
    navToggle.classList.remove("is-open");
}

homeLink.addEventListener("click", closeMenu);
aboutLink.addEventListener("click", closeMenu);
skillsLink.addEventListener("click", closeMenu);
projectsLink.addEventListener("click", closeMenu);

contactLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
});



/* FEATURE 2: HERO JAVASCRIPT */

const heroMessage = document.getElementById("hero-message");
const exploreButton = document.querySelector(".hero-button-primary");
const contactButton = document.querySelector(".hero-button-secondary");

function showHeroMessage(message) {
    heroMessage.textContent = message;
    heroMessage.classList.add("show");

    setTimeout(function () {
        heroMessage.classList.remove("show");
    }, 3000);
}

exploreButton.addEventListener("click", function () {
    showHeroMessage("Explore my projects and see what I have built!");
});

contactButton.addEventListener("click", function () {
    showHeroMessage("Thanks for your interest! Let's connect.");
});


/* FEATURE 5: PROJECT FILTERS */

const allProjectsButton = document.getElementById("all-projects");
const websiteButton = document.getElementById("website-projects");
const applicationButton = document.getElementById("application-projects");

const projectCardOne = document.querySelector(".project-card:nth-child(1)");
const projectCardTwo = document.querySelector(".project-card:nth-child(2)");
const projectCardThree = document.querySelector(".project-card:nth-child(3)");

const projectFilterButtons = document.querySelectorAll(".project-filter");

/* SHOW ALL PROJECTS */

allProjectsButton.addEventListener("click", function () {
    projectCardOne.classList.remove("hidden");
    projectCardTwo.classList.remove("hidden");
    projectCardThree.classList.remove("hidden");

    allProjectsButton.classList.add("active");
    websiteButton.classList.remove("active");
    applicationButton.classList.remove("active");
});

/* SHOW WEBSITES ONLY */

websiteButton.addEventListener("click", function () {
    projectCardOne.classList.remove("hidden");
    projectCardTwo.classList.add("hidden");
    projectCardThree.classList.remove("hidden");

    allProjectsButton.classList.remove("active");
    websiteButton.classList.add("active");
    applicationButton.classList.remove("active");
});

/* SHOW APPLICATIONS ONLY */

applicationButton.addEventListener("click", function () {
    projectCardOne.classList.add("hidden");
    projectCardTwo.classList.remove("hidden");
    projectCardThree.classList.add("hidden");

    allProjectsButton.classList.remove("active");
    websiteButton.classList.remove("active");
    applicationButton.classList.add("active");
});


/* FEATURE 7: AUTOMATIC FOOTER YEAR */

const footerYear = document.getElementById("footer-year");

footerYear.textContent = new Date().getFullYear();



/* FEATURE 8: SCROLL TO TOP BUTTON */

const scrollTopButton = document.getElementById("scroll-top-button");

/* SHOW OR HIDE THE BUTTON */

window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        scrollTopButton.classList.add("visible");
    } else {
        scrollTopButton.classList.remove("visible");
    }
});

/* RETURN TO THE TOP */

scrollTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* FEATURE 9: SCROLL REVEAL ANIMATIONS */

const revealElements = document.getElementsByClassName("reveal");

function revealOnScroll() {
    for (let i = 0; i < revealElements.length; i++) {
        const elementTop = revealElements[i].getBoundingClientRect().top;

        if (elementTop < window.innerHeight - 80) {
            revealElements[i].classList.add("revealed");
        }
    }
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* FEATURE 10: CLOSE MOBILE MENU AFTER CLICKING A LINK */



const navigationLinks = navLinks.getElementsByTagName("a");

for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
}



