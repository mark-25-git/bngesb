/**
 * Tailwind CSS Configuration
 * Shared configuration for all pages using Tailwind CDN
 */
if (typeof tailwind !== 'undefined') {
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    'primary-cyan': '#00b7fe',
                    'primary-cyan-light': '#33c5fe',
                    'primary-cyan-dark': '#0093cc',
                    'primary-cyan-darker': '#0075a3',
                    'primary-cyan-darkest': '#005a7d',
                    'accent-yellow': '#ffff00',
                    'accent-yellow-light': '#ffff33',
                    'accent-yellow-warm': '#ffeb3b',
                    'accent-yellow-gold': '#ffc107',
                    'accent-yellow-dark': '#f9a825',
                }
            }
        }
    };
}



