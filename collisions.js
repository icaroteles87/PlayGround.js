// PlayGround/collisions.js

const Collisions = {
    /**
     * Verifica a colisão entre dois retângulos (AABB - Axis-Aligned Bounding Box).
     * @param {Object} rect1 - O primeiro retângulo com propriedades x, y, width, height.
     * @param {Object} rect2 - O segundo retângulo com propriedades x, y, width, height.
     * @returns {boolean} - Retorna true se houver colisão, caso contrário, false.
     */
    rectsOverlap: (rect1, rect2) => {
        return rect1.x < rect2.x + rect2.width &&
               rect1.x + rect1.width > rect2.x &&
               rect1.y < rect2.y + rect2.height &&
               rect1.y + rect1.height > rect2.y;
    },

    /**
     * Verifica a colisão entre um ponto e um retângulo.
     * @param {Object} point - O ponto com propriedades x, y.
     * @param {Object} rect - O retângulo com propriedades x, y, width, height.
     * @returns {boolean} - Retorna true se houver colisão, caso contrário, false.
     */
    pointInRect: (point, rect) => {
        return point.x > rect.x &&
               point.x < rect.x + rect.width &&
               point.y > rect.y &&
               point.y < rect.y + rect.height;
    },

    // Podemos adicionar mais funções, como colisão entre círculos, no futuro.
    
    /**
     * Verifica a colisão entre dois círculos.
     * @param {Object} circle1 - O primeiro círculo com propriedades x, y, radius.
     * @param {Object} circle2 - O segundo círculo com propriedades x, y, radius.
     * @returns {boolean} - Retorna true se houver colisão, caso contrário, false.
     */
    circlesOverlap: (circle1, circle2) => {
        const dx = circle2.x - circle1.x;
        const dy = circle2.y - circle1.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < circle1.radius + circle2.radius;
    }
};

export { Collisions };