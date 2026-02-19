// Select the dark mode toggle button
const toggleBtn = document.getElementById("darkModeToggle");

// Add click event to toggle dark mode class on body
toggleBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Select scroll-to-top button
const scrollBtn = document.getElementById("scrollTopBtn");

// Show button only when user scrolls down 200px
window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

// Smooth scroll to top when button is clicked
scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Text to display with typing effect
const text = "Hi, I'm Raisa - Software Engineering Student";
let index = 0;

// Function to simulate typing animation
function typeEffect() {
    if (index < text.length) {
        document.getElementById("typingText").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100); 
    }
}

// Start typing effect when page loads
typeEffect();

// Filter projects based on selected category
function filterProjects(category) {
    const projects = document.querySelectorAll(".project");

    projects.forEach(project => {
        // Show all projects OR only matching category
        if (category === "all" || project.classList.contains(category)) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}

// Select all sections and navigation links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

// Update active navigation link based on scroll position
window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        // Detect current visible section
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    // Highlight corresponding navigation link
    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});