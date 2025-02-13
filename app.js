// Function expression to select elements `

const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

selectElement(".burger-menu-icon").addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");
    selectElement(".burger-menu-icon").classList.toggle("toggle")

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ""
        } else {
            link.style.animation = `navLinkAnimate 0.5s ease forwards ${index / 7 + 0.5}s`
            console.log(index / 7 + 0.5)
        }
    })
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        selectElement(".nav-list").classList.toggle("active");
        selectElement(".burger-menu-icon").classList.toggle("toggle");

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkAnimate 0.5s ease forwards ${index / 7 + 0.5}s`
                console.log(index / 7 + 0.5)
            }
        })
    })
});




// Add this JavaScript code to your existing app.js file
const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;

// Check localStorage for theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.classList.add(savedTheme);
    updateToggleIcon();
}

// Toggle Theme Function
themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    localStorage.setItem("theme", body.classList.contains("light-mode") ? "light-mode" : "");
    updateToggleIcon();
});

// Update Toggle Icon
function updateToggleIcon() {
    if (body.classList.contains("light-mode")) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for light mode
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for dark mode
    }
}
