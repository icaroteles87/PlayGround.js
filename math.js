// PlayGround/math.js

const MathUtils = {
    // --- Funções de Restrição e Interpolação ---
    /** Limita um valor entre um mínimo e um máximo. */
    clamp: (value, min, max) => Math.max(min, Math.min(value, max)),
    
    /** Interpolação linear entre dois valores. */
    lerp: (a, b, t) => a + (b - a) * MathUtils.clamp(t, 0, 1),
    
    /** Mapeia um valor de um intervalo para outro. */
    map: (value, inMin, inMax, outMin, outMax) => {
        return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    },
    
    /** Interpolação linear de forma suave. */
    smoothStep: (t) => t * t * (3 - 2 * t),

    // --- Funções de Geometria e Distância ---
    /** Calcula a distância euclidiana entre dois pontos 2D. */
    distance: (x1, y1, x2, y2) => {
        const dx = x2 - x1;
        const dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
    },
    
    /** Calcula o quadrado da distância (mais rápido para comparações). */
    distSquared: (x1, y1, x2, y2) => {
        const dx = x2 - x1;
        const dy = y2 - y1;
        return dx * dx + dy * dy;
    },
    
    /** Converte graus para radianos. */
    toRadians: (degrees) => degrees * (Math.PI / 180),
    
    /** Converte radianos para graus. */
    toDegrees: (radians) => radians * (180 / Math.PI),

    // --- Funções de Aleatoriedade ---
    /** Gera um número inteiro aleatório entre um mínimo e um máximo (inclusive). */
    randomInt: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
    
    /** Gera um número de ponto flutuante aleatório entre um mínimo e um máximo. */
    randomFloat: (min, max) => Math.random() * (max - min) + min,
    
    /** Gera um valor booleano aleatório. */
    randomBool: () => Math.random() >= 0.5,

    // --- Funções de Vetores (representados como objetos {x, y}) ---
    /** Adiciona dois vetores. */
    vecAdd: (v1, v2) => ({ x: v1.x + v2.x, y: v1.y + v2.y }),
    
    /** Subtrai dois vetores. */
    vecSub: (v1, v2) => ({ x: v1.x - v2.x, y: v1.y - v2.y }),
    
    /** Multiplica um vetor por um escalar. */
    vecScale: (v, scalar) => ({ x: v.x * scalar, y: v.y * scalar }),
    
    /** Normaliza um vetor para ter magnitude 1. */
    vecNormalize: (v) => {
        const mag = Math.sqrt(v.x * v.x + v.y * v.y);
        return mag === 0 ? { x: 0, y: 0 } : { x: v.x / mag, y: v.y / mag };
    },
    
    /** Calcula a magnitude (comprimento) de um vetor. */
    vecMagnitude: (v) => Math.sqrt(v.x * v.x + v.y * v.y),
    
    /** Calcula o produto escalar (dot product) de dois vetores. */
    vecDot: (v1, v2) => v1.x * v2.x + v1.y * v2.y,
    
    /** Calcula o ângulo de um vetor em relação ao eixo X. */
    vecAngle: (v) => Math.atan2(v.y, v.x),
    
    /** Cria um vetor a partir de um ângulo e magnitude. */
    vecFromAngle: (angle, magnitude = 1) => ({
        x: Math.cos(angle) * magnitude,
        y: Math.sin(angle) * magnitude
    }),
    
    // --- Funções de Colisão Simples (AABB) ---
    /** Verifica se dois retângulos estão colidindo. */
    rectsOverlap: (r1, r2) => {
        return r1.x < r2.x + r2.width &&
               r1.x + r1.width > r2.x &&
               r1.y < r2.y + r2.height &&
               r1.y + r1.height > r2.y;
    },
    
    /** Verifica se um ponto está dentro de um retângulo. */
    pointInRect: (px, py, rx, ry, rw, rh) => {
        return px > rx && px < rx + rw && py > ry && py < ry + rh;
    },

    // --- Funções de Arredondamento e Sinal ---
    /** Arredonda um valor para o inteiro mais próximo. */
    round: (value) => Math.round(value),
    
    /** Arredonda para baixo. */
    floor: (value) => Math.floor(value),
    
    /** Arredonda para cima. */
    ceil: (value) => Math.ceil(value),
    
    /** Retorna o sinal de um número. */
    sign: (value) => Math.sign(value),
    
    /** Envolve um valor em torno de um intervalo. */
    wrap: (value, min, max) => {
        const range = max - min;
        return min + ((((value - min) % range) + range) % range);
    },

    // --- Funções Adicionais ---
    /** Calcula o seno de um ângulo. */
    sin: (angle) => Math.sin(angle),
    
    /** Calcula o cosseno de um ângulo. */
    cos: (angle) => Math.cos(angle),

    /** Retorna o valor absoluto de um número. */
    abs: (value) => Math.abs(value),

    /** Calcula a raiz quadrada. */
    sqrt: (value) => Math.sqrt(value)
};

export { MathUtils };