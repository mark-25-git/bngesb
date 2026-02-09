/**
 * Common JavaScript functionality for B & G Enterprise
 * Modular, reusable functions following DRY principles
 */

/**
 * Mobile menu toggle functionality
 */
const MobileMenu = {
    init() {
        const menuButton = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        
        if (menuButton && menu) {
            menuButton.addEventListener('click', () => {
                menu.classList.toggle('active');
            });
        }
    }
};

/**
 * Form handling and validation
 */
const FormHandler = {
    /**
     * Initialize form submission handlers
     */
    init() {
        const forms = document.querySelectorAll('[data-form="inquiry"]');
        forms.forEach(form => {
            form.addEventListener('submit', this.handleSubmit.bind(this));
        });
    },

    /**
     * Handle form submission
     * @param {Event} e - Form submit event
     */
    handleSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        
        // Validate required fields
        if (!this.validateForm(form)) {
            return;
        }
        
        // Process form data (placeholder - to be connected to backend)
        this.processForm(formData);
    },

    /**
     * Validate form fields
     * @param {HTMLFormElement} form - Form element to validate
     * @returns {boolean} - True if valid, false otherwise
     */
    validateForm(form) {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                this.showFieldError(field);
                isValid = false;
            } else {
                this.clearFieldError(field);
            }
        });

        // Validate checkboxes (at least one required)
        const checkboxes = form.querySelectorAll('input[type="checkbox"][required]');
        if (checkboxes.length > 0) {
            const checked = Array.from(checkboxes).some(cb => cb.checked);
            if (!checked) {
                this.showFieldError(checkboxes[0]);
                isValid = false;
            }
        }

        return isValid;
    },

    /**
     * Show field error
     * @param {HTMLElement} field - Field element
     */
    showFieldError(field) {
        field.classList.add('border-red-500');
        if (!field.nextElementSibling || !field.nextElementSibling.classList.contains('error-message')) {
            const error = document.createElement('span');
            error.className = 'error-message text-red-500 text-sm mt-1 block';
            error.textContent = 'This field is required';
            field.parentNode.insertBefore(error, field.nextSibling);
        }
    },

    /**
     * Clear field error
     * @param {HTMLElement} field - Field element
     */
    clearFieldError(field) {
        field.classList.remove('border-red-500');
        const error = field.parentNode.querySelector('.error-message');
        if (error) {
            error.remove();
        }
    },

    /**
     * Process form data (placeholder for backend integration)
     * @param {FormData} formData - Form data
     */
    processForm(formData) {
        // Convert FormData to object for logging
        const data = Object.fromEntries(formData.entries());
        console.log('Form submitted:', data);
        
        // Show success message (replace with actual API call)
        this.showSuccessMessage();
    },

    /**
     * Show success message
     */
    showSuccessMessage() {
        alert('Thank you for your inquiry! Our team will contact you within 24 hours.');
    }
};

/**
 * Smooth scroll for anchor links
 */
const SmoothScroll = {
    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (mobileMenu) {
                        mobileMenu.classList.remove('active');
                    }
                }
            });
        });
    }
};

/**
 * Initialize all modules when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    MobileMenu.init();
    FormHandler.init();
    SmoothScroll.init();
});



