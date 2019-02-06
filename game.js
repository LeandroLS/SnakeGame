let canvasWidth = 400;
let canvasHeight = 400;
let boxSize = 20;
let interval = 100;
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

snake.sizeInPx = boxSize;
snake.context = context;
snake.canvasHeight = canvasHeight;
snake.canvasWidth = canvasWidth;

food.boxSize = boxSize;
food.context = context;
food.canvasHeight = canvasHeight;
food.canvasWidth = canvasWidth;

function draw(){
    listenUserKeyBoards();
    food.generateRandomFoodPosition();
    setInterval(() => {
        context.clearRect(0,0, canvasWidth, canvasHeight);
        drawLinesHorizontal(context, boxSize);
        drawLinesVertical(context, boxSize);
        food.generateFood();
        food.detectColisionWithFood(snake.positionX, snake.positionY);
        snake.drawSnake();
        context.save();
    }, interval);
}

/** Return the user key pressed that matches the array */
function listenUserKeyBoards(){
    document.addEventListener('keydown', (event) => {
        let justListen = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
        let keypressed = justListen.find((element) => {
            return element == event.key;
        });
        if(keypressed != null && keypressed != 'undefined'){
            snake.direction = keypressed;
        }
    });
}

function drawLinesHorizontal(context, boxSize){
    let stageWidth = canvas.offsetWidth;
    let repeatGradeBox = stageWidth / boxSize;
    for(let i = 0; i < repeatGradeBox; i++){
        context.beginPath();
        context.moveTo(0, boxSize);
        context.lineTo(canvasWidth, boxSize);
        context.stroke();
        context.fill();
        boxSize += 20;
    }
}

function drawLinesVertical(context, boxSize){
    let stageWidth = canvas.offsetWidth;
    let repeatGradeBox = stageWidth / boxSize;
    for(let i = 0; i < repeatGradeBox; i++){
        context.beginPath();
        context.moveTo(boxSize, 0);
        context.lineTo(boxSize, canvasHeight);
        context.stroke();
        context.fill();
        boxSize += 20;
    }
}    