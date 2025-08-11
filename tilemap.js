// PlayGround/tilemap.js

class Tilemap {
    constructor(matrix, tileSize, tileset) {
        this.matrix = matrix;
        this.tileSize = tileSize;
        this.tileset = tileset; // O novo tileset com as propriedades dos tiles
    }

    /**
     * Desenha o mapa de tiles na tela, considerando a posição da câmera.
     * @param {object} graphics O contexto de renderização do jogo.
     */
    draw(graphics) {
        for (let y = 0; y < this.matrix.length; y++) {
            for (let x = 0; x < this.matrix[y].length; x++) {
                const tileId = this.matrix[y][x];
                if (tileId !== 0) { // Assume que 0 é vazio
                    const tileProperties = this.tileset[tileId];
                    if (tileProperties) {
                        graphics.drawRect(
                            x * this.tileSize,
                            y * this.tileSize,
                            this.tileSize,
                            this.tileSize,
                            tileProperties.color
                        );
                    }
                }
            }
        }
    }

    /**
     * Verifica se um ponto (x, y) está dentro de um tile sólido.
     * @param {number} x Coordenada X.
     * @param {number} y Coordenada Y.
     * @returns {boolean} True se o ponto colidir com um tile sólido, false caso contrário.
     */
    isSolid(x, y) {
        const tileX = Math.floor(x / this.tileSize);
        const tileY = Math.floor(y / this.tileSize);

        if (tileX >= 0 && tileX < this.matrix[0].length &&
            tileY >= 0 && tileY < this.matrix.length) {
            
            const tileId = this.matrix[tileY][tileX];
            if (tileId !== 0 && this.tileset[tileId]) {
                return this.tileset[tileId].isSolid;
            }
        }

        return false;
    }
}

export { Tilemap };