// ==========================================
// FINFLOW JAVASCRIPT
// ==========================================

// =============================
// STICKY NAVBAR
// =============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(11,17,32,0.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
    } else {
        header.style.background = "rgba(11,17,32,.80)";
        header.style.boxShadow = "none";
    }
});

// =============================
// SCROLL TO TOP BUTTON
// =============================

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        scrollBtn.style.display = "flex";
    } else {
        scrollBtn.style.display = "none";
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// =============================
// SMOOTH SCROLL
// =============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// =============================
// ACTIVE NAVIGATION
// =============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// =============================
// SCROLL REVEAL ANIMATION
// =============================

const revealElements = document.querySelectorAll(
    ".feature-card, .price-card, .testimonial-card, .about-item, .company"
);

const reveal = () => {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.6s ease";

});

window.addEventListener("scroll", reveal);

reveal();

// =============================
// BUTTON RIPPLE EFFECT
// =============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px) scale(1.02)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";

    });

});

// =============================
// CONSOLE MESSAGE
// =============================

console.log("🚀 FinFlow Loaded Successfully");