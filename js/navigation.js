// Clean navigation implementation
document.addEventListener('DOMContentLoaded', function() {
    console.log('Navigation initializing...');
    
    // Get elements
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    
    console.log('Elements found:', {
        hamburger: !!hamburger,
        navList: !!navList,
        navLinks: navLinks.length,
        scrollToTopBtn: !!scrollToTopBtn
    });
    
    // Set active navigation state
    const currentPath = window.location.pathname;
    console.log('Current path:', currentPath);
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
        
        const href = link.getAttribute('href');
        console.log('Checking link:', href);
        
        if (href === 'index.html' && (currentPath === '/' || currentPath.endsWith('/'))) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
            console.log('Set active: index.html');
        } else if (currentPath.includes(href)) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
            console.log('Set active:', href);
        }
    });
    
    // Hamburger menu functionality
    if (hamburger && navList) {
        console.log('Setting up hamburger menu...');
        
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Hamburger clicked');
            
            this.classList.toggle('active');
            navList.classList.toggle('active');
            
            // Add 3D rotation effect
            if (this.classList.contains('active')) {
                this.style.transform = 'rotateY(180deg)';
                navList.style.display = 'flex';
                setTimeout(() => {
                    navList.style.transform = 'translateY(0)';
                }, 10);
                document.body.style.overflow = 'hidden';
            } else {
                this.style.transform = 'rotateY(0deg)';
                navList.style.transform = 'translateY(-100%)';
                setTimeout(() => {
                    navList.style.display = 'none';
                }, 300);
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (hamburger.classList.contains('active') && 
                !hamburger.contains(e.target) && 
                !navList.contains(e.target)) {
                console.log('Closing menu - clicked outside');
                hamburger.classList.remove('active');
                navList.classList.remove('active');
                hamburger.style.transform = 'rotateY(0deg)';
                navList.style.transform = 'translateY(-100%)';
                setTimeout(() => {
                    navList.style.display = 'none';
                }, 300);
                document.body.style.overflow = '';
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && hamburger.classList.contains('active')) {
                console.log('Closing menu - escape key');
                hamburger.classList.remove('active');
                navList.classList.remove('active');
                hamburger.style.transform = 'rotateY(0deg)';
                navList.style.transform = 'translateY(-100%)';
                setTimeout(() => {
                    navList.style.display = 'none';
                }, 300);
                document.body.style.overflow = '';
            }
        });
    }
    
    // Navigation link functionality - SIMPLIFIED
    console.log('Setting up navigation links...');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Navigation link clicked:', this.getAttribute('href'));
            
            const href = this.getAttribute('href');
            
            if (href && href !== '#' && !href.startsWith('#')) {
                // External page navigation
                console.log('Navigating to:', href);
                
                // Close mobile menu if open
                if (hamburger && hamburger.classList.contains('active')) {
                    console.log('Closing mobile menu before navigation');
                    hamburger.classList.remove('active');
                    navList.classList.remove('active');
                    hamburger.style.transform = 'rotateY(0deg)';
                    navList.style.transform = 'translateY(-100%)';
                    setTimeout(() => {
                        navList.style.display = 'none';
                    }, 300);
                    document.body.style.overflow = '';
                }
                
                // Let the default navigation happen - NO preventDefault
                console.log('Allowing default navigation to:', href);
                
            } else if (href && href.startsWith('#')) {
                // Internal anchor navigation
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                
                // Close mobile menu if open
                if (hamburger && hamburger.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navList.classList.remove('active');
                    hamburger.style.transform = 'rotateY(0deg)';
                    navList.style.transform = 'translateY(-100%)';
                    setTimeout(() => {
                        navList.style.display = 'none';
                    }, 300);
                    document.body.style.overflow = '';
                }
            }
        });
        
        // Enhanced hover effects
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) rotateX(10deg) scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0deg) scale(1)';
        });
    });
    
    // Scroll to top functionality
    if (scrollToTopBtn) {
        console.log('Setting up scroll to top...');
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.style.opacity = '1';
                scrollToTopBtn.style.transform = 'translateY(0) rotateX(0deg)';
                scrollToTopBtn.style.pointerEvents = 'auto';
            } else {
                scrollToTopBtn.style.opacity = '0';
                scrollToTopBtn.style.transform = 'translateY(20px) rotateX(90deg)';
                scrollToTopBtn.style.pointerEvents = 'none';
            }
        });
        
        scrollToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Scroll to top clicked');
            
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Enhanced scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
                
                const children = entry.target.querySelectorAll('.experience-item, .skill-tag, .cert-card, .contact-card');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0) rotateX(0deg)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.experience-list, .skills-grid, .cert-grid, .contact-grid, .page-section');
    animatedElements.forEach(el => {
        el.classList.add('loading');
        observer.observe(el);
    });
    
    // Enhanced mouse tracking for interactive elements
    document.addEventListener('mousemove', function(e) {
        const cards = document.querySelectorAll('.experience-item, .cert-card, .contact-card, .skill-tag');
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardX = rect.left + rect.width / 2;
            const cardY = rect.top + rect.height / 2;
            
            const deltaX = mouseX - cardX;
            const deltaY = mouseY - cardY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            
            if (distance < 200) {
                const intensity = (200 - distance) / 200;
                const rotateX = deltaY * 0.01 * intensity;
                const rotateY = -deltaX * 0.01 * intensity;
                
                card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                card.style.boxShadow = `0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 30px rgba(37, 99, 235, ${0.3 * intensity})`;
            }
        });
    });
    
    // Enhanced accessibility features
    function enhanceAccessibility() {
        if (hamburger) {
            hamburger.setAttribute('aria-label', 'Toggle navigation menu');
            hamburger.setAttribute('aria-expanded', 'false');
            
            hamburger.addEventListener('click', function() {
                const isExpanded = this.classList.contains('active');
                this.setAttribute('aria-expanded', isExpanded.toString());
            });
        }
        
        navLinks.forEach(link => {
            link.addEventListener('focus', function() {
                this.style.outline = '2px solid var(--blue-600)';
                this.style.outlineOffset = '2px';
            });
            
            link.addEventListener('blur', function() {
                this.style.outline = 'none';
            });
        });
        
        const skipLink = document.querySelector('.skip-link');
        if (skipLink) {
            skipLink.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.focus();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    }
    
    enhanceAccessibility();
    
    console.log('Navigation initialized successfully');
}); 