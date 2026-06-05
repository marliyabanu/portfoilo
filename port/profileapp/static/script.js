// ===============================
// PORTFOLIO JAVASCRIPT
// ===============================

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });
    });
});

// Navbar Shadow on Scroll

window.addEventListener('scroll', () => {

    const header = document.querySelector('header');

    if (window.scrollY > 50) {
        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.12)";
    } else {
        header.style.boxShadow =
            "0 2px 10px rgba(0,0,0,0.05)";
    }
});

// Active Menu Highlight

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active");
        }
    });
});

// Scroll Reveal Animation

const revealElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .service-card, .edu-card, .about-container"
    );

function reveal() {

    const windowHeight =
        window.innerHeight;

    revealElements.forEach(element => {

        const revealTop =
            element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {

            element.style.opacity = "1";
            element.style.transform =
                "translateY(0)";

        } else {

            element.style.opacity = "0";
            element.style.transform =
                "translateY(50px)";
        }
    });
}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transition =
        "all 0.8s ease";

});

window.addEventListener("scroll", reveal);

reveal();

// Typing Effect

const text =
    "Aspiring Software Developer";

const typingElement =
    document.querySelector(".welcome");

if (typingElement) {

    let i = 0;

    function typing() {

        if (i < text.length) {

            typingElement.innerHTML +=
                text.charAt(i);

            i++;

            setTimeout(typing, 100);
        }
    }

    typingElement.innerHTML = "";

    typing();
}

// Profile Floating Animation

const profile =
    document.querySelector(".circle");

if (profile) {

    let position = 0;
    let direction = 1;

    setInterval(() => {

        position += direction * 0.5;

        if (position > 10)
            direction = -1;

        if (position < -10)
            direction = 1;

        profile.style.transform =
            `translateY(${position}px)`;

    }, 30);
}

// Contact Form

const form =
    document.querySelector("form");

if (form) {

    form.addEventListener("submit",
        function(e) {

            e.preventDefault();

            alert(
                "Message Sent Successfully!"
            );

            form.reset();
        }
    );
}

// Project Hover Effect

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );

projectCards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
                "translateY(-10px)";
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0)";
        }
    );
});

// Skill Card Animation

const skillCards =
    document.querySelectorAll(
        ".skill-card"
    );

skillCards.forEach((card, index) => {

    card.style.animation =
        `fadeUp 0.6s ease forwards`;

    card.style.animationDelay =
        `${index * 0.2}s`;
});

// Back To Top Button

const topButton =
    document.createElement("button");

topButton.innerHTML = "↑";

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#ff6ba6";
topButton.style.color = "#fff";
topButton.style.fontSize = "20px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "1000";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display =
            "block";

    } else {

        topButton.style.display =
            "none";
    }
});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Console Welcome

console.log(
    "%cWelcome to My Portfolio 🚀",
    "color:#ff6ba6;font-size:20px;font-weight:bold;"
);