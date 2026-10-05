// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const mobileNavigation = document.getElementById("mobileNavigation");
const mobileLinks = document.querySelectorAll(".mobile-navigation a");


// Open or close the mobile menu
function toggleMobileMenu() {
    menuToggle.classList.toggle("active");
    mobileNavigation.classList.toggle("active");

    const isOpen = mobileNavigation.classList.contains("active");

    // Update accessibility information
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
}


// Close the mobile menu
function closeMobileMenu() {
    menuToggle.classList.remove("active");
    mobileNavigation.classList.remove("active");

    // Reset accessibility information
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
    );
}


menuToggle.addEventListener("click", toggleMobileMenu);


mobileLinks.forEach(function(link) {
    link.addEventListener("click", closeMobileMenu);
});


// Destination data
const destinations = [
    {
        id: 1,
        name: "Maldives",
        location: "South Asia",
        category: "Beaches",
        description:
            "Crystal-clear waters, white-sand beaches, and private island escapes make the Maldives an unforgettable tropical destination.",
        price: 1890,
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 2,
        name: "Santorini",
        location: "Greece",
        category: "Luxury",
        description:
            "Discover dramatic cliffs, whitewashed villages, spectacular sunsets, and luxurious Aegean experiences.",
        price: 2140,
        image:
            "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 3,
        name: "Swiss Alps",
        location: "Switzerland",
        category: "Mountains",
        description:
            "Journey through breathtaking alpine scenery, peaceful villages, snowy peaks, and unforgettable mountain adventures.",
        price: 2490,
        image:
            "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 4,
        name: "Tokyo",
        location: "Japan",
        category: "Cities",
        description:
            "Experience a fascinating combination of futuristic architecture, ancient traditions, incredible food, and vibrant neighborhoods.",
        price: 2350,
        image:
            "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 5,
        name: "Cape Town",
        location: "South Africa",
        category: "Adventure",
        description:
            "Explore dramatic coastlines, Table Mountain, wildlife, vineyards, and unforgettable outdoor experiences.",
        price: 1750,
        image:
            "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 6,
        name: "Bora Bora",
        location: "French Polynesia",
        category: "Luxury",
        description:
            "Escape to turquoise lagoons, overwater villas, coral gardens, and one of the world's most iconic island settings.",
        price: 3290,
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 7,
        name: "Banff",
        location: "Canada",
        category: "Mountains",
        description:
            "Discover turquoise lakes, towering peaks, scenic trails, and spectacular wilderness in the Canadian Rockies.",
        price: 1980,
        image:
            "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 8,
        name: "New York",
        location: "United States",
        category: "Cities",
        description:
            "Experience iconic landmarks, world-class restaurants, diverse neighborhoods, and the energy of the city that never sleeps.",
        price: 1690,
        image:
            "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&fit=crop&w=1200&q=85"
    },


    {
        id: 9,
        name: "Amalfi Coast",
        location: "Italy",
        category: "Luxury",
        description:
            "Enjoy coastal villages, Mediterranean cuisine, dramatic cliffs, and elegant Italian seaside living.",
        price: 2290,
        image:
            "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 10,
        name: "Bali",
        location: "Indonesia",
        category: "Beaches",
        description:
            "Combine tropical beaches, lush rice terraces, cultural discoveries, and peaceful island retreats.",
        price: 1580,
        image:
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85"
    },

    {
        id: 11,
        name: "Dubai",
        location: "United Arab Emirates",
        category: "Cities",
        description:
            "Experience extraordinary architecture, luxury shopping, desert adventures, and world-class hospitality.",
        price: 1890,
        image:
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85"
    }
];


// Destination state
let currentCategory = "All";
let searchQuery = "";


// Destination DOM elements
const destinationGrid =
    document.getElementById("destinationGrid");

const filterButtons =
    document.querySelectorAll(".filter-button");

const destinationSearch =
    document.getElementById("destinationSearch");


// Render destination cards
function renderDestinations() {

    // Clear the existing cards
    destinationGrid.innerHTML = "";

    // Normalize the search text
    const normalizedSearch =
        searchQuery.toLowerCase();

    // Apply category and search filters together
    const filteredDestinations =
        destinations.filter(function(destination) {

            const matchesCategory =
                currentCategory === "All" ||
                destination.category === currentCategory;

            const searchableText =
                `${destination.name}
                ${destination.location}
                ${destination.category}
                ${destination.description}`
                .toLowerCase();

            const matchesSearch =
                searchableText.includes(normalizedSearch);

            return matchesCategory && matchesSearch;
        });


    // Show an empty state when nothing matches
    if (filteredDestinations.length === 0) {

        const emptyMessage =
            document.createElement("div");

        emptyMessage.classList.add("menu-empty");

        emptyMessage.innerHTML = `
            <i class="fa-solid fa-compass"></i>
            <strong>No destinations found.</strong>
            <p>Try another destination, location, or category.</p>
        `;

        destinationGrid.appendChild(emptyMessage);

        return;
    }


    // Create a card for every matching destination
    filteredDestinations.forEach(function(destination) {

        const card =
            document.createElement("article");

        card.classList.add(
            "destination-card",
            "reveal"
        );

        // Store the destination ID on the card
        card.dataset.id = destination.id;

        card.innerHTML = `
            <div class="destination-card-image">

                <img
                    src="${destination.image}"
                    alt="${destination.name}"
                    loading="lazy"
                >

                <span class="destination-category">
                    ${destination.category}
                </span>

            </div>

            <div class="destination-card-content">

                <div class="destination-card-top">

                    <h3>${destination.name}</h3>

                </div>

                <div class="destination-location">

                    <i class="fa-solid fa-location-dot"></i>

                    <span>${destination.location}</span>

                </div>

                <p class="destination-description">
                    ${destination.description}
                </p>

                <p class="destination-price">
                    From $${destination.price.toLocaleString()}
                </p>

                <div class="view-details">
                    View details
                    <i class="fa-solid fa-arrow-right"></i>
                </div>

            </div>
        `;


        // Open the modal when a destination is clicked
        card.addEventListener("click", function() {
            openDestinationModal(destination.id);
        });


        destinationGrid.appendChild(card);
    });


    // Observe newly rendered cards for scroll reveal
    observeRevealElements();
}


// Filter destinations by category
filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        currentCategory =
            button.dataset.category;

        // Update the active filter button
        filterButtons.forEach(function(filterButton) {
            filterButton.classList.remove("active");
        });

        button.classList.add("active");

        renderDestinations();
    });
});


// Search destinations
destinationSearch.addEventListener("input", function() {

    searchQuery =
        destinationSearch.value.trim();

    renderDestinations();
});


// Modal elements
const destinationModal =
    document.getElementById("destinationModal");

const destinationModalOverlay =
    document.getElementById("destinationModalOverlay");

const destinationModalClose =
    document.getElementById("destinationModalClose");

const modalDestinationImage =
    document.getElementById("modalDestinationImage");

const modalDestinationCategory =
    document.getElementById("modalDestinationCategory");

const modalDestinationName =
    document.getElementById("modalDestinationName");

const modalDestinationLocation =
    document.getElementById("modalDestinationLocation");

const modalDestinationDescription =
    document.getElementById("modalDestinationDescription");

const modalDestinationPrice =
    document.getElementById("modalDestinationPrice");


// Open destination details modal
function openDestinationModal(destinationId) {

    const selectedDestination =
        destinations.find(function(destination) {
            return destination.id === destinationId;
        });


    // Stop if the destination does not exist
    if (!selectedDestination) {
        return;
    }


    // Insert the selected destination data
    modalDestinationImage.src =
        selectedDestination.image;

    modalDestinationImage.alt =
        selectedDestination.name;

    modalDestinationCategory.textContent =
        selectedDestination.category;

    modalDestinationName.textContent =
        selectedDestination.name;

    modalDestinationLocation.textContent =
        selectedDestination.location;

    modalDestinationDescription.textContent =
        selectedDestination.description;

    modalDestinationPrice.textContent =
        `From $${selectedDestination.price.toLocaleString()}`;


    // Show the modal
    destinationModal.classList.add("active");

    destinationModal.setAttribute(
        "aria-hidden",
        "false"
    );

    // Prevent the page behind the modal from scrolling
    document.body.classList.add("modal-open");

    // Move keyboard focus to the close button
    destinationModalClose.focus();
}


// Close destination details modal
function closeDestinationModal() {

    destinationModal.classList.remove("active");

    destinationModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove("modal-open");
}


// Close button
destinationModalClose.addEventListener(
    "click",
    closeDestinationModal
);


// Close when overlay is clicked
destinationModalOverlay.addEventListener(
    "click",
    closeDestinationModal
);


// Close modal with Escape
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeDestinationModal();
    }

});


// Newsletter
const newsletterForm =
    document.getElementById("newsletterForm");

const newsletterEmail =
    document.getElementById("newsletterEmail");

const newsletterMessage =
    document.getElementById("newsletterMessage");


// Handle newsletter submission
newsletterForm.addEventListener(
    "submit",
    function(event) {

        // Prevent the browser from reloading the page
        event.preventDefault();

        const email =
            newsletterEmail.value.trim();


        // Validate the email field
        if (!email) {

            showNewsletterMessage(
                "Please enter your email address.",
                "error"
            );

            return;
        }


        // Check the email format
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            showNewsletterMessage(
                "Please enter a valid email address.",
                "error"
            );

            return;
        }


        // Show success feedback
        showNewsletterMessage(
            "You're subscribed! Welcome to Wanderly.",
            "success"
        );

        // Clear the form after successful submission
        newsletterForm.reset();
    }
);


// Display newsletter feedback
function showNewsletterMessage(message, type) {

    newsletterMessage.textContent = message;

    newsletterMessage.classList.remove(
        "success",
        "error"
    );

    newsletterMessage.classList.add(type);
}


// Scroll reveal
let revealObserver;


// Create the IntersectionObserver
function createRevealObserver() {

    revealObserver =
        new IntersectionObserver(
            function(entries, observer) {

                entries.forEach(function(entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "revealed"
                        );

                        observer.unobserve(
                            entry.target
                        );
                    }
                });

            },
            {
                threshold: 0.12
            }
        );


    observeRevealElements();
}


// Observe all reveal elements
function observeRevealElements() {

    if (!revealObserver) {
        return;
    }

    const revealElements =
        document.querySelectorAll(
            ".reveal:not(.revealed)"
        );


    revealElements.forEach(function(element) {
        revealObserver.observe(element);
    });
}


// Scroll-to-top button
const scrollTopButton =
    document.getElementById("scrollTopButton");


// Show or hide the scroll button
function handleScroll() {

    if (window.scrollY > 500) {

        scrollTopButton.classList.add(
            "visible"
        );

    } else {

        scrollTopButton.classList.remove(
            "visible"
        );
    }
}


window.addEventListener(
    "scroll",
    handleScroll,
    { passive: true }
);


// Scroll smoothly to the top
scrollTopButton.addEventListener(
    "click",
    function() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


// Initialize the website
renderDestinations();

createRevealObserver();

handleScroll();