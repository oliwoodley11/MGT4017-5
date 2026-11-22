// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Cart counter
let count = 0;
const badge = document.getElementById('cart-count');
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    count++;
    badge.textContent = count;
    badge.hidden = false;
    const original = btn.textContent;
    btn.textContent = 'Added ✔';
    setTimeout(() => { btn.textContent = original; }, 1200);
  });
});

// Newsletter
const form = document.getElementById('newsletter');
const msg = document.getElementById('nl-msg');
form.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('email');
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
  msg.textContent = ok ? 'Thanks for subscribing!' : 'Enter a valid email address, for example name@example.com.';
  if (ok) form.reset();
});

// Highlight active nav link on scroll
const links = [...nav.querySelectorAll('a')];
const sections = links.map(a => document.querySelector(a.getAttribute('href')));
window.addEventListener('scroll', () => {
  const y = window.scrollY + 120;
  let idx = 0;
  sections.forEach((s, i) => { if (s && s.offsetTop <= y) idx = i; });
  links.forEach((a, i) => a.classList.toggle('active', i === idx));
}, { passive: true });
