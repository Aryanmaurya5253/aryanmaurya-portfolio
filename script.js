// Initialize Feather Icons
feather.replace();

// Typewriter effect
const text = ["Web Developer", "Frontend Engineer", "UI/UX Enthusiast"];
let index = 0;
let charIndex = 0;
const typewriter = document.getElementById("typewriter");

function type() {
  if (charIndex < text[index].length) {
    typewriter.textContent += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typewriter.textContent = text[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 60);
  } else {
    index = (index + 1) % text.length;
    setTimeout(type, 300);
  }
}

type();

// Scroll reveal animation
function reveal() {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) el.classList.add("active");
  });
}
window.addEventListener("scroll", reveal);
reveal();

// Skill bar animation
function animateBars() {
  document.querySelectorAll(".bar-fill").forEach(bar => {
    const top = bar.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      bar.style.width = bar.getAttribute("data-fill");
    }
  });
}
window.addEventListener("scroll", animateBars);

// Carousel scroll
function scrollCarousel(x) {
  document.getElementById("carousel").scrollBy({ left: x, behavior: "smooth" });
}

// Scroll to top button
const scrollTopBtn = document.createElement("button");
scrollTopBtn.id = "scrollTopBtn";
scrollTopBtn.innerHTML = "↑";
document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
scrollTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// EmailJS integration
(function() {
  emailjs.init("_pbwMW1vVz3RtNl1A");
})();

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  emailjs.sendForm("service_9a2zivp", "template_6zit5mt", this)
    .then(() => {
      alert("✅ Message sent successfully!");
      this.reset();
    }, err => {
      alert("❌ Failed to send message: " + JSON.stringify(err));
    });
});

// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();
