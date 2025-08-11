// PlayGround/transitions.js

class TransitionManager {
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.transitioning = false;
        this.type = 'none';
        this.progress = 0;
        this.duration = 0.5; // Reduzido para 0.5 segundos para ser mais rápido
        this.onCompleteCallback = null;
    }

    startTransition(type, onComplete) {
        this.transitioning = true;
        this.type = type;
        this.progress = 0;
        this.onCompleteCallback = onComplete;
        console.log("Transição iniciada: " + type);
    }

    update(deltaTime) {
        if (!this.transitioning) return;

        // Garante que o deltaTime não seja zero ou um número muito grande
        const clampedDelta = Math.min(deltaTime, 0.1);

        this.progress += clampedDelta / this.duration;
        
        if (this.progress >= 1) {
            this.progress = 1;
            this.transitioning = false;
            console.log("Transição completa! Chamando callback.");
            if (this.onCompleteCallback) {
                this.onCompleteCallback();
            }
        }
    }

    draw() {
        if (!this.transitioning) return;

        let alpha = 0;
        if (this.type === 'fade-out') {
            alpha = this.progress;
        } else if (this.type === 'fade-in') {
            alpha = 1 - this.progress;
        }

        this.context.save();
        this.context.globalAlpha = alpha;
        this.context.fillStyle = 'black';
        this.context.fillRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        this.context.restore();
    }
}

export { TransitionManager };