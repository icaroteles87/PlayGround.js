export class Text {
    constructor(x, y, text, font, color, alignment = 'left') {
        this.x = x;
        this.y = y;
        this.text = text;
        this.font = font;
        this.color = color;
        this.alignment = alignment;
    }

    draw(graphics) {
        graphics.drawText(
            this.text,
            this.x,
            this.y,
            this.alignment,
            this.color,
            this.font
        );
    }
}