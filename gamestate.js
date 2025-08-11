// PlayGround/gamestate.js
export class GameStateManager {
    constructor(game, graphics) {
        this.game = game;
        this.graphics = graphics;
        this.states = new Map();
        this.currentState = null;
    }

    addState(name, state) {
        this.states.set(name, state);
    }

    setState(name) {
        if (this.currentState) {
            this.currentState.exit();
        }

        this.currentState = this.states.get(name);
        
        if (this.currentState) {
            this.currentState.enter();
        }
    }
}