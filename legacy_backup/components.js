function getCurrentPage() {
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';
  return page;
}

function insertNavbar() {
  if (document.querySelector('nav.navbar')) return;

  const currentPage = getCurrentPage();
  const navbarHTML = `
    <div id="global-header" class="fixed-top" style="box-shadow: 0 4px 15px rgba(0,0,0,0.1); font-family: var(--font-main);">
      <div id="header-marquee" style="background: var(--secondary-color); color: var(--bg-color); padding: 8px 0; font-family: var(--font-serif); letter-spacing: 1px; position: relative; z-index: 1031;">
        <marquee behavior="scroll" direction="left">
          <span>✨ Welcome To The Crystal Products • Healing Crystals for Balance & Clarity • Free Shipping on Orders Over ₹2000 ✨</span>
        </marquee>
      </div>
      <nav class="navbar navbar-expand-lg custom-navbar" style="background: rgba(255, 255, 255, 0.98); backdrop-filter: blur(10px);">
        <div class="container-fluid px-4">
          <a class="navbar-brand" href="index.html">
            <img src="crystal-new-logo.png" alt="Crystal Gems World Logo" class="img-fluid logo-img" style="max-height: 80px;">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li class="nav-item">
                <a class="nav-link ${currentPage === 'index.html' || currentPage === '' ? 'active' : ''}" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${currentPage === 'About.html' ? 'active' : ''}" href="About.html">About Us</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop Crystals
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="products.html">All Products</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item ${currentPage === 'diamond.html' ? 'active' : ''}" href="diamond.html">Diamond</a></li>
                  <li><a class="dropdown-item ${currentPage === 'Amber.html' ? 'active' : ''}" href="Amber.html">Amber</a></li>
                  <li><a class="dropdown-item ${currentPage === 'Amethyst.html' ? 'active' : ''}" href="Amethyst.html">Amethyst</a></li>
                  <li><a class="dropdown-item ${currentPage === 'other_crystal.html' ? 'active' : ''}" href="other_crystal.html">Other Crystals</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link ${currentPage === 'compare product.html' ? 'active' : ''}" href="compare product.html">Compare</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${currentPage === 'contact.html' ? 'active' : ''}" href="contact.html">Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${currentPage === 'location.html' ? 'active' : ''}" href="location.html">Location</a>
              </li>
              <li class="nav-item ms-lg-2">
                <a class="btn btn-main btn-sm rounded-pill px-3 py-2" href="products.html" style="font-size: 0.9rem;">Shop Now</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', navbarHTML);
}

function insertFooter() {
  if (document.querySelector('footer.footer-section')) return;

  const footerHTML = `
    <footer class="footer-section text-white pt-5 pb-4" style="font-family: var(--font-main);">
      <div class="container">
        <div class="row mb-5 text-center">
          <div class="col-12">
            <h2 class="brand mb-3">Stay In Touch</h2>
              Sign up for exclusive offers, original stories, new launches and more
            </p>
            <form class="newsletter-form mb-4" onsubmit="event.preventDefault();">
              <div class="input-group justify-content-center">
                <input type="email" class="form-control" placeholder="Enter your email" required>
                <button class="btn btn-gold" type="submit">Subscribe</button>
              </div>
            </form>
            <div class="social-icons d-flex justify-content-center gap-4">
              <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social-link"><i class="fab fa-youtube"></i></a>
              <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
              <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
              <a href="#" class="social-link"><i class="fab fa-pinterest-p"></i></a>
            </div>
          </div>
        </div>
        
        <div class="row gy-4 border-top border-white-50 pt-5">
          <div class="col-lg-4 col-md-6">
            <h5 class="footer-title mb-3">Crystal Collections</h5>
            <ul class="list-unstyled footer-links">
              <li><a href="Amber.html">Amber Collection</a></li>
              <li><a href="diamond.html">Diamond Collection</a></li>
              <li><a href="Amethyst.html">Amethyst Collection</a></li>
              <li><a href="other_crystal.html">Explore Others</a></li>
            </ul>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <h5 class="footer-title mb-3">Quick Links</h5>
            <ul class="list-unstyled footer-links">
              <li><a href="compare product.html">Compare Crystals</a></li>
              <li><a href="About.html">Our Story</a></li>
              <li><a href="contact.html">Get in Touch</a></li>
              <li><a href="location.html">Find Us</a></li>
            </ul>
          </div>
          
          <div class="col-lg-4 col-md-12">
            <h5 class="footer-title mb-3">Contact Information</h5>
            <ul class="list-unstyled footer-links contact-info">
              <li class="mb-2"><i class="fas fa-phone-alt me-2"></i> <a href="tel:+917570000333">+91 757-0000-333</a></li>
              <li class="mb-2"><i class="fas fa-envelope me-2"></i> <a href="mailto:info@themiraclehub.in">info@themiraclehub.in</a></li>
              <li><i class="fas fa-map-marker-alt me-2"></i> Mumbai, India</li>
            </ul>
          </div>
        </div>
        
        <div class="row mt-5">
          <div class="col-12 text-center">
            <p class="mb-0 text-white-50 small">
              © ${new Date().getFullYear()} The Miracle Hub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML('beforeend', footerHTML);
}

document.addEventListener('DOMContentLoaded', function () {
  insertNavbar();
  insertFooter();
  initSliders();
});

function initSliders() {
  const sliders = document.querySelectorAll('.slider, .manifestation-slider');
  sliders.forEach(slider => {
    // Enable drag scrolling
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });

    // Touch events for mobile
    slider.addEventListener('touchstart', () => {
      isDown = true;
    }, { passive: true });
    slider.addEventListener('touchend', () => {
      isDown = false;
    });
  });

  document.querySelectorAll('.slider-nav-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const container = this.parentElement.querySelector('.slider, .manifestation-slider');
      if (container) {
        const scrollAmount = container.clientWidth / 2;
        if (this.classList.contains('prev')) {
          container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    });
  });
}

