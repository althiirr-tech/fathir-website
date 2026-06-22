const texts = [
    "Mahasiswa Sistem Komputer",
    "Arduino Developer",
    "IoT Enthusiast",
    "Future Network Engineer"
];

let count = 0;
let index = 0;
let currentText = "";

function type() {
    const el = document.getElementById("typing");

    if (!el) return; // safety check

    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];
    const letter = currentText.slice(0, ++index);

    el.textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1500);
    } else {
        setTimeout(type, 80);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    type();
    reveal(); // langsung jalan saat load
});

window.addEventListener("scroll", reveal);

function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(item => {
        const windowHeight = window.innerHeight;
        const revealTop = item.getBoundingClientRect().top;

        if (revealTop < windowHeight - 80) {
            item.classList.add("active");
        }
    });
}