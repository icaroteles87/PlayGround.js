// main.js

import { PlayGround } from './PlayGround/api.js';

window.addEventListener('load', () => {
    const config = {
        canvasId: 'gameCanvas',
        width: 800,
        height: 600
    };

    const game = new PlayGround.Game(config);
    const graphics = new PlayGround.Graphics(game.context);
    const input = new PlayGround.Input();
    const time = new PlayGround.Time();
    
    input.setupEventListeners();

    class Square {
        constructor(x, y, size, speed) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.speed = speed;
        }
    
        update(deltaTime, input) {
            if (input.isKeyDown('ArrowUp')) {
                this.y -= this.speed * deltaTime;
            }
            if (input.isKeyDown('ArrowDown')) {
                this.y += this.speed * deltaTime;
            }
            if (input.isKeyDown('ArrowLeft')) {
                this.x -= this.speed * deltaTime;
            }
            if (input.isKeyDown('ArrowRight')) {
                this.x += this.speed * deltaTime;
            }
        }
    
        draw(graphics) {
            graphics.drawRect(this.x, this.y, this.size, this.size, '#5397d6');
        }
    }

    const square = new Square(
        game.canvas.width / 2 - 25, 
        game.canvas.height / 2 - 25, 
        50, 
        300
    );

    let lastTime = 0;
    function gameLoop(currentTime) {
        const deltaTime = (currentTime - lastTime) / 1000;
        lastTime = currentTime;

        // Lógica de atualização
        square.update(deltaTime, input);

        // Lógica de desenho
        game.clear();
        square.draw(graphics);
        
        requestAnimationFrame(gameLoop);
    }

    requestAnimationFrame(gameLoop);
});