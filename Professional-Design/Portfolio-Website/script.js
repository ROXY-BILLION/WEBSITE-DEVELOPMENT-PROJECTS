/* FEATURE 0: PROFESSIONAL INTRO SCREEN */

// 1. Select the intro elements
const introScreen = document.getElementById("intro-screen");
const introSkip = document.getElementById("intro-skip");

// 2. Track whether the intro has already exited
let introHasExited = false;

// 3. Lock page scrolling while the intro is visible
document.body.classList.add("intro-active");

// 4. Create the exit function
function exitIntro() {
    // Prevent the exit from running more than once
    if (introHasExited) {
        return;
    }

    introHasExited = true;

    // Start the CSS exit animation
    introScreen.classList.add("intro-screen--exit");

    // Allow the visitor to scroll the portfolio
    document.body.classList.remove("intro-active");

    // Disable the button to prevent repeated clicks
    introSkip.disabled = true;

    // Remove the intro after the animation finishes
    setTimeout(function () {
        introScreen.remove();
    }, 700);
}

// 5. Automatically exit after 10 seconds
const introTimer = setTimeout(function () {
    exitIntro();
}, 10000);

// 6. Let visitors skip the intro
introSkip.addEventListener("click", function () {
    clearTimeout(introTimer);
    exitIntro();
});
