// PlayGround/gameobject.js

class GameObject {
    constructor(x = 0, y = 0, width = 0, height = 0) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    update(input) {
        // Lógica de atualização padrão (vazio, a ser sobrescrito)
    }

    draw(graphics) {
        // Lógica de desenho padrão (vazio, a ser sobrescrito)
    }
}

export { GameObject };