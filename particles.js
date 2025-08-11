// PlayGround/particles.js

class Particle {
    constructor(x, y, color, size, velocity, lifespan) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = size;
        this.velocity = velocity;
        this.lifespan = lifespan;
        this.age = 0;
    }

    update(deltaTime) {
        this.x += this.velocity.x * deltaTime;
        this.y += this.velocity.y * deltaTime;
        this.age += deltaTime;
    }

    draw(graphics) {
        const opacity = 1 - (this.age / this.lifespan);
        graphics.drawRect(this.x, this.y, this.size, this.size, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${opacity})`);
    }

    isDead() {
        return this.age >= this.lifespan;
    }
}

class ParticleSystem {
    constructor() {
        this.particles = [];
    }

    emit(x, y, count, color, minSize, maxSize, minVelocity, maxVelocity, minLifespan, maxLifespan) {
        for (let i = 0; i < count; i++) {
            const size = Math.random() * (maxSize - minSize) + minSize;
            const velocity = {
                x: (Math.random() * (maxVelocity.x - minVelocity.x)) + minVelocity.x,
                y: (Math.random() * (maxVelocity.y - minVelocity.y)) + minVelocity.y
            };
            const lifespan = Math.random() * (maxLifespan - minLifespan) + minLifespan;
            this.particles.push(new Particle(x, y, color, size, velocity, lifespan));
        }
    }

    update(deltaTime) {
        this.particles = this.particles.filter(p => !p.isDead());
        for (const particle of this.particles) {
            particle.update(deltaTime);
        }
    }

    draw(graphics) {
        for (const particle of this.particles) {
            particle.draw(graphics);
        }
    }
}

export { ParticleSystem };