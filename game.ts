const interval = 100;
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d");
context!.strokeStyle = "#abc32f";

const beepSound = new Audio('./assets/beep.mp3');
const world = new World(400, 400, 20, context, canvas)
const snake = new Snake()
const food = new Food()
snake.world = world
food.world = world

const pSpan = document.getElementById('snakeSize');

function draw(): void {
    listenUserKeyBoards();
    food.generateRandomFoodPosition();
    setInterval(() => {
        world.clearRect();
        world.drawLinesHorizontal();
        world.drawLinesVertical()
        food.generateFood();
        snake.drawSnake();
        const isColliding = food.isColliding(snake.positionX, snake.positionY)
        if (isColliding) {
            snake.eatFood();
            beepSound.play();
            pSpan!.innerHTML = snake.size.toString();
        }
        world.save();
    }, interval);
}

/** Return the user key pressed that matches the array */
function listenUserKeyBoards(): void {
    document.addEventListener('keydown', (event) => {
        const justListen: Direction[] = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
        const keypressed = justListen.find((element) => {
            return element == event.key;
        });
        if (keypressed != null) {
            snake.direction = keypressed;
        }
    });
}