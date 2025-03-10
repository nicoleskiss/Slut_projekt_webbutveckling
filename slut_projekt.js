// Laddningsskärm 
setTimeout(() => {
    gsap.to("#loading-screen", { opacity: 0, duration: 1, onComplete: () => {
        document.getElementById("loading-screen").style.display = "none";
    }});
}, 2000);