// ===============================
// Feather Icons initialization
// ===============================
feather.replace();

// ===============================
// Typewriter Effect
// ===============================
const textArray = ["Web Developer", "Frontend Engineer", "UI/UX Enthusiast"];
let textIndex = 0;
let charIndex = 0;
const typewriter = document.getElementById("typewriter");

function type() {
  if (!typewriter) return;
  if (charIndex < textArray[textIndex].length) {
    typewriter.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typewriter.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 60);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, 300);
  }
}

type();

// ===============================
// Scroll Reveal Animation
// ===============================
function revealElements() {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealElements);
revealElements();

// ===============================
// Skill Bar Animation
// ===============================
function animateSkillBars() {
  document.querySelectorAll(".bar-fill").forEach(bar => {
    const top = bar.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      bar.style.width = bar.getAttribute("data-fill");
    }
  });
}
window.addEventListener("scroll", animateSkillBars);

// ===============================
// Scroll To Top Button
// ===============================
const scrollTopBtn = document.createElement("button");
scrollTopBtn.id = "scrollTopBtn";
scrollTopBtn.innerHTML = "↑";
scrollTopBtn.style.position = "fixed";
scrollTopBtn.style.bottom = "25px";
scrollTopBtn.style.right = "25px";
scrollTopBtn.style.display = "none";
scrollTopBtn.style.background = "#3B82F6";
scrollTopBtn.style.color = "#fff";
scrollTopBtn.style.border = "none";
scrollTopBtn.style.borderRadius = "50%";
scrollTopBtn.style.width = "40px";
scrollTopBtn.style.height = "40px";
scrollTopBtn.style.cursor = "pointer";
scrollTopBtn.style.fontSize = "20px";
scrollTopBtn.style.zIndex = "1000";
scrollTopBtn.style.transition = "all 0.3s ease";
scrollTopBtn.onmouseenter = () => (scrollTopBtn.style.background = "#2563EB");
scrollTopBtn.onmouseleave = () => (scrollTopBtn.style.background = "#3B82F6");
document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
scrollTopBtn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

// ===============================
// EmailJS Integration
// ===============================
(function() {
  emailjs.init("_pbwMW1vVz3RtNl1A"); // your public key
})();

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_9a2zivp", "template_6zit5mt", this)
      .then(() => {
        alert("✅ Message sent successfully!");
        contactForm.reset();
      })
      .catch(err => {
        console.error("EmailJS error:", err);
        alert("❌ Failed to send message. Please try again later.");
      });
  });
}

// ===============================
// Dynamic Footer Year
// ===============================
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
