// Premium reveal animation

const revealElements = document.querySelectorAll(
  '.founder-card, .service-card-premium, .doctor-card, .stat-card, .cta-card'
);

const revealOnScroll = () => {
  revealElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 80) {
      el.classList.add('active');
    }
  });
};

revealElements.forEach(el => el.classList.add('reveal'));

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Navbar shadow on scroll

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 25px 60px rgba(15,23,42,0.18)';
  } else {
    navbar.style.boxShadow = '0 20px 50px rgba(15,23,42,0.12)';
  }
});