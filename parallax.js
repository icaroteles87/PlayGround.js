// PlayGround/parallax.js

class ParallaxLayer {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }

    draw(graphics, camera) {
        graphics.drawRect(
            0 - camera.x * this.speed,
            0 - camera.y * this.speed,
            camera.width * 2, // Garante que a camada seja grande o suficiente
            camera.height,
            this.color
        );
    }
}

class ParallaxManager {
    constructor() {
        this.layers = [];
    }

    addLayer(layer) {
        this.layers.push(layer);
    }

    draw(graphics, camera) {
        for (const layer of this.layers) {
            layer.draw(graphics, camera);
        }
    }
}

export { ParallaxLayer, ParallaxManager };