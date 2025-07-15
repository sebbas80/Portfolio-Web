/**
 * Advanced Cyberpunk Effects
 * Specialized effects for the cybersecurity portfolio
 */

class CyberpunkEffects {
    constructor() {
        this.glitchElements = [];
        this.scanLines = [];
        this.init();
    }

    init() {
        this.initGlitchEffects();
        this.initHologramEffect();
        this.initDataStreams();
        this.initTerminalCursor();
        this.initSecurityScanner();
    }

    // Enhanced Glitch Effects
    initGlitchEffects() {
        const glitchElements = document.querySelectorAll('.glitch');
        
        glitchElements.forEach(element => {
            // Add random glitch intervals
            setInterval(() => {
                if (Math.random() > 0.9) {
                    element.style.textShadow = `
                        ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px 0 #00ffff,
                        ${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px 0 #ff073a
                    `;
                    
                    setTimeout(() => {
                        element.style.textShadow = '';
                    }, 100);
                }
            }, 2000);
        });
    }

    // Hologram Effect
    initHologramEffect() {
        const holoElements = document.querySelectorAll('.hologram');
        
        holoElements.forEach(element => {
            const scanLine = document.createElement('div');
            scanLine.className = 'hologram-scanline';
            scanLine.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 2px;
                background: linear-gradient(90deg, transparent, #00ffff, transparent);
                animation: scan 3s linear infinite;
                pointer-events: none;
            `;
            
            element.style.position = 'relative';
            element.appendChild(scanLine);
        });
    }

    // Data Stream Effects
    initDataStreams() {
        const streamContainer = document.createElement('div');
        streamContainer.className = 'data-streams';
        streamContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
            opacity: 0.1;
        `;

        document.body.appendChild(streamContainer);

        // Create vertical data streams
        for (let i = 0; i < 10; i++) {
            this.createDataStream(streamContainer, i);
        }
    }

    createDataStream(container, index) {
        const stream = document.createElement('div');
        stream.className = 'data-stream';
        stream.style.cssText = `
            position: absolute;
            left: ${index * 10}%;
            top: -100px;
            width: 2px;
            height: 100px;
            background: linear-gradient(to bottom, transparent, #00ff41, transparent);
            animation: dataFlow ${3 + Math.random() * 2}s linear infinite;
            animation-delay: ${Math.random() * 2}s;
        `;

        container.appendChild(stream);

        // Add CSS animation if not exists
        if (!document.getElementById('dataFlowStyles')) {
            const style = document.createElement('style');
            style.id = 'dataFlowStyles';
            style.textContent = `
                @keyframes dataFlow {
                    0% { transform: translateY(-100px); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateY(100vh); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Terminal Cursor Effect
    initTerminalCursor() {
        const terminalElements = document.querySelectorAll('.terminal-text');
        
        terminalElements.forEach(element => {
            const cursor = document.createElement('span');
            cursor.className = 'terminal-cursor';
            cursor.textContent = '█';
            cursor.style.cssText = `
                color: #00ff41;
                animation: blink 1s infinite;
                margin-left: 2px;
            `;
            
            element.appendChild(cursor);
        });
    }

    // Security Scanner Effect
    initSecurityScanner() {
        const scannerElements = document.querySelectorAll('.security-scan');
        
        scannerElements.forEach(element => {
            const scanner = document.createElement('div');
            scanner.className = 'security-scanner';
            scanner.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(
                    90deg,
                    transparent 0%,
                    rgba(0, 255, 255, 0.1) 45%,
                    rgba(0, 255, 255, 0.3) 50%,
                    rgba(0, 255, 255, 0.1) 55%,
                    transparent 100%
                );
                transform: translateX(-100%);
                animation: securityScan 4s ease-in-out infinite;
                pointer-events: none;
            `;

            element.style.position = 'relative';
            element.style.overflow = 'hidden';
            element.appendChild(scanner);
        });

        // Add security scan animation
        if (!document.getElementById('securityScanStyles')) {
            const style = document.createElement('style');
            style.id = 'securityScanStyles';
            style.textContent = `
                @keyframes securityScan {
                    0% { transform: translateX(-100%); }
                    50% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // HUD Elements
    createHUDElement(x, y, text, type = 'info') {
        const hud = document.createElement('div');
        hud.className = `hud-element hud-${type}`;
        hud.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            background: rgba(0, 0, 0, 0.8);
            border: 1px solid #00ffff;
            color: #00ffff;
            padding: 5px 10px;
            font-family: 'Fira Code', monospace;
            font-size: 12px;
            z-index: 1000;
            animation: hudFadeIn 0.3s ease-out;
        `;
        hud.textContent = text;

        document.body.appendChild(hud);

        // Auto remove after 3 seconds
        setTimeout(() => {
            hud.style.animation = 'hudFadeOut 0.3s ease-out';
            setTimeout(() => hud.remove(), 300);
        }, 3000);
    }

    // Circuit Board Animation
    initCircuitAnimation() {
        const circuits = document.querySelectorAll('.circuit-board');
        
        circuits.forEach(circuit => {
            const paths = circuit.querySelectorAll('.circuit-path');
            
            paths.forEach((path, index) => {
                path.style.animationDelay = `${index * 0.2}s`;
                path.classList.add('circuit-flow');
            });
        });
    }

    // Neon Sign Flicker
    initNeonFlicker() {
        const neonElements = document.querySelectorAll('.neon-sign');
        
        neonElements.forEach(element => {
            setInterval(() => {
                if (Math.random() > 0.95) {
                    element.style.opacity = '0.3';
                    setTimeout(() => {
                        element.style.opacity = '1';
                    }, 50 + Math.random() * 100);
                }
            }, 1000);
        });
    }

    // Digital Noise
    addDigitalNoise(element) {
        const noise = document.createElement('div');
        noise.className = 'digital-noise';
        noise.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH1wYFAhkIrNnGpgAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAuSURBVAjXY/z//z8DRgAGjAjAaDQaDRgwGkEGjEaj0WjAaNaAAaPRaDRgwGjWgAEDADEqAS');
            opacity: 0.05;
            animation: noiseFlicker 0.1s infinite;
            pointer-events: none;
        `;

        element.style.position = 'relative';
        element.appendChild(noise);
    }

    // Text Decryption Effect
    decryptText(element, finalText, duration = 2000) {
        const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        const length = finalText.length;
        let currentText = '';
        
        const interval = setInterval(() => {
            currentText = '';
            for (let i = 0; i < length; i++) {
                if (Math.random() > (Date.now() % duration) / duration) {
                    currentText += chars[Math.floor(Math.random() * chars.length)];
                } else {
                    currentText += finalText[i];
                }
            }
            element.textContent = currentText;
        }, 50);

        setTimeout(() => {
            clearInterval(interval);
            element.textContent = finalText;
        }, duration);
    }

    // Status LED Effects
    createStatusLED(container, status = 'online') {
        const led = document.createElement('div');
        led.className = `status-led status-${status}`;
        
        const colors = {
            online: '#00ff41',
            warning: '#ffff00',
            error: '#ff073a',
            offline: '#666'
        };

        led.style.cssText = `
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: ${colors[status]};
            box-shadow: 0 0 10px ${colors[status]};
            display: inline-block;
            margin-right: 8px;
            animation: ${status === 'online' ? 'pulse' : status === 'warning' ? 'blink' : 'none'} 2s infinite;
        `;

        container.appendChild(led);
        return led;
    }
}

// Initialize cyberpunk effects when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.cyberpunkEffects = new CyberpunkEffects();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CyberpunkEffects;
}
