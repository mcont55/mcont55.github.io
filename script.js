// Fade-in animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(section => observer.observe(section));

// Scroll to top button
const scrollBtn = document.getElementById("scrollToTopBtn");
if (scrollBtn) {
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Expand/collapse projects and hide link if none
document.querySelectorAll('.project-card').forEach(card => {
  const link = card.querySelector('.project-link');
  if (link && !link.getAttribute('href') || link.getAttribute('href') === "#") {
    link.style.display = "none";
  }

  card.addEventListener('click', () => {
    card.classList.toggle('expanded');
  });
});

// Typing effect
new Typed('#typed', {
  strings: ['Data Science Enthusiast', 'Visualization Junkie', 'Creative Problem Solver'],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 1800,
  startDelay: 200,
  loop: true
});
