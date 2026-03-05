function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}
const popup = document.getElementById("releasePopup");

function closePopup() {
    popup.style.display = "none";
}

function goToRelease(e) {
    e.preventDefault();
    closePopup();

    // Change link below
    window.open("https://open.spotify.com/track/your-song-link", "_blank");
}

popup.addEventListener("click", function(e) {
    if (e.target === popup) {
        closePopup();
    }
});


/* search bar */

/* ===============================
   NAVBAR FUNCTIONALITY
================================= */

document.addEventListener("DOMContentLoaded", function() {

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    const links = navLinks.querySelectorAll("a");
    const navbar = document.querySelector(".navbar");

    /* ===============================
       HAMBURGER TOGGLE
    ================================= */
    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    /* ===============================
       CLOSE MENU WHEN LINK CLICKED
    ================================= */
    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            hamburger.classList.remove("active");
        });
    });

    /* ===============================
       STICKY NAVBAR ON SCROLL
    ================================= */
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    });

    /* ===============================
       ACTIVE LINK ON SCROLL
    ================================= */
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", function() {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        links.forEach(link => {
            link.classList.remove("active-link");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active-link");
            }
        });
    });

});



function searchSite() {
    let input = document.getElementById("searchInput").value.toLowerCase().trim();

    if (input === "") return;

    let elements = document.querySelectorAll("h1, h2, h3, p, li, span");

    for (let i = 0; i < elements.length; i++) {
        let text = elements[i].innerText.toLowerCase();

        if (text.includes(input)) {
            elements[i].scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            highlightElement(elements[i]);
            break; // stop after first match
        }
    }
}

function highlightElement(el) {
    el.style.transition = "0.3s";
    el.style.backgroundColor = "rgba(255, 81, 47, 0.3)";
    el.style.padding = "5px";
    el.style.borderRadius = "5px";

    setTimeout(() => {
        el.style.backgroundColor = "transparent";
    }, 2000);
}



const allowInspect = true; // change to false before going live

if (!allowInspect) {

    document.addEventListener("contextmenu", e => e.preventDefault());

    document.addEventListener("keydown", function(e) {
        if (e.ctrlKey && (
            e.key === "u" || 
            e.key === "c" || 
            e.key === "s" ||
            e.key === "i"
        )) {
            e.preventDefault();
        }

        if (e.key === "F12") {
            e.preventDefault();
        }
    });

}
