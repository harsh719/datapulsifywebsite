
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

  // How It Works Section
  const howItWorksSection = document.getElementById('how-it-works');
  if (howItWorksSection) {
    howItWorksSection.innerHTML = `
      <div class="container">
        <h2 class="section-title">How It Works</h2>
        <p class="section-subtitle">
          Getting started with Datapulsify is easy. Here's how you can begin analyzing your GSC data in minutes.
        </p>
        <div class="how-it-works-steps">
          <div class="step opacity-0">
            <div class="step-icon-container">
              <svg class="step-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div class="step-number">1</div>
            <h3 class="step-title">Connect Your GSC Account</h3>
            <p class="step-description">One-click integration with Google Search Console</p>
          </div>
          <div class="step opacity-0">
            <div class="step-icon-container">
              <svg class="step-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
            </div>
            <div class="step-number">2</div>
            <h3 class="step-title">Choose Data & Customize Queries</h3>
            <p class="step-description">Select exactly what data you want to analyze</p>
          </div>
          <div class="step opacity-0">
            <div class="step-icon-container">
              <svg class="step-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <polyline points="17 1 21 5 17 9"></polyline>
                <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                <polyline points="7 23 3 19 7 15"></polyline>
                <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
              </svg>
            </div>
            <div class="step-number">3</div>
            <h3 class="step-title">Sync to Google Sheets & Automate</h3>
            <p class="step-description">Seamlessly pull data into your spreadsheets</p>
          </div>
          <div class="step opacity-0">
            <div class="step-icon-container">
              <svg class="step-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
            </div>
            <div class="step-number">4</div>
            <h3 class="step-title">Analyze & Share Insights</h3>
            <p class="step-description">Transform data into actionable insights</p>
          </div>
        </div>
      </div>
    `;
  }
  
  // Pricing Section
  const pricingSection = document.getElementById('pricing');
  if (pricingSection) {
    pricingSection.innerHTML = `
      <div class="container">
        <h2 class="section-title">Pricing Plans</h2>
        <p class="section-subtitle">
          Choose the perfect plan for your GSC data needs.
        </p>
        <div class="pricing-cards">
          <div class="pricing-card opacity-0">
            <div class="pricing-header">
              <h3 class="pricing-tier">Free</h3>
              <div class="pricing-amount">$0</div>
              <div class="pricing-period">forever</div>
            </div>
            <div class="pricing-features">
              <div class="pricing-feature">
                <svg class="feature-check" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>1 GSC property</span>
              </div>
              <div class="pricing-feature">
                <svg class="feature-check" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>100 queries/month</span>
              </div>
              <div class="pricing-feature">
                <svg class="feature-check" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Basic query templates</span>
              </div>
              <div class="pricing-feature inactive">
                <svg class="feature-cross" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                <span>No automated refreshes</span>
              </div>
            </div>
            <a href="#" class="btn-secondary pricing-cta">Get Started</a>
          </div>
          <div class="pricing-card featured opacity-0">
            <div class="pricing-badge">Most Popular</div>
            <div class="pricing-header">
              <h3 class="pricing-tier">Pro</h3>
              <div class="pricing-amount">$19</div>
              <div class="pricing-period">per month</div>
            </div>
            <div class="pricing-features">
              <div class="pricing-feature">
                <svg class="feature-check" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>10 GSC properties</span>
              </div>
              <div class="pricing-feature">
                <svg class="feature-check" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Unlimited queries</span>
              </div>
              <div class="pricing-feature">
                <svg class="feature-check" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Advanced query templates</span>
              </div>
              <div class="pricing-feature">
                <svg class="feature-check" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Daily automatic refreshes</span>
              </div>
            </div>
            <a href="#" class="btn-primary pricing-cta">Get Started</a>
          </div>
          <div class="pricing-card opacity-0">
            <div class="pricing-header">
              <h3 class="pricing-tier">Enterprise</h3>
              <div class="pricing-amount">Custom</div>
              <div class="pricing-period">contact us</div>
            </div>
            <div class="pricing-features">
              <div class="pricing-feature">
                <svg class="feature-check" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Unlimited GSC properties</span>
              </div>
              <div class="pricing-feature">
                <svg class="feature-check" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Unlimited queries</span>
              </div>
              <div class="pricing-feature">
                <svg class="feature-check" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Custom query builder</span>
              </div>
              <div class="pricing-feature">
                <svg class="feature-check" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Custom refresh schedules</span>
              </div>
            </div>
            <a href="#" class="btn-secondary pricing-cta">Contact Sales</a>
          </div>
        </div>
      </div>
    `;
  }

  // Community Section
  const communitySection = document.getElementById('community');
  if (communitySection) {
    communitySection.innerHTML = `
      <div class="container">
        <h2 class="section-title">Join Our Community</h2>
        <p class="section-subtitle">
          Connect with other GSC data enthusiasts and get the most out of Datapulsify.
        </p>
        <div class="community-cards">
          <div class="community-card opacity-0">
            <div class="community-icon-container">
              <svg class="community-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </div>
            <h3 class="community-title">Discord Community</h3>
            <p class="community-description">Join our Discord community to connect with other users, share tips, and get help.</p>
            <a href="#" class="btn-secondary community-cta">Join Discord</a>
          </div>
          <div class="community-card opacity-0">
            <div class="community-icon-container">
              <svg class="community-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </div>
            <h3 class="community-title">Twitter</h3>
            <p class="community-description">Follow us on Twitter for the latest updates, tips, and community highlights.</p>
            <a href="#" class="btn-secondary community-cta">Follow Us</a>
          </div>
          <div class="community-card opacity-0">
            <div class="community-icon-container">
              <svg class="community-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            <h3 class="community-title">Instagram</h3>
            <p class="community-description">Follow our Instagram for visual guides, user spotlights, and product announcements.</p>
            <a href="#" class="btn-secondary community-cta">Follow Us</a>
          </div>
        </div>
      </div>
    `;
  }

  // FAQ Section
  const faqSection = document.getElementById('faq');
  if (faqSection) {
    faqSection.innerHTML = `
      <div class="container">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <p class="section-subtitle">
          Got questions? We've got answers.
        </p>
        <div class="faq-container">
          <div class="faq-item opacity-0">
            <div class="faq-question">
              <h3>What is Datapulsify?</h3>
              <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer">
              <p>Datapulsify is a tool that helps you easily pull Google Search Console data into Google Sheets for analysis and reporting. It simplifies the process of working with GSC data by offering an intuitive interface and powerful features.</p>
            </div>
          </div>
          <div class="faq-item opacity-0">
            <div class="faq-question">
              <h3>How does the GSC integration work?</h3>
              <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer">
              <p>Our GSC integration uses the official Google Search Console API to securely access your data. You'll need to authorize Datapulsify to access your GSC account, after which you can start pulling data directly into your Google Sheets.</p>
            </div>
          </div>
          <div class="faq-item opacity-0">
            <div class="faq-question">
              <h3>Is my data secure?</h3>
              <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer">
              <p>Yes, your data security is our priority. We use industry-standard encryption and security practices. We only access the GSC data that you explicitly authorize us to, and we don't store your raw GSC data on our servers.</p>
            </div>
          </div>
          <div class="faq-item opacity-0">
            <div class="faq-question">
              <h3>What if I need help?</h3>
              <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer">
              <p>We offer comprehensive documentation, video tutorials, and email support for all users. Pro and Enterprise users also get priority support and access to our dedicated support team.</p>
            </div>
          </div>
          <div class="faq-item opacity-0">
            <div class="faq-question">
              <h3>Can I cancel my subscription?</h3>
              <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer">
              <p>Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. If you cancel, your subscription will remain active until the end of your current billing period.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
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

  // Initialize section content - make sure this runs
  initializeSections();

  // Setup FAQ toggle functionality
  setupFaqToggle();
}

// Handle FAQ toggle
function setupFaqToggle() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Toggle active state
      const isActive = item.classList.contains('active');
      
      // Close all other items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherIcon = otherItem.querySelector('.faq-icon');
        if (otherIcon) otherIcon.textContent = '+';
      });
      
      // Toggle this item
      if (!isActive) {
        item.classList.add('active');
        const icon = item.querySelector('.faq-icon');
        if (icon) icon.textContent = '−';
      } else {
        const icon = item.querySelector('.faq-icon');
        if (icon) icon.textContent = '+';
      }
    });
  });
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
