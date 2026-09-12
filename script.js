// =========================
// DARK / LIGHT MODE
// =========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";

    }

});


// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinksContainer = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    navLinksContainer.classList.toggle("active");

});


// Close menu after clicking a link

const mobileLinks =
    document.querySelectorAll(".nav-links a");

mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinksContainer.classList.remove("active");

    });

});


// =========================
// ACTIVE NAVIGATION LINK
// =========================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


// =========================
// SCROLL ANIMATION
// =========================

const animatedElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .info-box"
    );


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.15
        }

    );


animatedElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});


// =========================
// HERO ROLE ROTATION
// =========================

const roles = [
    "AI Student",
    "Data Analyst",
    "Front-End Developer"
];

const heroRole =
    document.querySelector(".hero h2");

let roleIndex = 0;


setInterval(function () {

    roleIndex++;

    if (roleIndex >= roles.length) {

        roleIndex = 0;

    }

    heroRole.style.opacity = "0";


    setTimeout(function () {

        heroRole.innerHTML =
            roles[roleIndex];

        heroRole.style.opacity = "1";

    }, 300);

}, 3000);