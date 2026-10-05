// Mobile Navigation

// Select the hamburger button
const menuToggle = document.getElementById("menuToggle");

// Select the mobile navigation menu
const mobileNavigation = document.getElementById("mobileNavigation");

// Select all links inside the mobile navigation
const mobileLinks = document.querySelectorAll(".mobile-navigation a");


// Open or close the mobile menu
function toggleMobileMenu() {

    // Toggle the active class on the hamburger button
    menuToggle.classList.toggle("active");

    // Toggle the active class on the mobile navigation
    mobileNavigation.classList.toggle("active");

    // Check if the menu is currently open
    const isOpen = mobileNavigation.classList.contains("active");

    // Update accessibility information
    menuToggle.setAttribute("aria-expanded", isOpen);

    // Update the button label
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
}


// Close the mobile menu
function closeMobileMenu() {

    // Remove the active class from the hamburger
    menuToggle.classList.remove("active");

    // Remove the active class from the mobile navigation
    mobileNavigation.classList.remove("active");

    // Reset accessibility attributes
    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
    );
}


// Listen for hamburger button clicks
menuToggle.addEventListener(
    "click",
    toggleMobileMenu
);


// Close the mobile menu when a link is clicked
mobileLinks.forEach(function(link) {

    link.addEventListener(
        "click",
        closeMobileMenu
    );
});


// Scroll Reveal

// Create the observer that watches elements entering
// the user's viewport.
const revealObserver = new IntersectionObserver(
    function(entries, observer) {

        // Check every element detected by the observer
        entries.forEach(function(entry) {

            // Check if the element has entered the viewport
            if (entry.isIntersecting) {

                // Add the visible class.
                // CSS uses this class to start the animation.
                entry.target.classList.add("visible");

                // Stop watching the element after it appears.
                observer.unobserve(entry.target);
            }
        });
    },
    {
        // Start the animation when 15% of the element
        // is visible.
        threshold: 0.15
    }
);


// Find all static reveal elements
const revealElements =
    document.querySelectorAll(".reveal");


// Observe every static reveal element
revealElements.forEach(function(element) {

    // Tell the observer to watch this element
    revealObserver.observe(element);
});


// Menu Data

// Store all restaurant menu items
const menuItems = [
    {
        id: 1,
        name: "Truffle Burrata",
        category: "Starters",
        description:
            "Creamy burrata, black truffle, heirloom tomatoes and basil oil.",
        price: 16,
        image:
            "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 2,
        name: "Seared Scallops",
        category: "Starters",
        description:
            "Golden seared scallops with cauliflower purée and citrus butter.",
        price: 19,
        image:
            "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 3,
        name: "Herb-Crusted Salmon",
        category: "Main Course",
        description:
            "Atlantic salmon with garden herbs, seasonal vegetables and lemon beurre blanc.",
        price: 29,
        image:
            "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 4,
        name: "Wild Mushroom Pasta",
        category: "Main Course",
        description:
            "Handmade pasta with wild mushrooms, parmesan and fresh herbs.",
        price: 24,
        image:
            "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 5,
        name: "Braised Short Rib",
        category: "Main Course",
        description:
            "Slow-braised beef short rib with creamy potatoes and red wine jus.",
        price: 34,
        image:
            "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 6,
        name: "Chocolate Fondant",
        category: "Desserts",
        description:
            "Warm dark chocolate fondant with vanilla ice cream and sea salt.",
        price: 12,
        image:
            "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 7,
        name: "Lemon Panna Cotta",
        category: "Desserts",
        description:
            "Silky lemon panna cotta with fresh berries and mint.",
        price: 10,
        image:
            "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 8,
        name: "Signature Espresso",
        category: "Drinks",
        description:
            "Rich Italian espresso roasted specifically for Savora.",
        price: 6,
        image:
            "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 9,
        name: "Berry Sparkler",
        category: "Drinks",
        description:
            "Fresh berries, sparkling water, citrus and rosemary.",
        price: 8,
        image:
            "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80"
    }
];


// Menu Rendering

// Select the menu grid
const menuGrid =
    document.getElementById("menuGrid");

// Select all category filter buttons
const filterButtons =
    document.querySelectorAll(".filter-button");

// Store the selected category
let currentCategory = "All";

// Store the current search text
let searchQuery = "";


// Display menu items
function renderMenu() {

    // Clear the existing menu cards
    menuGrid.innerHTML = "";

    // Filter menu items using category and search
    const filteredMenu = menuItems.filter(
        function(item) {

            // Check the selected category
            const matchesCategory =
                currentCategory === "All" ||
                item.category === currentCategory;

            // Convert search text to lowercase
            const searchText =
                searchQuery.toLowerCase();

            // Check whether the search matches
            const matchesSearch =
                item.name
                    .toLowerCase()
                    .includes(searchText) ||

                item.description
                    .toLowerCase()
                    .includes(searchText) ||

                item.category
                    .toLowerCase()
                    .includes(searchText);

            // Both conditions must be true
            return matchesCategory && matchesSearch;
        }
    );


    // Display an empty message when no items match
    if (filteredMenu.length === 0) {

        const emptyMessage =
            document.createElement("div");

        emptyMessage.classList.add(
            "menu-empty"
        );

        emptyMessage.textContent =
            "No menu items match your search.";

        menuGrid.appendChild(emptyMessage);

        return;
    }


    // Create a card for every matching item
    filteredMenu.forEach(function(item) {

        // Create the menu card element
        const menuCard =
            document.createElement("article");

        // Add menu-card and reveal classes
        menuCard.classList.add(
            "menu-card",
            "reveal"
        );

        // Store the item ID on the card
        menuCard.dataset.id = item.id;


        // Build the card HTML
        menuCard.innerHTML = `
            <div class="menu-card-image">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >

                <span class="menu-category">
                    ${item.category}
                </span>

            </div>

            <div class="menu-card-content">

                <div class="menu-card-top">

                    <h3>
                        ${item.name}
                    </h3>

                    <span class="menu-price">
                        $${item.price.toFixed(2)}
                    </span>

                </div>

                <p class="menu-description">
                    ${item.description}
                </p>

            </div>
        `;


        // Open the modal when the card is clicked
        menuCard.addEventListener(
            "click",
            function() {

                openMenuModal(item.id);
            }
        );


        // Add the card to the page
        menuGrid.appendChild(menuCard);


        // Observe the newly-created card
        // so it can use the scroll reveal animation.
        revealObserver.observe(menuCard);
    });
}


// Category Filtering

// Add a click event to every filter button
filterButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            // Get the selected category
            currentCategory =
                button.dataset.category;


            // Remove active state from all buttons
            filterButtons.forEach(
                function(filterButton) {

                    filterButton.classList.remove(
                        "active"
                    );
                }
            );


            // Activate the clicked button
            button.classList.add("active");


            // Render the filtered menu
            renderMenu();
        }
    );
});


// Menu Search

// Select the search input
const menuSearch =
    document.getElementById("menuSearch");


// Listen while the user types
menuSearch.addEventListener(
    "input",
    function() {

        // Save the current search text
        searchQuery =
            menuSearch.value.trim();


        // Render the matching menu items
        renderMenu();
    }
);


// Menu Details Modal

// Select modal elements
const menuModal =
    document.getElementById("menuModal");

const menuModalClose =
    document.getElementById("menuModalClose");

const menuModalOverlay =
    document.getElementById("menuModalOverlay");


// Select modal content elements
const modalMenuImage =
    document.getElementById("modalMenuImage");

const modalMenuCategory =
    document.getElementById("modalMenuCategory");

const modalMenuName =
    document.getElementById("modalMenuName");

const modalMenuDescription =
    document.getElementById("modalMenuDescription");

const modalMenuPrice =
    document.getElementById("modalMenuPrice");


// Open the menu details modal
function openMenuModal(itemId) {

    // Find the selected menu item
    const selectedItem =
        menuItems.find(function(item) {

            return item.id === itemId;
        });


    // Stop if the item doesn't exist
    if (!selectedItem) {
        return;
    }


    // Display the selected image
    modalMenuImage.src =
        selectedItem.image;

    // Set the image alt text
    modalMenuImage.alt =
        selectedItem.name;

    // Display the category
    modalMenuCategory.textContent =
        selectedItem.category;

    // Display the name
    modalMenuName.textContent =
        selectedItem.name;

    // Display the description
    modalMenuDescription.textContent =
        selectedItem.description;

    // Display the price
    modalMenuPrice.textContent =
        `$${selectedItem.price.toFixed(2)}`;


    // Show the modal
    menuModal.classList.add("active");

    // Update accessibility state
    menuModal.setAttribute(
        "aria-hidden",
        "false"
    );

    // Prevent background scrolling
    document.body.style.overflow =
        "hidden";
}


// Close the modal
function closeMenuModal() {

    // Hide the modal
    menuModal.classList.remove("active");

    // Update accessibility state
    menuModal.setAttribute(
        "aria-hidden",
        "true"
    );

    // Restore page scrolling
    document.body.style.overflow = "";
}


// Close using the close button
menuModalClose.addEventListener(
    "click",
    closeMenuModal
);


// Close by clicking the overlay
menuModalOverlay.addEventListener(
    "click",
    closeMenuModal
);


// Close using Escape
document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeMenuModal();
        }
    }
);


// Reservation Form

// Select the reservation form
const reservationForm =
    document.getElementById(
        "reservationForm"
    );


// Select the reservation success message
const reservationSuccess =
    document.getElementById(
        "reservationSuccess"
    );


// Select the date input
const reservationDate =
    document.getElementById(
        "reservationDate"
    );


// Get today's date
const today = new Date();


// Convert today's date into YYYY-MM-DD
const todayString =
    today.toISOString().split("T")[0];


// Prevent selecting dates before today
reservationDate.min =
    todayString;


// Listen for reservation submission
reservationForm.addEventListener(
    "submit",
    function(event) {

        // Stop the browser from refreshing
        event.preventDefault();


        // Check required fields
        if (!reservationForm.checkValidity()) {

            // Display browser validation
            reservationForm.reportValidity();

            return;
        }


        // Show success message
        reservationSuccess.classList.add(
            "active"
        );


        // Update accessibility information
        reservationSuccess.setAttribute(
            "aria-hidden",
            "false"
        );


        // Select the submit button text
        const submitText =
            reservationForm.querySelector(
                ".reservation-submit span"
            );


        // Change button text
        submitText.textContent =
            "Reservation Requested";


        // Select the submit button
        const submitButton =
            reservationForm.querySelector(
                ".reservation-submit"
            );


        // Prevent another submission
        submitButton.disabled = true;


        // Clear the form
        reservationForm.reset();


        // Restore the minimum date
        reservationDate.min =
            todayString;
    }
);


// Contact Form

// Select the contact form
const contactForm =
    document.getElementById(
        "contactForm"
    );


// Select the success message
const contactSuccess =
    document.getElementById(
        "contactSuccess"
    );


// Listen for contact form submission
contactForm.addEventListener(
    "submit",
    function(event) {

        // Prevent the browser from refreshing
        event.preventDefault();


        // Check required fields
        if (!contactForm.checkValidity()) {

            // Display browser validation
            contactForm.reportValidity();

            return;
        }


        // Show success message
        contactSuccess.classList.add(
            "active"
        );


        // Update accessibility information
        contactSuccess.setAttribute(
            "aria-hidden",
            "false"
        );


        // Select the button text
        const submitText =
            contactForm.querySelector(
                ".contact-submit span"
            );


        // Change the button text
        submitText.textContent =
            "Message Sent";


        // Select the submit button
        const submitButton =
            contactForm.querySelector(
                ".contact-submit"
            );


        // Prevent multiple submissions
        submitButton.disabled = true;


        // Clear the form
        contactForm.reset();
    }
);


// Initial Menu Render

// Render the menu when the page loads
renderMenu();


// Select the scroll-to-top button
const scrollTopButton = document.getElementById("scrollTopButton");

// Show or hide the scroll-to-top button based on scroll position
function handleScrollTopButton() {

    // Check whether the user has scrolled down the page
    if (window.scrollY > 500) {
        scrollTopButton.classList.add("visible");
    } else {
        scrollTopButton.classList.remove("visible");
    }
}

// Listen for page scrolling
window.addEventListener("scroll", handleScrollTopButton);


// Scroll smoothly back to the top
scrollTopButton.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});