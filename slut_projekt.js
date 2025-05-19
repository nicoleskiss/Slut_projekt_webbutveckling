// Väntar tills sidan är laddad
document.addEventListener("DOMContentLoaded", () => { 
    loadingScreen(); // Startar laddningsskärmen

    // Hamburger-meny: öppna/stäng navigation på mobil
    const navToggle = document.querySelector('.nav-toggle');
    const navUl = document.querySelector('nav ul');
    navToggle.addEventListener('click', () => {
        navUl.classList.toggle('open');
        navToggle.classList.toggle('open');
    });

    // Stänger menyn när man klickar på en länk (mobil)
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            navUl.classList.remove('open');
            navToggle.classList.remove('open');
        });
    });

    // Smooth scroll till galleri 
    const exploreBtn = document.querySelector('.hero-content button');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
        });
    }
});

// Laddningsskärm (preloader)
function loadingScreen() {
    let percentage = 0;
    let interval = setInterval(() => {
        percentage += Math.floor(Math.random() * 10);
        if (percentage > 100) percentage = 100;
        document.getElementById("loading-percentage").innerText = percentage;

        // När laddningen är klar, tona ut preloadern
        if (percentage === 100) {
            clearInterval(interval);
            gsap.to("#preloader", { opacity: 0, duration: 1, onComplete: () => {
                document.getElementById("preloader").style.display = "none";
            }});
        }
    }, 200);
}

// GSAP-animationer för olika sektioner
// Hero-sektion: fade in och knapp-animation
gsap.from("#hero .hero-content", { opacity: 0, y: 60, duration: 1, ease: "power2.out" });
gsap.from("#hero button", { scale: 0.8, opacity: 0, duration: 0.7, delay: 1, ease: "back.out(1.7)" });

// Galleri: rubrik och bilder
gsap.from("#gallery h2", { opacity: 0, y: 40, duration: 0.8, delay: 0.2 });
gsap.from(".gallery-container img", { opacity: 0, y: 40, duration: 0.8, stagger: 0.15, delay: 0.4 });

// Artists: rubrik och varje artist-kort
gsap.from("#artists h2", { opacity: 0, y: 40, duration: 0.8, delay: 0.2 });
gsap.from(".artist", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#artists",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

// Studio-sektion: rubrik och bilder/info
gsap.from("#studio h2", { opacity: 0, y: 40, duration: 0.8, delay: 0.2 });
gsap.from(".studio-content img, .studio-info", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#studio",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});