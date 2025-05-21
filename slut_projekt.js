document.addEventListener("DOMContentLoaded", () => {
    loadingScreen(); // Starta förladdningsanimationen så fort sidan är laddad


    const navToggle = document.querySelector('.nav-toggle'); // Hämta hamburgermenyn
    const navUl = document.querySelector('nav ul'); // Hämta navigationslistan

    // Klick på hamburgermenyn visar/döljer navigationsmenyn
    navToggle.addEventListener('click', () => {
        navUl.classList.toggle('open');
        navToggle.classList.toggle('open');
    });

    // När en meny-länk klickas, stängs mobilmenyn
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            navUl.classList.remove('open');
            navToggle.classList.remove('open');
        });
    });

    const bookingForm = document.getElementById("booking-form");
    const bookingMessage = document.getElementById("booking-message");

    // När bokningsformuläret skickas:
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Förhindra att sidan laddas om
        bookingMessage.innerText = "Du har bokat din tid, se mail för mer information."; // Visa bekräftelsemeddelande
        bookingForm.reset(); // Töm formuläret
    });
});

// Funktion för förladdningsskärm (progress animation)
function loadingScreen() {
    let percent = 0;
    let interval = setInterval(() => {
        percent += Math.floor(Math.random() * 10); // Öka procent slumpmässigt
        if (percent > 100) percent = 100;

        document.getElementById("loading-percentage").innerText = percent; // Uppdatera text på skärmen

        if (percent === 100) {
            clearInterval(interval); // Stoppa intervallet
            document.getElementById("preloader").style.display = "none"; // Göm förladdaren
        }
    }, 200);
}
    // Modal för att förstora bilder (konstnärer och galleri)
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-image");
    const artistImages = document.querySelectorAll(".artist img");

    // Klick på konstnärsbild => öppna modal med bild
    artistImages.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });

    // Klick på "bakgrund" i modal stänger modal
    modal.addEventListener("click", (e) => {
        if (e.target.classList.contains("close-area")) {
            modal.style.display = "none";
        }
    });

// Samma modal-funktionalitet för galleri-bilder
const galleryImages = document.querySelectorAll(".gallery-container img");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

// Smooth scroll när man klickar på en menylänk
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
