// PlayGround/graphics.js

/**
 * Fornece métodos fáceis para desenhar formas e texto na tela.
 */
class Graphics {
    constructor(context) {
        this.context = context;
    }

    /**
     * Desenha um retângulo na tela.
     */
    drawRect(x, y, width, height, color) {
        this.context.fillStyle = color;
        this.context.fillRect(x, y, width, height);
    }

    /**
     * Desenha um círculo na tela.
     */
    drawCircle(x, y, radius, color) {
        this.context.fillStyle = color;
        this.context.beginPath();
        this.context.arc(x, y, radius, 0, Math.PI * 2);
        this.context.fill();
    }

    /**
     * Desenha texto na tela.
     * @param {string} text - O texto a ser desenhado.
     * @param {number} x - Posição x.
     * @param {number} y - Posição y.
     * @param {string} [align='left'] - Alinhamento do texto (ex: 'center', 'left', 'right').
     * @param {string} [color='black'] - Cor do texto.
     * @param {string} [font='20px Arial'] - Estilo e tamanho da fonte.
     */
    drawText(text, x, y, align = 'left', color = 'black', font = '20px Arial') {
        this.context.fillStyle = color;
        this.context.font = font;
        this.context.textAlign = align;
        this.context.fillText(text, x, y);
    }
}

export { Graphics };