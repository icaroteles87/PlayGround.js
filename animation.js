export class Animation {
    constructor(frames, frameSpeed) {
        this.frames = frames;
        this.frameSpeed = frameSpeed; // Velocidade em milissegundos por frame
        this.currentFrame = 0;
        this.lastFrameTime = 0;
        this.isLooping = true;
    }

    update(time) {
        if (this.isLooping) {
            const now = time.now;
            if (now - this.lastFrameTime > this.frameSpeed) {
                this.currentFrame = (this.currentFrame + 1) % this.frames.length;
                this.lastFrameTime = now;
            }
        }
    }

    draw(graphics, x, y, width, height) {
        const frame = this.frames[this.currentFrame];
        graphics.drawImage(frame, x, y, width, height);
    }
}

// Função para pré-carregar as imagens
export async function preloadImages(imagePaths) {
    const images = [];
    for (const path of imagePaths) {
        const img = new Image();
        img.src = path;
        await new Promise(resolve => {
            img.onload = resolve;
        });
        images.push(img);
    }
    return images;
}