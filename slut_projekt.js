document.addEventListener("DOMContentLoaded", () => {
    loadingScreen();
});

// Laddningsskärm
function loadingScreen() {
    let percentage = 0;
    let interval = setInterval(() => {
        percentage += Math.floor(Math.random() * 10);
        if (percentage > 100) percentage = 100;
        document.getElementById("loading-percentage").innerText = percentage;

        if (percentage === 100) {
            clearInterval(interval);
            gsap.to("#preloader", { opacity: 0, duration: 1, onComplete: () => {
                document.getElementById("preloader").style.display = "none";
            }});
        }
    }, 200);
}

// Animationer
gsap.from("#hero h1", { opacity: 0, y: -50, duration: 1 });
gsap.from("#hero p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from("button", { opacity: 0, scale: 0.8, duration: 0.5, delay: 1 });

// Scroll-effekter
gsap.from(".artist", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: "#artists",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".studio-content img, .studio-info", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: "#studio",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});