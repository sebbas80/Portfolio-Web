/**
 * Sebastian Lopez - Portfolio JavaScript
 * Cybersecurity Specialist Portfolio
 * Advanced effects, animations, and interactions
 */

class PortfolioApp {
    constructor() {
        this.isDarkMode = false;
        this.particles = [];
        this.matrixChars = '01';
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initMatrix();
        this.initParticles();
        this.initObserver();
        this.initTerminalText();
        this.loadSavedPreferences();
        this.startAnimations();
    }

    setupEventListeners() {
        // Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href').substring(1);
                this.scrollToSection(targetId);
            });
        });

        // Contact form
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleContactForm(e));
        }

        // Scroll events
        window.addEventListener('scroll', () => {
            this.handleNavbarScroll();
            this.handleParallax();
        });

        // Resize events
        window.addEventListener('resize', () => {
            this.resizeMatrix();
            this.resizeParticles();
        });

        // Page load
        window.addEventListener('load', () => {
            document.body.classList.add('animate-fade-in');
            this.initTypingEffect();
        });
    }

    // Theme System
    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        document.documentElement.classList.toggle('dark', this.isDarkMode);
        
        const themeIcon = document.getElementById('themeIcon');
        if (themeIcon) {
            themeIcon.className = this.isDarkMode ? 'fas fa-sun' : 'fas fa-terminal';
        }
        
        localStorage.setItem('darkMode', this.isDarkMode);
    }

    // Matrix Rain Effect
    initMatrix() {
        const canvas = document.getElementById('matrixCanvas');
        if (!canvas) return;

        this.matrixCtx = canvas.getContext('2d');
        this.resizeMatrix();
        this.drawMatrix();
    }

    resizeMatrix() {
        const canvas = document.getElementById('matrixCanvas');
        if (!canvas) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        this.matrixColumns = Math.floor(canvas.width / 20);
        this.matrixDrops = Array(this.matrixColumns).fill(1);
    }

    drawMatrix() {
        if (!this.matrixCtx) return;

        const canvas = document.getElementById('matrixCanvas');
        this.matrixCtx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        this.matrixCtx.fillRect(0, 0, canvas.width, canvas.height);
        
        this.matrixCtx.fillStyle = '#00ff41';
        this.matrixCtx.font = '15px Fira Code';
        
        for (let i = 0; i < this.matrixDrops.length; i++) {
            const text = this.matrixChars[Math.floor(Math.random() * this.matrixChars.length)];
            this.matrixCtx.fillText(text, i * 20, this.matrixDrops[i] * 20);
            
            if (this.matrixDrops[i] * 20 > canvas.height && Math.random() > 0.975) {
                this.matrixDrops[i] = 0;
            }
            this.matrixDrops[i]++;
        }

        requestAnimationFrame(() => this.drawMatrix());
    }

    // Particle System
    initParticles() {
        const particleContainer = document.getElementById('particles');
        if (!particleContainer) return;

        this.createParticles();
        this.animateParticles();
    }

    createParticles() {
        const particleContainer = document.getElementById('particles');
        const colors = ['#00ffff', '#00ff41', '#ff073a', '#bf00ff'];
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.position = 'fixed';
            particle.style.width = Math.random() * 4 + 2 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = Math.random() * window.innerHeight + 'px';
            particle.style.opacity = Math.random() * 0.5;
            particle.style.boxShadow = `0 0 10px ${particle.style.background}`;
            
            particleContainer.appendChild(particle);
            
            this.particles.push({
                element: particle,
                x: parseFloat(particle.style.left),
                y: parseFloat(particle.style.top),
                speedX: (Math.random() - 0.5) * 2,
                speedY: (Math.random() - 0.5) * 2
            });
        }
    }

    animateParticles() {
        this.particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            if (particle.x > window.innerWidth) particle.x = 0;
            if (particle.x < 0) particle.x = window.innerWidth;
            if (particle.y > window.innerHeight) particle.y = 0;
            if (particle.y < 0) particle.y = window.innerHeight;
            
            particle.element.style.left = particle.x + 'px';
            particle.element.style.top = particle.y + 'px';
        });

        requestAnimationFrame(() => this.animateParticles());
    }

    resizeParticles() {
        this.particles.forEach(particle => {
            if (particle.x > window.innerWidth) particle.x = window.innerWidth;
            if (particle.y > window.innerHeight) particle.y = window.innerHeight;
        });
    }

    // Intersection Observer for animations
    initObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                    
                    // Trigger counter animation
                    const counters = entry.target.querySelectorAll('.counter');
                    counters.forEach(counter => this.animateCounter(counter));

                    // Trigger skill bar animation
                    const skillBars = entry.target.querySelectorAll('.skill-item');
                    skillBars.forEach(skillItem => this.animateSkillBar(skillItem));
                }
            });
        }, observerOptions);

        // Observe all elements with the observation-target class
        document.querySelectorAll('.observation-target').forEach(el => {
            this.observer.observe(el);
        });
    }

    // Terminal Text Animation
    initTerminalText() {
        const terminalText = document.getElementById('terminalText');
        if (!terminalText) return;

        const messages = [
            'Loading security protocols...',
            'Initializing threat detection systems...',
            'Establishing secure connection...',
            'Cybersecurity specialist online...',
            'Sebastian Lopez - Ready for deployment'
        ];

        let messageIndex = 0;
        let charIndex = 0;

        const typeMessage = () => {
            if (messageIndex < messages.length) {
                if (charIndex < messages[messageIndex].length) {
                    terminalText.textContent = messages[messageIndex].substring(0, charIndex + 1);
                    charIndex++;
                    setTimeout(typeMessage, 50);
                } else {
                    setTimeout(() => {
                        messageIndex++;
                        charIndex = 0;
                        if (messageIndex < messages.length) {
                            terminalText.textContent = '';
                            setTimeout(typeMessage, 500);
                        }
                    }, 2000);
                }
            }
        };

        setTimeout(typeMessage, 1000);
    }

    // Counter Animation
    animateCounter(counter) {
        const target = parseInt(counter.dataset.target);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    }

    // Skill Bar Animation
    animateSkillBar(skillItem) {
        const skillLevel = parseInt(skillItem.dataset.skill);
        const skillBar = skillItem.querySelector('.skill-bar');
        
        if (skillBar) {
            setTimeout(() => {
                skillBar.style.width = skillLevel + '%';
            }, 300);
        }
    }

    // Typing Effect
    initTypingEffect() {
        const roleText = document.getElementById('roleText');
        if (!roleText) return;

        const roles = [
            'Security Specialist',
            'Threat Hunter',
            'SOC Analyst',
            'Penetration Tester',
            'Cybersecurity Expert'
        ];

        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const typeRole = () => {
            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                roleText.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                roleText.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentRole.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typeSpeed = 500;
            }

            setTimeout(typeRole, typeSpeed);
        };

        typeRole();
    }

    // Navigation and Scrolling
    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    handleNavbarScroll() {
        const nav = document.querySelector('nav');
        if (nav) {
            if (window.scrollY > 100) {
                nav.classList.add('bg-black', 'bg-opacity-95', 'backdrop-blur-sm');
                nav.classList.remove('bg-black', 'bg-opacity-30');
            } else {
                nav.classList.remove('bg-black', 'bg-opacity-95', 'backdrop-blur-sm');
                nav.classList.add('bg-black', 'bg-opacity-30');
            }
        }
    }

    handleParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }

    // Contact Form
    handleContactForm(e) {
        e.preventDefault();
        
        const submitButton = e.target.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = this.currentLang === 'es' ? 'Enviando...' : 'Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            submitButton.textContent = this.currentLang === 'es' ? '¡Mensaje Enviado!' : 'Message Sent!';
            submitButton.classList.add('bg-green-600', 'hover:bg-green-700');
            submitButton.classList.remove('bg-blue-600', 'hover:bg-blue-700');
            
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.classList.remove('bg-green-600', 'hover:bg-green-700');
                submitButton.classList.add('bg-blue-600', 'hover:bg-blue-700');
                e.target.reset();
            }, 2000);
        }, 1500);
    }

    // Preferences
    loadSavedPreferences() {
        // Load dark mode
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode === 'true' && !this.isDarkMode) {
            this.toggleTheme();
        }
    }

    // Start Animations
    startAnimations() {
        // Add staggered animations to elements
        const animatedElements = document.querySelectorAll('.animate-slide-up');
        animatedElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.1}s`;
        });
    }

    // Utility Functions
    static scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    static isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
}

// Global function for contact form handling (used by onsubmit attribute)
function handleContactForm(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const responseDiv = document.getElementById('contact-response');
    const originalText = submitButton.innerHTML;
    
    // Update button state
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
    submitButton.disabled = true;
    
    // Hide previous response
    responseDiv.classList.add('hidden');
    
    // Simulate form submission with enhanced feedback
    setTimeout(() => {
        // Show success message
        responseDiv.className = 'mt-4 p-3 rounded bg-neon-green bg-opacity-10 border border-neon-green';
        responseDiv.innerHTML = `
            <div class="flex items-center">
                <i class="fas fa-check-circle text-neon-green mr-2"></i>
                <span class="font-mono text-sm text-neon-green">Message sent successfully. I'll contact you soon.</span>
            </div>
        `;
        responseDiv.classList.remove('hidden');
        
        // Update button to success state
        submitButton.innerHTML = '<i class="fas fa-check mr-2"></i>Message Sent!';
        submitButton.classList.remove('bg-neon-green', 'hover:bg-neon-blue');
        submitButton.classList.add('bg-green-600', 'hover:bg-green-700');
        
        // Reset after delay
        setTimeout(() => {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            submitButton.classList.remove('bg-green-600', 'hover:bg-green-700');
            submitButton.classList.add('bg-neon-green', 'hover:bg-neon-blue');
            form.reset();
            
            // Hide response message
            setTimeout(() => {
                responseDiv.classList.add('hidden');
            }, 3000);
        }, 2000);
    }, 1500);
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioApp = new PortfolioApp();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PortfolioApp;
}
