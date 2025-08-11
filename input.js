// PlayGround/input.js

/**
 * Gerencia a entrada do usuário via teclado e mouse.
 */
class Input {
    constructor() {
        this.keys = {}; // Armazena o estado das teclas
        this.mouse = {
            x: 0,
            y: 0,
            leftButton: false
        };

        this.setupEventListeners();
    }

    setupEventListeners() {
        // Eventos de teclado
        window.addEventListener('keydown', (e) => {
            this.keys[e.key] = true;
        });

        window.addEventListener('keyup', (e) => {
            this.keys[e.key] = false;
        });

        // Eventos de mouse
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        window.addEventListener('mousedown', (e) => {
            if (e.button === 0) { // Botão esquerdo
                this.mouse.leftButton = true;
            }
        });

        window.addEventListener('mouseup', (e) => {
            if (e.button === 0) {
                this.mouse.leftButton = false;
            }
        });
    }

    /**
     * Verifica se uma tecla está pressionada.
     * @param {string} key - A tecla a ser verificada (ex: 'ArrowUp', ' ').
     * @returns {boolean}
     */
    isKeyDown(key) {
        return !!this.keys[key];
    }
}

export { Input };