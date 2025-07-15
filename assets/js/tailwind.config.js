/**
 * Tailwind CSS Configuration
 * Custom configuration for Sebastian Lopez Portfolio
 */

const tailwindConfig = {
    theme: {
        extend: {
            colors: {
                'neon-blue': '#00ffff',
                'neon-green': '#00ff41',
                'neon-red': '#ff073a',
                'neon-purple': '#bf00ff',
                'dark-bg': '#0a0a0a',
                'matrix-green': '#008000'
            },
            fontFamily: {
                'mono': ['Fira Code', 'monospace'],
                'sans': ['Inter', 'sans-serif']
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'bounce-in': 'bounceIn 0.8s ease-out',
                'float': 'float 3s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'matrix-rain': 'matrixRain 1s linear infinite',
                'glitch': 'glitch 0.5s infinite',
                'scan': 'scan 2s linear infinite',
                'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                slideUp: {
                    '0%': { transform: 'translateY(50px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                },
                bounceIn: {
                    '0%': { transform: 'scale(0.3)', opacity: '0' },
                    '50%': { transform: 'scale(1.05)' },
                    '70%': { transform: 'scale(0.9)' },
                    '100%': { transform: 'scale(1)', opacity: '1' }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' }
                },
                glow: {
                    '0%': { textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 20px currentColor' },
                    '100%': { textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 40px currentColor' }
                },
                matrixRain: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100vh)' }
                },
                glitch: {
                    '0%, 14%, 15%, 49%, 50%, 99%, 100%': { transform: 'translate(0)' },
                    '15%, 49%': { transform: 'translate(-2px, 2px)' },
                    '21%, 62%': { transform: 'translate(2px, -2px)' }
                },
                scan: {
                    '0%': { top: '0', opacity: '1' },
                    '100%': { top: '100%', opacity: '0' }
                },
                typing: {
                    '0%': { width: '0' },
                    '100%': { width: '100%' }
                },
                'blink-caret': {
                    '0%, 50%': { 'border-color': 'transparent' },
                    '51%, 100%': { 'border-color': '#00ff41' }
                }
            },
            backdropBlur: {
                'xs': '2px',
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            boxShadow: {
                'neon-blue': '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff',
                'neon-green': '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 40px #00ff41',
                'neon-red': '0 0 10px #ff073a, 0 0 20px #ff073a, 0 0 40px #ff073a',
                'neon-purple': '0 0 10px #bf00ff, 0 0 20px #bf00ff, 0 0 40px #bf00ff',
            },
            gradientColorStops: {
                'matrix': '#008000',
                'cyber-blue': '#00ffff',
                'cyber-purple': '#bf00ff'
            }
        }
    },
    plugins: [],
    content: ['./index.html', './assets/js/*.js'],
    darkMode: 'class'
};

// Apply configuration to Tailwind if available
if (typeof tailwind !== 'undefined' && tailwind.config) {
    tailwind.config = tailwindConfig;
}
