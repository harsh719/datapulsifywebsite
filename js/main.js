
// DOM elements
const navbar = document.getElementById('navbar');
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileNav = document.querySelector('.mobile-nav');
const yearElement = document.getElementById('current-year');
const waitlistForm = document.getElementById('waitlist-form');
const submissionSuccess = document.getElementById('submission-success');
const mainSections = document.querySelectorAll('main section');

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

// Initialize section content
function initializeSections() {
  // Hero Section Content
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    heroSection.innerHTML = `
      <div class="container">
        <div class="hero-content">
          <span class="hero-badge">The easiest way to analyze GSC data</span>
          <h1 class="hero-title">Effortless GSC Data Sync for Google Sheets</h1>
          <p class="hero-description">
            Datapulsify lets you seamlessly pull, analyze, and automate your 
            Google Search Console data inside Google Sheets.
          </p>
          <div class="hero-actions">
            <a href="#pricing" class="btn-primary">Get Started for Free</a>
            <a href="#how-it-works" class="btn-secondary">See How It Works</a>
          </div>
          <div class="hero-note">No credit card required. Cancel anytime.</div>
        </div>
        <div class="hero-image-container">
          <div class="hero-image">
            <div class="mockup-header">
              <div class="mockup-dots">
                <div class="mockup-dot"></div>
                <div class="mockup-dot"></div>
                <div class="mockup-dot"></div>
              </div>
              <div class="mockup-title">Datapulsify GSC Integration</div>
            </div>
            <div class="mockup-content">
              <div class="mockup-toolbar">
                <div class="mockup-cell"></div>
                <div class="mockup-cell"></div>
                <div class="mockup-cell"></div>
                <div class="mockup-cell"></div>
                <div class="mockup-cell"></div>
                <div class="mockup-cell"></div>
              </div>
              <div class="mockup-data">
                <div class="mockup-row">
                  <div class="mockup-cell large"></div>
                  <div class="mockup-cell small"></div>
                  <div class="mockup-cell small"></div>
                  <div class="mockup-cell small"></div>
                </div>
                <div class="mockup-row">
                  <div class="mockup-cell large"></div>
                  <div class="mockup-cell small"></div>
                  <div class="mockup-cell small"></div>
                  <div class="mockup-cell small"></div>
                </div>
                <div class="mockup-row">
                  <div class="mockup-cell large"></div>
                  <div class="mockup-cell small"></div>
                  <div class="mockup-cell small"></div>
                  <div class="mockup-cell small"></div>
                </div>
                <div class="mockup-row">
                  <div class="mockup-cell large"></div>
                  <div class="mockup-cell small"></div>
                  <div class="mockup-cell small"></div>
                  <div class="mockup-cell small"></div>
                </div>
                <div class="mockup-row">
                  <div class="mockup-cell large"></div>
                  <div class="mockup-cell small"></div>
                  <div class="mockup-cell small"></div>
                  <div class="mockup-cell small"></div>
                </div>
              </div>
              <div class="mockup-badge">Synced with GSC</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Features Section Content
  const featuresSection = document.getElementById('features');
  if (featuresSection) {
    featuresSection.innerHTML = `
      <div class="container">
        <h2 class="section-title">Powerful Features</h2>
        <p class="section-subtitle">
          Everything you need to leverage Google Search Console data in your spreadsheets.
        </p>
        <div class="features-grid">
          <div class="feature-card opacity-0">
            <div class="feature-icon-container">
              <svg class="feature-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
            </div>
            <div class="feature-title-container">
              <h3 class="feature-title">One-Click GSC Integration</h3>
            </div>
            <p class="feature-description">Connect your Google Search Console in seconds and start pulling data instantly.</p>
          </div>
          <div class="feature-card opacity-0">
            <div class="feature-icon-container">
              <svg class="feature-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="3" y1="15" x2="21" y2="15"></line>
                <line x1="9" y1="9" x2="9" y2="21"></line>
                <line x1="15" y1="9" x2="15" y2="21"></line>
              </svg>
            </div>
            <div class="feature-title-container">
              <h3 class="feature-title">Custom Query Builder</h3>
            </div>
            <p class="feature-description">Filter, segment, and extract the exact data you need with easy-to-use query tools.</p>
          </div>
          <div class="feature-card opacity-0">
            <div class="feature-icon-container">
              <svg class="feature-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 4v6h-6"></path>
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
              </svg>
            </div>
            <div class="feature-title-container">
              <h3 class="feature-title">Automated Refresh & Scheduling</h3>
              <span class="feature-badge">Coming Soon</span>
            </div>
            <p class="feature-description">Keep your reports always updated with automated sync options.</p>
          </div>
          <div class="feature-card opacity-0">
            <div class="feature-icon-container">
              <svg class="feature-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 20V10"></path>
                <path d="M12 20V4"></path>
                <path d="M6 20v-6"></path>
              </svg>
            </div>
            <div class="feature-title-container">
              <h3 class="feature-title">Powerful Data Visualizations</h3>
              <span class="feature-badge">Coming Soon</span>
            </div>
            <p class="feature-description">Turn raw GSC data into meaningful insights with built-in chart compatibility.</p>
          </div>
        </div>
      </div>
    `;
  }

  // Initialize other sections as well - You can add more sections as needed
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

  // Initialize section content
  initializeSections();
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

