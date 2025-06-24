// Enhanced particles configuration with advanced effects
const particlesConfig = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ["#667eea", "#764ba2", "#f093fb", "#f5576c", "#4facfe"]
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.6,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#667eea",
            opacity: 0.4,
            width: 1,
            shadow: {
                enable: true,
                blur: 5,
                color: "#667eea"
            }
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: ["grab", "bubble"]
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 200,
                size: 6,
                duration: 2,
                opacity: 0.8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true,
    fps_limit: 60,
    background: {
        color: "transparent",
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover"
    }
};

// Enhanced particles initialization with fallback
function initParticles() {
    const canvas = document.getElementById('particles-js');
    
    if (!canvas) {
        console.warn('Particles canvas not found, creating fallback');
        createFallbackParticles();
        return;
    }

    // Check if particles.js is loaded
    if (typeof particlesJS !== 'undefined') {
        try {
            particlesJS('particles-js', particlesConfig);
            console.log('Particles.js initialized successfully');
        } catch (error) {
            console.error('Error initializing particles.js:', error);
            createFallbackParticles();
        }
    } else {
        console.warn('Particles.js not loaded, using fallback');
        createFallbackParticles();
    }
}

// Enhanced fallback canvas particles
function createFallbackParticles() {
    const container = document.querySelector('.particles-background');
    if (!container) return;

    // Remove existing canvas
    const existingCanvas = container.querySelector('canvas');
    if (existingCanvas) {
        existingCanvas.remove();
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '0';
    canvas.style.pointerEvents = 'none';
    
    container.appendChild(canvas);

    // Enhanced particle class
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.vx = (Math.random() - 0.5) * 2;
            this.vy = (Math.random() - 0.5) * 2;
            this.size = Math.random() * 3 + 1;
            this.opacity = Math.random() * 0.6 + 0.2;
            this.color = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe'][Math.floor(Math.random() * 5)];
            this.life = 1;
            this.decay = Math.random() * 0.02 + 0.005;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.life -= this.decay;
            this.opacity = this.life * 0.6 + 0.2;
            
            // Bounce off edges
            if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
            if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;
            
            // Add some gravity effect
            this.vy += 0.01;
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = this.color;
            ctx.shadowColor = this.color;
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    // Enhanced connection class
    class Connection {
        constructor(particle1, particle2) {
            this.p1 = particle1;
            this.p2 = particle2;
            this.distance = Math.sqrt(
                Math.pow(this.p1.x - this.p2.x, 2) + 
                Math.pow(this.p1.y - this.p2.y, 2)
            );
        }

        draw() {
            if (this.distance < 150) {
                const opacity = (150 - this.distance) / 150 * 0.4;
                ctx.save();
                ctx.globalAlpha = opacity;
                ctx.strokeStyle = '#667eea';
                ctx.lineWidth = 1;
                ctx.shadowColor = '#667eea';
                ctx.shadowBlur = 5;
                ctx.beginPath();
                ctx.moveTo(this.p1.x, this.p1.y);
                ctx.lineTo(this.p2.x, this.p2.y);
                ctx.stroke();
                ctx.restore();
            }
        }
    }

    let particles = [];
    let connections = [];
    let animationId;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createParticles() {
        const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 10000));
        
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle(
                Math.random() * canvas.width,
                Math.random() * canvas.height
            ));
        }
    }

    function updateConnections() {
        connections = [];
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                connections.push(new Connection(particles[i], particles[j]));
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        particles = particles.filter(particle => {
            particle.update();
            particle.draw();
            return particle.life > 0;
        });
        
        // Add new particles if needed
        if (particles.length < 80) {
            particles.push(new Particle(
                Math.random() * canvas.width,
                Math.random() * canvas.height
            ));
        }
        
        // Update and draw connections
        updateConnections();
        connections.forEach(connection => connection.draw());
        
        animationId = requestAnimationFrame(animate);
    }

    // Initialize
    resizeCanvas();
    createParticles();
    animate();

    // Handle resize
    window.addEventListener('resize', () => {
        resizeCanvas();
        particles = [];
        createParticles();
    });

    // Handle visibility change for performance
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(animationId);
        } else {
            animate();
        }
    });

    console.log('Fallback particles initialized');
}

// Enhanced mouse interaction
function initMouseInteraction() {
    let mouseX = 0;
    let mouseY = 0;
    let isMouseMoving = false;
    let mouseTimeout;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        isMouseMoving = true;
        
        clearTimeout(mouseTimeout);
        mouseTimeout = setTimeout(() => {
            isMouseMoving = false;
        }, 100);
    });

    // Add mouse interaction to particles if needed
    if (typeof window.pJSDom !== 'undefined' && window.pJSDom[0]) {
        const pJS = window.pJSDom[0].pJS;
        if (pJS && pJS.fn) {
            pJS.fn.mouseMoveEvent = function(e) {
                if (pJS.interactivity.status === 'mousemove') {
                    const mousePos = {
                        x: e.offsetX || e.clientX,
                        y: e.offsetY || e.clientY
                    };
                    
                    pJS.interactivity.mouse.pos_x = mousePos.x;
                    pJS.interactivity.mouse.pos_y = mousePos.y;
                }
            };
        }
    }
}

// Enhanced performance monitoring
function initPerformanceMonitoring() {
    let frameCount = 0;
    let lastTime = performance.now();
    let fps = 60;

    function updateFPS() {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime - lastTime >= 1000) {
            fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            frameCount = 0;
            lastTime = currentTime;
            
            // Adjust particle count based on FPS
            if (fps < 30 && typeof window.pJSDom !== 'undefined' && window.pJSDom[0]) {
                const pJS = window.pJSDom[0].pJS;
                if (pJS && pJS.particles.number.value > 40) {
                    pJS.particles.number.value = Math.max(40, pJS.particles.number.value - 10);
                    pJS.fn.particlesRefresh();
                }
            }
        }
        
        requestAnimationFrame(updateFPS);
    }
    
    updateFPS();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for better performance
    setTimeout(() => {
        initParticles();
        initMouseInteraction();
        initPerformanceMonitoring();
    }, 100);
});

// Enhanced error handling
window.addEventListener('error', (e) => {
    if (e.message.includes('particles')) {
        console.warn('Particles error detected, using fallback');
        createFallbackParticles();
    }
}); 