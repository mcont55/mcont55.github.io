// Trigger fade-in animations when elements scroll into view
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Animate once
    }
  });
}, {
  threshold: 0.1
});

// Observe each fade-in element
const sections = document.querySelectorAll('.fade-in');
sections.forEach(section => {
  observer.observe(section);
});

