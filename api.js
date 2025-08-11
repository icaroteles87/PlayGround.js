// PlayGround/api.js

import { Game } from './render.js';
import { Graphics } from './graphics.js';
import { Camera } from './camera.js';
import { Input } from './input.js';
import { GameObject } from './gameobject.js';
import { Button } from './button.js';
import { GameStateManager } from './gamestate.js'; // Importa do novo arquivo
import { Scene } from './scenes.js';
import { MathUtils } from './math.js';
import { Time } from './time.js';
import { Debugger } from './debugger.js';
import { TransitionManager } from './transitions.js';
import { Collisions } from './collisions.js';
import { RigidBody, Physics } from './physics.js';
import { ParticleSystem } from './particles.js';
import { MobileControls, MobileButton } from './mobile.js';
import { Tilemap } from './tilemap.js';
import { ParallaxManager, ParallaxLayer } from './parallax.js';

export const PlayGround = {
    Game,
    Graphics,
    Camera,
    Input,
    GameObject,
    Button,
    GameStateManager,
    Scene,
    MathUtils,
    Time,
    Debugger,
    TransitionManager,
    Collisions,
    RigidBody,
    Physics,
    ParticleSystem,
    MobileControls,
    MobileButton,
    Tilemap,
    ParallaxManager,
    ParallaxLayer
};