/**
 * Ponto de entrada do jogo: cria os objetos, escuta o teclado
 * e executa o ciclo principal de atualização e desenho.
 */

/** Teclas que controlam a cobra. */
const CONTROL_KEYS = Object.values(DIRECTION);

/** Cria os objetos do jogo e inicia o ciclo principal. */
function startGame() {
    const canvas = document.getElementById("canvas");
    canvas.width = GAME_CONFIG.canvasWidth;
    canvas.height = GAME_CONFIG.canvasHeight;

    const context = canvas.getContext("2d");
    context.strokeStyle = GAME_CONFIG.colors.grid;
    context.lineWidth = GAME_CONFIG.gridLineWidth; 

    const beepSound = new Audio(GAME_CONFIG.beepSoundPath);
    const scoreElement = document.getElementById("snakeSize");

    const world = new World(
        GAME_CONFIG.canvasWidth,
        GAME_CONFIG.canvasHeight,
        GAME_CONFIG.cellSize,
        context,
        canvas,
    );
    const snake = new Snake(world);
    const food = new Food(world);

    listenUserKeyBoards(snake);
    food.generateRandomFoodPosition();

    setInterval(() => {
        renderFrame(world, food, snake);

        if (food.isColliding(snake.positionX, snake.positionY)) {
            snake.eatFood();
            beepSound.play();
            scoreElement.innerHTML = snake.size.toString();
        }
    }, GAME_CONFIG.tickIntervalMs);
}

/**
 * Limpa o canvas e redesenha a grade, a comida e a cobra.
 */
function renderFrame(world, food, snake) {
    world.clearRect();
    world.drawLinesHorizontal();
    world.drawLinesVertical();
    food.generateFood();
    snake.drawSnake();
}

/**
 * Passa para a cobra a direção da seta pressionada pelo jogador.
 * Teclas que não são setas são ignoradas.
 */
function listenUserKeyBoards(snake) {
    document.addEventListener("keydown", (event) => {
        if (CONTROL_KEYS.includes(event.key)) {
            snake.direction = event.key;
        }
    });
}

window.addEventListener("load", startGame);