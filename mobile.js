// PlayGround/mobile.js

class MobileButton {
    constructor(x, y, width, height, text) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.text = text;
        this.isPressed = false;
    }

    draw(graphics) {
        const color = this.isPressed ? '#555' : '#888';
        graphics.drawRect(this.x, this.y, this.width, this.height, color);
        graphics.drawText(this.text, this.x + this.width / 2, this.y + this.height / 2, 'center', 'white', '20px Arial');
    }

    isTouched(touchX, touchY) {
        return touchX >= this.x &&
               touchX <= this.x + this.width &&
               touchY >= this.y &&
               touchY <= this.y + this.height;
    }
}

class MobileControls {
    constructor(game) {
        this.game = game;
        this.buttons = new Map();
        this.isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints;
        
        if (this.isTouchDevice) {
            this.game.canvas.addEventListener('touchstart', this.handleTouchStart.bind(this), false);
            this.game.canvas.addEventListener('touchend', this.handleTouchEnd.bind(this), false);
            this.game.canvas.addEventListener('touchcancel', this.handleTouchEnd.bind(this), false);
        }
    }

    addButton(name, button) {
        this.buttons.set(name, button);
    }

    handleTouchStart(event) {
        event.preventDefault();
        const rect = this.game.canvas.getBoundingClientRect();
        for (const touch of event.changedTouches) {
            const touchX = touch.clientX - rect.left;
            const touchY = touch.clientY - rect.top;
            this.buttons.forEach(button => {
                if (button.isTouched(touchX, touchY)) {
                    button.isPressed = true;
                }
            });
        }
    }

    handleTouchEnd(event) {
        event.preventDefault();
        const rect = this.game.canvas.getBoundingClientRect();
        for (const touch of event.changedTouches) {
            const touchX = touch.clientX - rect.left;
            const touchY = touch.clientY - rect.top;
            this.buttons.forEach(button => {
                if (button.isTouched(touchX, touchY)) {
                    button.isPressed = false;
                }
            });
        }
    }

    isPressed(name) {
        return this.buttons.has(name) && this.buttons.get(name).isPressed;
    }

    draw(graphics) {
        if (!this.isTouchDevice) return;
        this.buttons.forEach(button => button.draw(graphics));
    }
}

export { MobileControls, MobileButton };