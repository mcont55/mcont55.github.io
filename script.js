// Trigger fade-in animations when elements scroll into view
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(section => observer.observe(section));

// Scroll to top button logic
const scrollBtn = document.getElementById("scrollToTopBtn");
if (scrollBtn) {
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Expand/collapse project card content
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('expanded');
  });
});


// Typewriter effect for the tagline
const typedElement = document.getElementById('typed');
if (typedElement) {
  const phrases = ['Data Scientist', 'Visualization Junkie', 'Data Analyst', 'Problem Solver'];
  let phraseIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < phrases[phraseIndex].length) {
      typedElement.textContent += phrases[phraseIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 2000);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedElement.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50);
    } else {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 200);
    }
  }

  // start the typing effect
  type();
}
