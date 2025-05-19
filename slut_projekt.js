document.addEventListener("DOMContentLoaded", () => {
    loadingScreen();

    const navToggle = document.querySelector('.nav-toggle');
    const navUl = document.querySelector('nav ul');

    navToggle.addEventListener('click', () => {
        navUl.classList.toggle('open');
        navToggle.classList.toggle('open');
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            navUl.classList.remove('open');
            navToggle.classList.remove('open');
        });
    });

    // Bokningsformulär
    const bookingForm = document.getElementById("booking-form");
    const bookingMessage = document.getElementById("booking-message");

    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();
        bookingMessage.innerText = "Du har bokat din tid, se mail för mer information.";
        bookingForm.reset();
    });
});

function loadingScreen() {
    let percent = 0;
    let interval = setInterval(() => {
        percent += Math.floor(Math.random() * 10);
        if (percent > 100) percent = 100;

        document.getElementById("loading-percentage").innerText = percent;

        if (percent === 100) {
            clearInterval(interval);
            document.getElementById("preloader").style.display = "none";
        }
    }, 200);
}

    // Modal för att visa stor bild
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-image");
    const artistImages = document.querySelectorAll(".artist img");

    artistImages.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });

    // Stäng modalen vid klick utanför bilden
    modal.addEventListener("click", (e) => {
        if (e.target.classList.contains("close-area")) {
            modal.style.display = "none";
        }
    });
