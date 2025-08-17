# Projeção Documental

Website for Projeção Documental accounting company built with pure HTML, CSS, and JavaScript using a component-based architecture.

## 🚀 Quick Start

### Prerequisites

- Python 3 (for local development server)
- Or any static file server of your choice

### Local Development

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd projecao-documental
   ```

2. **Start the development server**

   ```bash
   python3 -m http.server 8000
   ```

3. **Open your browser**
   ```
   http://localhost:8000
   ```

### Alternative Servers

If you prefer other development servers:

```bash
# Using Node.js serve
npx serve . --port 3001

# Using Node.js http-server
npx http-server -p 8080

# Using Live Server (VS Code extension)
# Right-click index.html → "Open with Live Server"
```

## 📁 Project Structure

```
projecao-documental/
├── index.html                 # Main HTML file (30 lines)
├── components/                # HTML components
│   ├── navbar.html           # Navigation bar
│   ├── carousel.html         # Hero section
│   ├── about.html            # About us section
│   └── services.html         # Services grid
├── assets/
│   ├── css/
│   │   ├── global.css        # Global styles & CSS variables
│   │   ├── navbar.css        # Navigation styles
│   │   ├── carousel.css      # Hero section styles
│   │   ├── about.css         # About section styles
│   │   └── services.css      # Services section styles
│   ├── js/
│   │   └── component-loader.js # Component loading system
│   ├── fonts/                # Custom fonts (Lato, Poiret One)
│   └── images/
│       ├── Logo.png
│       ├── main-carrousel/
│       └── staff/
└── README.md
```

## 🧩 Component System

This project uses a simple component-based architecture that loads HTML templates dynamically:

### How It Works

1. **Main HTML**: `index.html` contains placeholder divs
2. **Components**: Each section is a separate `.html` file in `components/`
3. **Loader**: `component-loader.js` fetches and injects components
4. **Styling**: Each component has its own CSS file

### Adding New Components

1. **Create the HTML file**:

   ```bash
   touch components/new-section.html
   ```

2. **Add component content**:

   ```html
   <section id="new-section" class="new-section">
     <!-- Your content here -->
   </section>
   ```

3. **Create CSS file**:

   ```bash
   touch assets/css/new-section.css
   ```

4. **Add to index.html**:

   ```html
   <!-- Add CSS link -->
   <link rel="stylesheet" href="assets/css/new-section.css" />

   <!-- Add placeholder -->
   <div id="new-section-placeholder"></div>
   ```

5. **Update component loader**:
   ```javascript
   // In assets/js/component-loader.js
   const components = [
     // ... existing components
     { name: 'new-section', target: '#new-section-placeholder' },
   ]
   ```

## 🎨 Styling System

### CSS Variables

Global brand colors are defined in `assets/css/global.css`:

```css
:root {
  /* Brand Colors */
  --color-accounting: #b33c00;
  --color-fiscal: #8a024a;
  --color-personnel: #00579e;
  --color-documentation: #196b00;

  /* UI Colors */
  --color-background-light: #e6e6e6;
  --color-background-medium: #bbb;
  --color-background-dark: #999;
  --color-text-dark: #333;
}
```

### Usage

```css
/* Use variables instead of hardcoded colors */
.my-element {
  color: var(--color-accounting);
  background: var(--color-background-light);
}
```

## 🚢 Deployment

### GitHub Pages

This site is designed to work seamlessly with GitHub Pages:

1. **Push to GitHub**
2. **Enable GitHub Pages** in repository settings
3. **Done!** No build process needed

The component loading system works perfectly on GitHub Pages.

### Other Static Hosts

Works with any static hosting service:

- Netlify
- Vercel
- Surge.sh
- Firebase Hosting

## 🛠️ Development

### Editing Components

1. **Find the component**: Look in `components/` folder
2. **Edit the HTML**: Make your changes
3. **Refresh browser**: Changes appear immediately
4. **Style if needed**: Edit corresponding CSS file

### Why Use a Server?

The component system uses `fetch()` to load HTML files. This requires a server due to CORS restrictions. You cannot simply open `index.html` directly in a browser.

## 🔧 Technical Details

### Browser Support

- **Modern browsers**: Full support (Chrome, Firefox, Safari, Edge)
- **Legacy browsers**: May need polyfills for `fetch()` and CSS variables

### Performance

- **Component loading**: Happens on page load
- **Caching**: Browser caches components after first load
- **Size**: Minimal JavaScript footprint

### SEO Considerations

Since content is loaded via JavaScript, consider:

- Adding loading states
- Server-side rendering for production (if needed)
- Meta tags in main HTML file

## 📝 Development Notes

### From Live Server to Python Server

If you were using VS Code Live Server, you now need to use:

```bash
python3 -m http.server 8000
```

This is because the component loading system requires a proper HTTP server to handle cross-origin requests.

### Original Structure

This project was refactored from a single large HTML file (189 lines) into a modular component-based structure for better maintainability and development experience.

## 🤝 Contributing

When making changes:

1. Keep components focused and single-purpose
2. Use CSS variables for colors
3. Test with the development server
4. Ensure changes work on GitHub Pages

## 📞 Contact

Website for Projeção Documental - Escritório de Contabilidade
Santos, SP - Brazil
