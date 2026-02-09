# B & G Enterprise Website - Modular Structure

## Project Structure

```
bngesb_redesign/
├── index.html              # Main landing page
├── design_system.html      # Design system documentation
├── styles.css              # Shared CSS (DRY - all styles in one place)
├── js/
│   └── common.js          # Reusable JavaScript modules
├── components/
│   ├── navigation.html    # Reusable navigation component
│   └── footer.html        # Reusable footer component
└── README.md              # This file
```

## Design Principles

### DRY (Don't Repeat Yourself)
- **CSS**: All styles centralized in `styles.css` using CSS variables
- **JavaScript**: Modular functions in `js/common.js` for reusable functionality
- **Components**: Navigation and footer stored as separate files for easy reuse

### Modularity
- **CSS Variables**: Design system colors, spacing, and transitions defined once in `:root`
- **Reusable Classes**: Utility classes (`.btn`, `.card`, `.form-input`, etc.) used throughout
- **JavaScript Modules**: Separate modules for MobileMenu, FormHandler, SmoothScroll

### Clean Code
- **Semantic HTML**: Proper use of HTML5 semantic elements
- **Separation of Concerns**: HTML structure, CSS styling, and JS behavior are separated
- **Consistent Naming**: BEM-inspired class naming for clarity

## CSS Architecture

### Variables (`:root`)
- Color palette (primary cyan, accent yellow, neutrals)
- Spacing scale
- Border radius
- Transitions

### Component Classes
- `.btn`, `.btn-primary`, `.btn-accent` - Button styles
- `.card`, `.card-hover` - Card components
- `.form-input`, `.form-select`, `.form-textarea` - Form elements
- `.nav-link`, `.footer-link` - Navigation links

### Utility Classes
- `.text-primary`, `.text-primary-light` - Text colors
- `.section`, `.section-lg`, `.section-alt` - Section spacing
- `.container` - Container wrapper

## JavaScript Modules

### MobileMenu
Handles mobile navigation toggle functionality.

### FormHandler
- Form validation
- Error handling
- Form submission (ready for backend integration)

### SmoothScroll
Smooth scrolling for anchor links with mobile menu auto-close.

## Usage

### Adding New Pages
1. Copy `index.html` structure
2. Include `styles.css` and `js/common.js`
3. Update navigation active state
4. Reuse component classes from `styles.css`

### Modifying Styles
1. Update CSS variables in `styles.css` `:root` for global changes
2. Modify component classes for specific component changes
3. Add new utility classes following existing patterns

### Extending JavaScript
1. Add new module to `js/common.js` following existing pattern
2. Initialize in `DOMContentLoaded` event listener
3. Keep functions focused and reusable

## Future WordPress Conversion

This structure is designed for easy conversion to WordPress:
- Component files can become template parts
- CSS variables work with WordPress theme structure
- JavaScript modules can be enqueued via `functions.php`
- Semantic HTML is WordPress-friendly

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design (mobile-first approach)
- Graceful degradation for older browsers



