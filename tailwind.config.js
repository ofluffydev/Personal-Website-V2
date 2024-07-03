/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",], theme: {
        extend: {
            animation: {
                'gradient-x': 'gradient-x 15s ease infinite', 'fade-in-up': 'fade-in-up 2s ease-out',
            }, keyframes: {
                'gradient-x': {
                    '0%, 100%': {
                        'background-size': '200% 200%', 'background-position': 'left center',
                    }, '50%': {
                        'background-size': '200% 200%', 'background-position': 'right center',
                    },
                }, 'fade-in-up': {
                    '0%': {
                        opacity: '0', transform: 'translateY(10px)',
                    }, '100%': {
                        opacity: '1', transform: 'translateY(0)',
                    },
                },
            },
        },
    }, plugins: [],
}

