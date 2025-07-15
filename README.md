# Sebastian Lopez - Cybersecurity Portfolio

> Professional portfolio website for Sebastian Lopez, Cybersecurity Specialist

[![Status](https://img.shields.io/badge/Status-Active-brightgreen.svg)](https://sebastianlopez.dev)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 🔐 About

This portfolio showcases the professional experience and expertise of Sebastian Lopez, a specialized cybersecurity professional with extensive experience in:

- **SIEM/SOAR Platforms**: Advanced threat detection and automated response
- **Penetration Testing**: Web2/Web3 security assessments and vulnerability analysis
- **Threat Hunting**: Proactive threat identification and investigation
- **Cloud Security**: Azure and AWS security architecture and compliance
- **Compliance Frameworks**: PCI DSS, ISO 27001, NIST, OWASP, MITRE ATT&CK

## 🚀 Features

### Core Functionality
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Multi-language Support**: Spanish and English interface
- **Dark/Light Theme**: User preference with localStorage persistence
- **Smooth Animations**: CSS and JavaScript powered transitions
- **Accessibility**: WCAG 2.1 AA compliant with semantic HTML

### Advanced Effects
- **Matrix Rain Animation**: Cyberpunk-inspired background effects
- **Glitch Effects**: Terminal-style text animations
- **Particle System**: Dynamic floating particles
- **Terminal Interface**: Interactive command-line styled elements
- **Neon Glow Effects**: Cybersecurity themed visual elements

### Technical Features
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, structured data
- **Performance**: Optimized loading with preload directives
- **Security**: XSS protection, content type validation, frame options
- **Progressive Enhancement**: Graceful degradation for older browsers

## 🛠️ Technology Stack

### Frontend
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript ES6+**: Modern JavaScript with classes and modules
- **Tailwind CSS**: Utility-first CSS framework
- **Font Awesome**: Icon library for UI elements

### Development Tools
- **Git**: Version control and collaboration
- **VS Code**: Development environment
- **Chrome DevTools**: Debugging and performance optimization

## 📁 Project Structure

```
Portfolio-Web/
├── index.html                 # Main HTML file (original)
├── index_new.html            # Optimized HTML file
├── README.md                 # Project documentation
├── assets/
│   ├── css/
│   │   └── styles.css        # Custom CSS styles
│   ├── js/
│   │   ├── main.js          # Main application logic
│   │   ├── effects.js       # Advanced cyberpunk effects
│   │   └── tailwind.config.js # Tailwind configuration
│   └── images/
│       ├── favicon.ico      # Site favicon
│       ├── og-image.jpg     # Open Graph image
│       └── twitter-card.jpg # Twitter Card image
└── docs/
    ├── DEPLOYMENT.md        # Deployment instructions
    └── SECURITY.md          # Security considerations
```

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+)
- Web server (for local development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sebastianlopez/portfolio.git
   cd portfolio
   ```

2. **Serve the files**
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**
   Navigate to `http://localhost:8000`

### Development

For development with live reload:

```bash
# Using live-server (Node.js)
npm install -g live-server
live-server --port=8000

# Using VS Code Live Server extension
# Install "Live Server" extension and right-click index.html
```

## 🎨 Customization

### Colors
Modify the CSS custom properties in `assets/css/styles.css`:

```css
:root {
    --neon-blue: #00ffff;
    --neon-green: #00ff41;
    --neon-red: #ff073a;
    --neon-purple: #bf00ff;
    --dark-bg: #0a0a0a;
    --matrix-green: #008000;
}
```

### Content
Update personal information in the HTML files and modify language data attributes for multi-language support.

### Effects
Customize cyberpunk effects in `assets/js/effects.js` or disable them by removing the script reference.

## 📱 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | 90+     | ✅ Full Support |
| Firefox | 88+     | ✅ Full Support |
| Safari  | 14+     | ✅ Full Support |
| Edge    | 90+     | ✅ Full Support |
| IE      | 11      | ⚠️ Limited Support |

## 🔒 Security Features

- Content Security Policy headers
- XSS protection
- HTTPS enforcement (production)
- No external script dependencies (except CDN)
- Input validation and sanitization

## 📈 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: < 50KB (minified)
- **Load Time**: < 2s on 3G networks

## 🚀 Deployment

### GitHub Pages
```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

### Netlify
1. Connect your GitHub repository
2. Set build directory to root
3. Deploy automatically on push

### Vercel
```bash
npx vercel --prod
```

See [DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed instructions.

## 🤝 Contributing

Contributions are welcome! Please read the contributing guidelines:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Contact

**Sebastian Lopez**
- LinkedIn: [sebastian-lopez-a9040918a](https://www.linkedin.com/in/sebastian-lopez-a9040918a/)
- Email: sebastian.lopez@secure.com
- Portfolio: [sebastianlopez.dev](https://sebastianlopez.dev)

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Font Awesome](https://fontawesome.com/) for the iconography
- [Google Fonts](https://fonts.google.com/) for typography
- Cybersecurity community for inspiration and feedback

---

⚡ **Built with security and performance in mind** ⚡
Multi funcional CV web statick page 
