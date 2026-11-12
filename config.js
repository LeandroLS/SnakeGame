/**
 * Configurações centrais do jogo.
 *
 * Todo valor que antes aparecia "solto" no código (tamanhos, intervalo, cores,
 * nomes de teclas) fica definido aqui, em um único lugar. Para ajustar o jogo,
 * basta alterar este arquivo.
 *
 * Este arquivo deve ser carregado ANTES dos demais no index.html.
 */

/** Parâmetros gerais do jogo. */
const GAME_CONFIG = Object.freeze({
    /** Largura do canvas, em pixels. */
    canvasWidth: 400,
    /** Altura do canvas, em pixels. */
    canvasHeight: 400,
    /** Lado de cada quadradinho do tabuleiro, em pixels. */
    cellSize: 20,
    /** Intervalo entre cada atualização do jogo, em milissegundos. */
    tickIntervalMs: 120,
    /** Caminho do som tocado quando a cobra come. */
      gridLineWidth: 2,
    beepSoundPath: "./assets/beep.mp3",
    colors: Object.freeze({
        grid: "#abc32f",
        snake: "#abc32f",
        food: "#ff5252",
    }),
});

/** Direções possíveis. O valor é o `event.key` da tecla de seta correspondente. */
const DIRECTION = Object.freeze({
    //SETAS
    UP: "ArrowUp",
    DOWN: "ArrowDown",
    LEFT: "ArrowLeft",
    RIGHT: "ArrowRight",
});

/** Direção oposta de cada direção (usada para impedir que a cobra dê meia-volta). */
const OPPOSITE_DIRECTION = Object.freeze({
    //SETAS
    [DIRECTION.UP]: DIRECTION.DOWN,
    [DIRECTION.DOWN]: DIRECTION.UP,
    [DIRECTION.LEFT]: DIRECTION.RIGHT,
    [DIRECTION.RIGHT]: DIRECTION.LEFT,

});

/** Quanto cada direção desloca a cobra, em quadradinhos, em cada eixo. */
const DIRECTION_VECTOR = Object.freeze({
    [DIRECTION.UP]: { x: 0, y: -1 },
    [DIRECTION.DOWN]: { x: 0, y: 1 },
    [DIRECTION.LEFT]: { x: -1, y: 0 },
    [DIRECTION.RIGHT]: { x: 1, y: 0 },
});