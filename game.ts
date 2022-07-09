const canvasWidth = 400;
const canvasHeight = 400;
const boxSizeinPx = 20;
const interval = 100;
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d");
context!.strokeStyle = "#abc32f";

const beepSound = new Audio('beep.mp3');

const snake = new Snake(canvasWidth, canvasHeight, boxSizeinPx, context)
const food = new Food(canvasWidth, canvasHeight, boxSizeinPx, context)

const pSpan = document.getElementById('snakeSize');

function draw(): void {
    listenUserKeyBoards();
    food.generateRandomFoodPosition();
    setInterval(() => {
        context!.clearRect(0, 0, canvasWidth, canvasHeight);
        drawLinesHorizontal(context, boxSizeinPx);
        drawLinesVertical(context, boxSizeinPx);
        food.generateFood();
        snake.drawSnake();
        const isColliding = food.isColliding(snake.positionX, snake.positionY)
        if (isColliding) {
            snake.isCollidingFood(isColliding);
            beepSound.play();
            pSpan!.innerHTML = snake.size.toString();
        }
        context!.save();
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

function drawLinesHorizontal(context, boxSize: number): void {
    const stageWidth = canvas.offsetWidth;
    const repeatGradeBox = stageWidth / boxSize;
    for (let i = 0; i < repeatGradeBox; i++) {
        context.beginPath();
        context.moveTo(0, boxSize);
        context.lineTo(canvasWidth, boxSize);

        context.stroke();
        context.fill();
        boxSize += 20;
    }
}

function drawLinesVertical(context, boxSize: number): void {
    const stageWidth = canvas.offsetWidth;
    const repeatGradeBox = stageWidth / boxSize;
    for (let i = 0; i < repeatGradeBox; i++) {
        context.beginPath();
        context.moveTo(boxSize, 0);
        context.lineTo(boxSize, canvasHeight);
        context.stroke();
        context.fill();
        boxSize += 20;
    }
}