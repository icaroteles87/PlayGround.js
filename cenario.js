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
    const physics = new PlayGround.Physics();
    physics.setGravity(0, 800);
    
    input.setupEventListeners();

    // Dados do mapa
    const tileSize = 40;
    const tilemap = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];

    function drawTilemap() {
        for (let row = 0; row < tilemap.length; row++) {
            for (let col = 0; col < tilemap[0].length; col++) {
                if (tilemap[row][col] === 1) {
                    graphics.drawRect(
                        col * tileSize,
                        row * tileSize,
                        tileSize,
                        tileSize,
                        '#996633'
                    );
                }
            }
        }
    }
    
    // Verifica se uma posição no mapa é sólida (tem uma plataforma)
    function isSolid(x, y) {
        const col = Math.floor(x / tileSize);
        const row = Math.floor(y / tileSize);
        if (col >= 0 && col < tilemap[0].length && row >= 0 && row < tilemap.length) {
            return tilemap[row][col] === 1;
        }
        return false;
    }

    // Classe do jogador
    class Player extends PlayGround.GameObject {
        constructor(x, y, width, height, speed) {
            super(x, y, width, height);
            this.speed = speed;
            this.rigidBody = new PlayGround.RigidBody(this);
            this.rigidBody.setVelocity(0, 0);
            this.isGrounded = false;
            this.jumpForce = -400;
        }
    
        update(deltaTime, input) {
            const movement = { x: 0, y: 0 };
            if (input.isKeyDown('ArrowLeft')) { movement.x = -1; }
            if (input.isKeyDown('ArrowRight')) { movement.x = 1; }
    
            this.rigidBody.velocity.x = movement.x * this.speed;
    
            if (input.isKeyDown(' ') && this.isGrounded) {
                this.rigidBody.setVelocity(this.rigidBody.velocity.x, this.jumpForce);
                this.isGrounded = false;
            }
        }
    
        draw(graphics) {
            graphics.drawRect(this.x, this.y, this.width, this.height, '#5397d6');
        }
    }

    // Cria o jogador
    const player = new Player(100, 100, 30, 30, 200);
    physics.addBody(player.rigidBody);

    let lastTime = 0;
    function gameLoop(currentTime) {
        const deltaTime = (currentTime - lastTime) / 1000;
        lastTime = currentTime;

        // Lógica de atualização
        player.update(deltaTime, input);
        physics.update(deltaTime);

        // Lógica de colisão com o tilemap
        player.isGrounded = false;
        
        const playerBottom = player.y + player.height;
        const playerTop = player.y;
        const playerLeft = player.x;
        const playerRight = player.x + player.width;

        // Colisão com o chão
        if (player.rigidBody.velocity.y > 0) {
            if (isSolid(playerLeft, playerBottom + 1) || isSolid(playerRight, playerBottom + 1)) {
                player.rigidBody.setVelocity(player.rigidBody.velocity.x, 0);
                player.y = Math.floor(playerBottom / tileSize) * tileSize - player.height;
                player.isGrounded = true;
            }
        }
        
        // Colisão com o teto
        if (player.rigidBody.velocity.y < 0) {
            if (isSolid(playerLeft, playerTop) || isSolid(playerRight, playerTop)) {
                player.rigidBody.setVelocity(player.rigidBody.velocity.x, 0);
                player.y = Math.floor(playerTop / tileSize) * tileSize + tileSize;
            }
        }

        // Colisão com as laterais
        if (player.rigidBody.velocity.x > 0) {
            if (isSolid(playerRight + 1, playerTop) || isSolid(playerRight + 1, playerBottom - 1)) {
                player.rigidBody.setVelocity(0, player.rigidBody.velocity.y);
                player.x = Math.floor(playerRight / tileSize) * tileSize - player.width;
            }
        } else if (player.rigidBody.velocity.x < 0) {
            if (isSolid(playerLeft - 1, playerTop) || isSolid(playerLeft - 1, playerBottom - 1)) {
                player.rigidBody.setVelocity(0, player.rigidBody.velocity.y);
                player.x = Math.floor(playerLeft / tileSize) * tileSize + tileSize;
            }
        }

        // Lógica de desenho
        game.clear();
        drawTilemap();
        player.draw(graphics);
        
        requestAnimationFrame(gameLoop);
    }

    requestAnimationFrame(gameLoop);
});