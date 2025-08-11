// PlayGround/button.js

// Importamos a classe GameObject para herdar suas propriedades
import { GameObject } from './gameobject.js';

class Button extends GameObject {
    constructor(x, y, width, height, text, color = '#cccccc', textColor = 'black') {
        super(x, y, width, height); // Chama o construtor da classe pai
        this.text = text;
        this.color = color;
        this.textColor = textColor;
        this.isHovered = false;
        this.isPressed = false;
        this.onClick = () => {}; // A função a ser executada quando o botão é clicado
    }

    // Verifica se o mouse está sobre o botão
    isMouseOver(mouseX, mouseY) {
        return mouseX > this.x && mouseX < this.x + this.width &&
               mouseY > this.y && mouseY < this.y + this.height;
    }

    // Adiciona as funcionalidades de botões, como mouseEnter, mouseDown etc.
    update(input) {
        const mouseOver = this.isMouseOver(input.mouse.x, input.mouse.y);
        
        if (mouseOver && !this.isHovered) {
            // mouseEnter
            this.isHovered = true;
            console.log('Mouse entrou no botão');
        } else if (!mouseOver && this.isHovered) {
            // mouseLeave
            this.isHovered = false;
            console.log('Mouse saiu do botão');
        }

        if (mouseOver && input.mouse.leftButton && !this.isPressed) {
            // mouseDown
            this.isPressed = true;
            console.log('Botão pressionado');
        } else if (mouseOver && !input.mouse.leftButton && this.isPressed) {
            // mouseUp e buttonClicked
            this.isPressed = false;
            this.onClick(); // Executa a função onClick
            console.log('Botão clicado');
        } else if (!mouseOver) {
            this.isPressed = false;
        }
    }

    draw(graphics) {
        // Altera a cor do botão quando o mouse está sobre ele
        graphics.drawRect(this.x, this.y, this.width, this.height, this.isHovered ? '#dddddd' : this.color);
        
        // Desenha o texto do botão
        graphics.drawText(this.text, this.x + this.width / 2, this.y + this.height / 2, 'center', this.textColor);
    }
}

export { Button };