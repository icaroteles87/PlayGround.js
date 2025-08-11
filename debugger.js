// PlayGround/debugger.js

class Debugger {
    constructor(game, graphics, time) {
        this.game = game;
        this.graphics = graphics;
        this.time = time;
        this.enabled = false;
        this.debugInfo = {};
        this.lastUpdateTime = 0;
        this.updateInterval = 0.5; // Atualiza a cada 0.5 segundos
    }

    /**
     * Habilita ou desabilita o debugger.
     * @param {boolean} value - true para habilitar, false para desabilitar.
     */
    setEnabled(value) {
        this.enabled = value;
    }

    /**
     * Adiciona ou atualiza uma informação a ser exibida.
     * @param {string} key - A chave da informação.
     * @param {*} value - O valor da informação.
     */
    addInfo(key, value) {
        this.debugInfo[key] = value;
    }

    /**
     * Desenha as informações de depuração na tela.
     */
    draw() {
        if (!this.enabled) return;

        // Desenha FPS
        const fps = 1 / this.time.getDeltaTime();
        this.addInfo('FPS', Math.round(fps));

        let y = 10;
        this.graphics.context.save();
        this.graphics.context.fillStyle = 'rgba(0, 0, 0, 0.5)';
        this.graphics.context.fillRect(0, 0, 250, Object.keys(this.debugInfo).length * 20 + 20);
        
        this.graphics.context.fillStyle = 'white';
        this.graphics.context.font = '14px Arial';
        this.graphics.context.textAlign = 'left';

        for (const key in this.debugInfo) {
            y += 20;
            this.graphics.context.fillText(`${key}: ${this.debugInfo[key]}`, 10, y);
        }
        this.graphics.context.restore();
    }
}

export { Debugger };