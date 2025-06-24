# Andrii Zilnyk - Senior Software Developer Portfolio

A modern, responsive portfolio website built with vanilla HTML, CSS, and JavaScript. Features a clean design, smooth animations, and excellent accessibility.

## ✨ Features

- **🎨 Modern Design**: Clean, professional design with glassmorphism effects
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🌙 Dark Mode Support**: Automatically adapts to system preferences
- **✨ Interactive Animations**: Smooth scroll-triggered animations and hover effects
- **🎯 Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **⚡ Performance**: Optimized loading with service worker for offline capability
- **🔍 SEO Optimized**: Proper meta tags, structured data, and social media sharing
- **🎪 Particles Background**: Interactive animated background using particles.js

## 📄 Pages

- **🏠 Home**: Professional introduction with call-to-action buttons
- **💼 Experience**: Detailed work history and achievements
- **🛠️ Skills**: Technical skills organized by category
- **🏆 Certifications**: Professional certifications and completed courses
- **📞 Contact**: Multiple contact methods with availability status

## 🚀 Getting Started

### Local Development
```bash
# Clone the repository
git clone https://github.com/andriizilnyk/AndriiZil.github.io.git

# Navigate to the project directory
cd AndriiZil.github.io

# Start local server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

### Deployment
This is a static website that can be deployed to any hosting service:

- **GitHub Pages**: Push to repository and enable Pages
- **Netlify**: Drag and drop or connect repository
- **Vercel**: Connect repository for automatic deployment
- **Traditional Hosting**: Upload files via FTP

```bash
  python3 -m http.server 8000
```

## 🛠️ Technical Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)**: Vanilla JS with modern features
- **Particles.js**: Interactive background animations
- **Service Worker**: Offline capability and caching

## 📁 File Structure

```
AndriiZil.github.io/
├── index.html              # Home page
├── experience.html         # Experience page
├── skills.html            # Skills page
├── certifications.html    # Certifications page
├── contacts.html          # Contact page
├── sw.js                  # Service worker
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   ├── particles.js       # Particles background config
│   └── navigation.js      # Navigation and interactions
├── assets/
│   ├── profile-photo.svg  # Profile image
│   └── *.svg             # Other SVG assets
└── README.md              # This file
```

## 🎨 Customization

### Colors & Theme
Edit CSS variables in `css/styles.css`:

```css
:root {
  --background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  --foreground: #171717;
  --blue-600: #2563eb;
  --blue-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* ... other variables */
}
```

### Content Updates
- **Personal Info**: Update content in HTML files
- **Profile Image**: Replace `assets/profile-photo.svg`
- **Contact Details**: Update links in `contacts.html`
- **Experience**: Modify work history in `experience.html`

### Particles Configuration
Customize background animations in `js/particles.js`:

```javascript
window.particlesJS('particles-js', {
  particles: {
    number: { value: 80 },
    color: { value: ['#3b82f6', '#60a5fa', '#93c5fd'] },
    // ... other settings
  }
});
```

## 🔧 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📊 Performance Features

- **Service Worker**: Offline capability and resource caching
- **Resource Preloading**: Critical CSS and fonts preloaded
- **Optimized Images**: SVG assets for scalability
- **Debounced Events**: Performance-optimized scroll handlers
- **Lazy Loading**: Images loaded with proper attributes

## ♿ Accessibility Features

- **WCAG 2.1 AA Compliant**: Full accessibility support
- **Keyboard Navigation**: Complete keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and roles
- **Focus Management**: Visible focus indicators
- **Skip Links**: Quick navigation for assistive technology
- **Semantic HTML**: Proper heading structure and landmarks

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta descriptions and keywords
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Structured Data**: Semantic markup for search engines
- **Sitemap Ready**: Clean URL structure for indexing

## 📱 Mobile Features

- **Touch-Friendly**: 44px minimum touch targets
- **Responsive Images**: Optimized for all screen sizes
- **Smooth Scrolling**: Native smooth scroll behavior
- **Viewport Optimization**: Proper mobile viewport settings

## 🚀 Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: andrii.zilnyk@gmail.com
- **LinkedIn**: [linkedin.com/in/andriizilnyk](https://linkedin.com/in/andriizilnyk)
- **GitHub**: [github.com/andriizilnyk](https://github.com/andriizilnyk)
- **Twitter**: [@andriizilnyk](https://twitter.com/andriizilnyk) 