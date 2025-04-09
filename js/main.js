
// DOM elements
const navbar = document.getElementById('navbar');
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileNav = document.querySelector('.mobile-nav');
const yearElement = document.getElementById('current-year');
const waitlistForm = document.getElementById('waitlist-form');
const submissionSuccess = document.getElementById('submission-success');

// Set current year in footer
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Navbar scroll effect
function handleScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// Toggle mobile menu
function toggleMobileMenu() {
  mobileNav.classList.toggle('open');
  const menuIcon = document.querySelector('.menu-icon');
  if (mobileNav.classList.contains('open')) {
    menuIcon.textContent = '✕';
  } else {
    menuIcon.textContent = '☰';
  }
}

// Close mobile menu when clicking a link
function setupMobileNavLinks() {
  const mobileLinks = document.querySelectorAll('.nav-link-mobile');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      document.querySelector('.menu-icon').textContent = '☰';
    });
  });
}

// Handle waitlist form submission
function handleFormSubmit(e) {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const company = document.getElementById('company').value;
  const newsletter = document.getElementById('newsletter').checked;
  
  // In a real app, you would send this data to your server
  console.log({
    name,
    email,
    company,
    newsletter
  });
  
  // Show success message
  waitlistForm.style.display = 'none';
  submissionSuccess.classList.remove('hidden');
  
  // Reset form
  waitlistForm.reset();
}

// Scroll animation setup
function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }
  );

  const hiddenElements = document.querySelectorAll('.opacity-0');
  hiddenElements.forEach((el) => observer.observe(el));
}

// Initialize event listeners
function init() {
  // Scroll event for navbar
  window.addEventListener('scroll', handleScroll);
  
  // Mobile menu toggle
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
  }
  
  // Setup mobile nav links
  setupMobileNavLinks();
  
  // Waitlist form submission
  if (waitlistForm) {
    waitlistForm.addEventListener('submit', handleFormSubmit);
  }
  
  // Setup scroll animations
  setupScrollAnimations();
  
  // Initialize navbar state
  handleScroll();
}

// Run initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

// Handle navigation for anchor links (smooth scroll)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    // Don't smooth scroll if it's just a "#" link
    if (this.getAttribute('href') === '#') return;
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
