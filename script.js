// Typed.js animation
document.addEventListener("DOMContentLoaded", () => {
  new Typed('#typed', {
    strings: ['Data Scientist', 'Visualization Junkie', 'Creative Problem Solver', 'Machine Learning Explorer'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1800,
    startDelay: 200,
    loop: true
  });
});

// Scroll progress
window.addEventListener("scroll", () => {
  const scrollProgress = document.getElementById("scrollProgress");
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  scrollProgress.style.width = (window.scrollY / totalHeight) * 100 + "%";
});

// Scroll-to-top
const scrollBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Project expand/collapse
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('expanded');
  });
});
