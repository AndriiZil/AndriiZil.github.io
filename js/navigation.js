// Navigation active state management
document.addEventListener('DOMContentLoaded', function() {
    // Get current page path
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Remove all active classes first
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current page link
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === 'index.html' && (currentPath === '/' || currentPath.endsWith('/'))) {
            link.classList.add('active');
        } else if (currentPath.includes(href)) {
            link.classList.add('active');
        }
    });
}); 