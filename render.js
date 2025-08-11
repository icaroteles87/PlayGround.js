// PlayGround/render.js

/**
 * A classe principal da nossa engine.
 * Responsável por criar e gerenciar o canvas e o contexto de renderização.
 */
class Game {
    constructor(config) {
        this.canvas = document.getElementById(config.canvasId);
        if (!this.canvas) {
            console.error('O elemento canvas com o ID especificado não foi encontrado.');
            return;
        }

        this.canvas.width = config.width || 800;
        this.canvas.height = config.height || 600;
        this.context = this.canvas.getContext('2d');
    }

    /**
     * Limpa a tela inteira, preparando-a para o próximo frame.
     */
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

// Garante que a classe 'Game' é exportada para outros arquivos
export { Game };