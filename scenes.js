// PlayGround/scenes.js

class Scene {
    constructor(game, graphics, input, camera) {
        this.game = game;
        this.graphics = graphics;
        this.input = input;
        this.camera = camera;
    }

    /**
     * Chamado quando a cena é iniciada.
     * Use para inicializar objetos e variáveis.
     */
    enter() {}

    /**
     * Chamado a cada frame do jogo.
     * Use para atualizar a lógica do jogo.
     * @param {number} deltaTime Tempo decorrido desde o último frame.
     */
    update(deltaTime) {}

    /**
     * Chamado a cada frame para desenhar a cena.
     */
    draw() {}

    /**
     * Chamado quando a cena é encerrada.
     * Use para liberar recursos ou limpar o estado.
     */
    exit() {}
}

export { Scene };