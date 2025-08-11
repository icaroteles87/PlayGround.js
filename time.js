// PlayGround/time.js

class Time {
    constructor() {
        this.lastTime = 0;
        this.deltaTime = 0;
        this.waiting = false;
        this.callbacks = new Map();
    }

    /**
     * Atualiza o tempo a cada frame.
     * @param {number} currentTime - O timestamp atual do requestAnimationFrame.
     */
    update(currentTime) {
        if (!this.lastTime) {
            this.lastTime = currentTime;
        }
        this.deltaTime = (currentTime - this.lastTime) / 1000; // Delta em segundos
        this.lastTime = currentTime;

        // Gerencia os callbacks de espera
        const toRemove = [];
        this.callbacks.forEach((callback, endTime) => {
            if (currentTime >= endTime) {
                callback();
                toRemove.push(endTime);
            }
        });
        toRemove.forEach(endTime => this.callbacks.delete(endTime));
    }

    /**
     * Retorna o tempo decorrido desde o último frame em segundos.
     */
    getDeltaTime() {
        return this.deltaTime;
    }

    /**
     * Espera um determinado número de segundos antes de executar um callback.
     * @param {number} seconds - O tempo a esperar em segundos.
     * @returns {Promise<void>} - Retorna uma Promise que resolve após a espera.
     */
    wait(seconds) {
        return new Promise(resolve => {
            const endTime = performance.now() + seconds * 1000;
            this.callbacks.set(endTime, resolve);
        });
    }
}

export { Time };