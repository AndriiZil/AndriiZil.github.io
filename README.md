# Andrii Zilnyk - Software Engineer Portfolio

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a clean design with smooth animations and interactive elements.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content
- **Contact Form**: Functional contact form with validation
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Loading Animation**: Smooth page loading experience
- **SEO Optimized**: Proper meta tags and semantic HTML

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Documentation
```

## 🎨 Sections

1. **Hero Section**: Introduction with animated code display
2. **About**: Personal information and statistics
3. **Skills**: Technical skills organized by category
4. **Projects**: Featured projects with descriptions
5. **Experience**: Work history timeline
6. **Contact**: Contact form and information

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

## 🚀 Getting Started

1. **Clone or Download**: Get the files to your local machine
2. **Open**: Open `index.html` in your web browser
3. **Customize**: Edit the content to match your information

## ✏️ Customization

### Personal Information
Edit the following in `index.html`:

```html
<!-- Update name and title -->
<h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
<h2 class="hero-subtitle">Your Title</h2>

<!-- Update contact information -->
<span>your.email@example.com</span>
<span>+1 (555) 123-4567</span>
<span>Your Location</span>
```

### Social Links
Update the social media links in the hero and contact sections:

```html
<a href="https://github.com/YourUsername" target="_blank">
<a href="https://linkedin.com/in/YourUsername" target="_blank">
<a href="https://twitter.com/YourUsername" target="_blank">
```

### Projects
Replace the project cards with your own projects:

```html
<div class="project-card">
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
        <div class="project-links">
            <a href="your-demo-link" class="project-link">Live Demo</a>
            <a href="your-github-link" class="project-link">Code</a>
        </div>
    </div>
</div>
```

### Skills
Update the skills section with your technologies:

```html
<div class="skill-item">
    <i class="fab fa-js"></i>
    <span>JavaScript</span>
</div>
```

### Experience
Modify the timeline items with your work history:

```html
<div class="timeline-item">
    <div class="timeline-content">
        <div class="timeline-header">
            <h3>Your Job Title</h3>
            <span class="company">Company Name</span>
            <span class="period">2020 - Present</span>
        </div>
        <p>Job description...</p>
    </div>
</div>
```

## 🎨 Styling Customization

### Colors
The main color scheme can be modified in `styles.css`:

```css
/* Primary blue */
--primary-color: #2563eb;

/* Gradient colors */
--gradient-start: #667eea;
--gradient-end: #764ba2;

/* Accent color */
--accent-color: #fbbf24;
```

### Fonts
Change the font family in `styles.css`:

```css
body {
    font-family: 'Your-Font', sans-serif;
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 JavaScript Features

- **Mobile Navigation**: Hamburger menu toggle
- **Smooth Scrolling**: Navigation link scrolling
- **Form Validation**: Contact form validation
- **Animations**: Intersection Observer for scroll animations
- **Notifications**: Success/error message system
- **Parallax Effect**: Hero section parallax
- **Counter Animation**: Statistics counting animation

## 📧 Contact Form

The contact form includes:
- Name, email, subject, and message fields
- Client-side validation
- Success/error notifications
- Form reset after submission

**Note**: The form currently simulates submission. To make it functional, you'll need to:
1. Set up a backend service (Node.js, PHP, etc.)
2. Configure email sending (Nodemailer, SendGrid, etc.)
3. Update the form submission handler in `script.js`

## 🌐 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to Netlify
2. Your site will be deployed instantly
3. Custom domain can be added in settings

### Vercel
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push
3. Custom domain support included

## 🔍 SEO Optimization

The portfolio includes:
- Proper meta tags
- Semantic HTML structure
- Alt text for images
- Open Graph tags
- Structured data markup

## 📈 Performance

- Optimized images and assets
- Minified CSS and JavaScript (for production)
- Lazy loading for better performance
- Efficient animations using CSS transforms

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions, please open an issue.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Unsplash for placeholder images
- Modern CSS techniques and best practices

---

**Built with ❤️ for showcasing software engineering skills** 