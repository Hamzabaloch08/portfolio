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

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Landing Page Text Animation - Rotate and Pop-In
gsap.from(".main-message h2, .main-message h3, .main-message p", {
    opacity: 0,
    y: 30,
    rotationX: -15,
    duration: 1.2,
    stagger: 0.25,
    ease: "back.out(1.7)",
});

// About Section - Slide-In with Bounce Effect
gsap.from("#about .about-text-box", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
    },
    opacity: 0,
    x: -100,
    duration: 1.5,
    ease: "bounce.out",
});

// Service Tiers - 3D Pop-In with Rotation
gsap.from(".service-tiers .tier-item", {
    scrollTrigger: {
        trigger: "#services",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
    },
    opacity: 0,
    scale: 0.8,
    rotationY: -15,
    y: 50,
    stagger: 0.3,
    duration: 1.2,
    ease: "back.out(2)",
});

// Projects Section - Zoom-In and Fade-Up
gsap.from(".project-item", {
    scrollTrigger: {
        trigger: "#projects",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
    },
    opacity: 0,
    scale: 0.8,
    y: 40,
    stagger: {
        each: 0.2,
        from: "start",
    },
    duration: 1.2,
    ease: "back.out(1.7)", // Smooth bounce effect
});


// Contact Section - Slide-In with Tilted Perspective
gsap.from("#contact h2, #contact p, #contact a", {
    scrollTrigger: {
        trigger: "#contact",
        start: "top 85%",
        end: "bottom 60%",
        scrub: 1,
        toggleActions: "play none none reverse",
    },
    opacity: 0,
    x: 100,
    skewX: 10,
    rotationY: -10,
    stagger: 0.2,
    duration: 1.5,
    ease: "power2.out",
});

// Footer - Smooth Float-In with Hover Wave Effect
gsap.from("footer", {
    scrollTrigger: {
        trigger: "footer",
        start: "top 90%",
        end: "bottom 80%",
        scrub: 1,
        toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    rotationX: -10,
    duration: 1.8,
    ease: "power2.out",
    onComplete: () => {
        gsap.to("footer", {
            y: -5,
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: "sine.inOut",
        });
    },
});

// Custom Cursor Animation
const cursor = document.querySelector('.custom-cursor');

// Move the cursor with the mouse
document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
});

// Scale effect on hover for clickable items
document.querySelectorAll('a, button, li,i').forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.style.transform = 'scale(2.5)';
    });
    item.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
    });
});