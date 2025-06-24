# Plain HTML/CSS/JS Portfolio

A static version of Andrii Zilnyk's portfolio website built with vanilla HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Dark Mode Support**: Automatically adapts to system preferences
- **Interactive Particles Background**: Animated background using particles.js
- **Modern UI**: Clean, professional design with smooth animations
- **SEO Optimized**: Proper meta tags and semantic HTML

## Pages

- **Home**: Profile overview and introduction
- **Experience**: Professional work history
- **Skills**: Technical skills and technologies
- **Certifications**: Professional certifications and courses
- **Contacts**: Contact information and social links

## File Structure

```
plain-portfolio/
├── index.html              # Home page
├── experience.html         # Experience page
├── skills.html            # Skills page
├── certifications.html    # Certifications page
├── contacts.html          # Contacts page
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   ├── particles.js       # Particles background configuration
│   └── navigation.js      # Navigation active state management
├── assets/
│   ├── profile-photo.svg  # Profile image
│   └── ...                # Other SVG assets
└── README.md              # This file
```

## Getting Started

1. **Download/Clone** the files to your local machine
2. **Open** `index.html` in your web browser
3. **Navigate** through the different pages using the navigation menu

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Dependencies

- **Particles.js**: For the interactive background animation (loaded via CDN)
- **Google Fonts**: Inter font family (loaded via CDN)
- **Lucide Icons**: For certification page icons (loaded via CDN)

## Customization

### Colors
Edit the CSS variables in `css/styles.css` to change the color scheme:

```css
:root {
  --background: #e8ede9;
  --foreground: #171717;
  --blue-600: #2563eb;
  /* ... other colors */
}
```

### Content
- Update personal information in the HTML files
- Replace `assets/profile-photo.svg` with your own profile image
- Modify the particles configuration in `js/particles.js`

### Styling
- All styles are in `css/styles.css`
- The design is mobile-first and responsive
- Dark mode is automatically applied based on system preferences

## Deployment

This is a static website that can be deployed to any web hosting service:

- **GitHub Pages**: Push to a GitHub repository and enable Pages
- **Netlify**: Drag and drop the folder to Netlify
- **Vercel**: Connect your repository to Vercel
- **Traditional Hosting**: Upload files via FTP

## Performance

- No build process required
- Minimal JavaScript for interactivity
- Optimized CSS with CSS variables
- External dependencies loaded via CDN

## License

This project is open source and available under the MIT License. 