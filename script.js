// Reveal cards on scroll
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach((el) => observer.observe(el));

// Nav shrink on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.style.padding = '0';
  } else {
    nav.style.padding = '';
  }
});

// Booking form — placeholder submit (no backend yet)
const form = document.getElementById('bookForm');
const note = document.getElementById('bookNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const depart = document.getElementById('depart').value;

  if (from === to) {
    note.textContent = 'Origin and destination can\'t be the same city.';
    note.style.color = '#FF8A65';
    return;
  }

  note.style.color = '';
  note.textContent = depart
    ? `Searching ${from} → ${to} on ${depart}…`
    : `Searching ${from} → ${to}…`;
});
