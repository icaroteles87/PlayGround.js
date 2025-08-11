// PlayGround/camera.js

/**
 * Controla a área de visualização do jogo.
 */
class Camera {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.zoom = 1;
    }

    /**
     * Aplica as transformações da câmera ao contexto de renderização.
     * @param {CanvasRenderingContext2D} context
     */
    applyTransform(context) {
        context.save();
        context.scale(this.zoom, this.zoom);
        context.translate(-this.x, -this.y);
    }

    /**
     * Restaura o contexto de renderização após as transformações.
     * @param {CanvasRenderingContext2D} context
     */
    restoreTransform(context) {
        context.restore();
    }
}

export { Camera };