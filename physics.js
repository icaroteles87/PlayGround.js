// PlayGround/physics.js

class RigidBody {
    constructor(gameObject, mass = 1) {
        this.gameObject = gameObject;
        this.mass = mass;
        this.velocity = { x: 0, y: 0 };
        this.isStatic = false;
    }

    /**
     * Define a velocidade do corpo.
     * @param {number} x
     * @param {number} y
     */
    setVelocity(x, y) {
        this.velocity.x = x;
        this.velocity.y = y;
    }
}

class Physics {
    constructor() {
        this.rigidBodies = [];
        this.gravity = { x: 0, y: 0 };
    }

    /**
     * Define a força da gravidade global.
     * @param {number} x
     * @param {number} y
     */
    setGravity(x, y) {
        this.gravity.x = x;
        this.gravity.y = y;
    }

    addBody(rigidBody) {
        this.rigidBodies.push(rigidBody);
    }

    update(deltaTime) {
        for (const body of this.rigidBodies) {
            if (body.isStatic) continue;

            // Aplica a gravidade diretamente na velocidade
            body.velocity.x += this.gravity.x * deltaTime;
            body.velocity.y += this.gravity.y * deltaTime;

            // Atualiza a posição com base na velocidade
            body.gameObject.x += body.velocity.x * deltaTime;
            body.gameObject.y += body.velocity.y * deltaTime;
        }
    }
}

export { RigidBody, Physics };