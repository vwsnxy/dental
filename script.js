// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('.header');

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Map button click handler
    const openMapsBtn = document.querySelector('.open-maps-btn');
    if (openMapsBtn) {
        openMapsBtn.addEventListener('click', function(e) {
            // The link is already set in HTML, this is just for tracking
            console.log('Open in Maps clicked');
        });
    }

    // Floating Action Button functionality
    const fabButton = document.getElementById('fabButton');
    const fabOptions = document.getElementById('fabOptions');
    const fabOptionsList = document.querySelectorAll('.fab-option');

    if (fabButton && fabOptions) {
        fabButton.addEventListener('click', function() {
            fabButton.classList.toggle('active');
            fabOptions.classList.toggle('active');
        });

        // Handle FAB option clicks
        fabOptionsList.forEach(option => {
            option.addEventListener('click', function() {
                const action = this.getAttribute('data-action');
                
                switch(action) {
                    case 'whatsapp':
                        window.open('https://wa.me/918882221711?text=Hello! I am interested in booking a dental appointment at Vashisth Dental Care', '_blank');
                        break;
                    case 'call':
                        window.location.href = 'tel:+918882221711';
                        break;
                }
                
                // Close FAB after action
                fabButton.classList.remove('active');
                fabOptions.classList.remove('active');
            });
        });

        // Close FAB when clicking outside
        document.addEventListener('click', function(e) {
            if (!fabButton.contains(e.target) && !fabOptions.contains(e.target)) {
                fabButton.classList.remove('active');
                fabOptions.classList.remove('active');
            }
        });
    }

    // WhatsApp link enhancement
    document.querySelectorAll('.whatsapp-btn, .whatsapp-btn-large').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Add click tracking or analytics here if needed
            console.log('WhatsApp contact clicked');
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.service-card, .contact-item, .about-content').forEach(el => {
        observer.observe(el);
    });

    // Form validation (if you add forms later)
    function validateForm(form) {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        return isValid;
    }

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // Service card hover effects with enhanced animations
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(37, 99, 235, 0.15)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });

    // Contact item hover effects
    document.querySelectorAll('.contact-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
        });
    });

    // Add staggered animation to service cards
    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Add staggered animation to contact items
    document.querySelectorAll('.contact-item').forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });

    // Add CSS for mobile menu
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .nav-links {
                position: fixed;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                flex-direction: column;
                padding: 2rem;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                transform: translateY(-100%);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }

            .nav-links.active {
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
            }

            .nav-links a {
                padding: 1rem 0;
                border-bottom: 1px solid #e5e7eb;
                width: 100%;
                text-align: center;
            }

            .nav-links a:last-child {
                border-bottom: none;
            }

            .mobile-menu-btn.active i {
                transform: rotate(90deg);
            }

            .mobile-menu-btn i {
                transition: transform 0.3s ease;
            }
        }

        .header.scrolled {
            background: rgba(255, 255, 255, 0.98);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
        }

        .animate-in {
            animation: fadeInUp 0.6s ease-out forwards;
        }

        .loaded {
            opacity: 1;
        }

        body {
            opacity: 0;
            transition: opacity 0.5s ease;
        }

        .error {
            border-color: #ef4444 !important;
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
        }
    `;
    document.head.appendChild(style);
});

// Add some additional utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll performance
const optimizedScrollHandler = debounce(function() {
    // Add any scroll-based functionality here
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Add touch support for mobile
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}

// Service worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
} 