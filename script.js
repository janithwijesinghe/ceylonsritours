// Mobile nav toggle
const mobileToggle = document.getElementById('mobileMenuToggle');
const mobileNav = document.getElementById('mobileNav');

if (mobileToggle && mobileNav) {
  mobileToggle.addEventListener('click', () => {
    mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
  });
}

// Hero slider
const slides = document.querySelectorAll('.hero-slide');
const dotsContainer = document.getElementById('heroDots');
let currentSlide = 0;

if (slides.length && dotsContainer) {
  slides.forEach((_, idx) => {
    const dot = document.createElement('div');
    dot.className = 'hero-dot' + (idx === 0 ? ' active' : '');
    dot.dataset.index = idx;
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.hero-dot');

  function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    currentSlide = index;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  let sliderInterval = setInterval(nextSlide, 6000);

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      clearInterval(sliderInterval);
      showSlide(Number(dot.dataset.index));
      sliderInterval = setInterval(nextSlide, 6000);
    });
  });
}

// Testimonial simple slider
const testimonials = document.querySelectorAll('#testimonialSlider .testimonial');
let testimonialIndex = 0;

function rotateTestimonial() {
  if (!testimonials.length) return;
  testimonials[testimonialIndex].classList.remove('active');
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  testimonials[testimonialIndex].classList.add('active');
}

if (testimonials.length) {
  setInterval(rotateTestimonial, 7000);
}
