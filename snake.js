UISnakeSize = document.getElementById("snakeSize");
let appleImg = new Image();
appleImg.src = 'apple.png';
let beep = new Audio('beep.mp3');
let snake = {
    directionX : 0,
    directionY : 0,
    lastDirection : 'ArrowRight',
    size: 1,
    body: []
}
let direction = null;
let randomNumber = calculateRandomNumber();
function draw(){
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext('2d');
    listenUserKeyboards();
    setInterval(() => {
        context.clearRect(0, 0, 400, 400);
        drawGrade(context);
        moveSnake(context, decideDirection(direction));
        generateFood(context, false);
        eat(context,checkColisionWithFood());
        listenSnakeTrail(context);
        checkColisionWithSnakeSelf();
        context.save();
        context.restore();
    }, 100);
}

function drawGrade(context){
    drawLinesHorizontal(context);
    drawLinesVertical(context);
}

function drawLinesHorizontal(context){
    let boxSize = 20;
    let stageWidth = canvas.offsetWidth;
    let repeatGradeBox = stageWidth / boxSize;
    for(let i = 0; i < repeatGradeBox; i++){
        context.beginPath();
        context.moveTo(0, boxSize);
        context.lineTo(400, boxSize);
        context.stroke();
        context.fill();
        boxSize += 20;
    }
}

function drawLinesVertical(context){
    let boxSize = 20;
    let stageWidth = canvas.offsetWidth;
    let repeatGradeBox = stageWidth / boxSize;
    for(let i = 0; i < repeatGradeBox; i++){
        context.beginPath();
        context.moveTo(boxSize, 0);
        context.lineTo(boxSize, 400);
        context.stroke();
        context.fill();
        boxSize += 20;
    }
}

function listenUserKeyboards(){
    document.addEventListener('keydown',(event) => {
        if(event.key == "ArrowUp" || event.key == "ArrowDown" || event.key == "ArrowRight" || event.key == "ArrowLeft"){
            direction = event;
        }
    });
}

function decideDirection(event = null){
    let direcao = (!event ? snake.lastDirection : event.key);
    
    if(direcao == "ArrowRight"){
        if(snake.lastDirection == "ArrowLeft"){
            direcao = "ArrowLeft";
            snake.lastDirection = "ArrowLeft"
        } else {
            snake.lastDirection = "ArrowRight"
        }
    }
    if(direcao == "ArrowLeft"){
        if(snake.lastDirection == "ArrowRight"){
            direcao = "ArrowRight";
            snake.lastDirection = "ArrowRight"
        } else {
            snake.lastDirection = "ArrowLeft"
        }
    }
    if(direcao == "ArrowUp"){
        if(snake.lastDirection == "ArrowDown"){
            direcao = "ArrowDown";
            snake.lastDirection = "ArrowDown"
        } else {
            snake.lastDirection = "ArrowUp"
        }
    }
    if(direcao == "ArrowDown"){
        if(snake.lastDirection == "ArrowUp"){
            direcao = "ArrowUp";
            snake.lastDirection = "ArrowUp"
        } else {
            snake.lastDirection = "ArrowDown"
        }
    }
    return direcao;
}

function moveSnake(context, direcao){
    if(direcao == "ArrowRight"){
        snake.directionX+=20;
    }
    
    if(direcao == "ArrowLeft"){
        snake.directionX-=20;
    }
    
    if(direcao == "ArrowDown"){
        snake.directionY+=20;
    }

    if(direcao == "ArrowUp"){
        snake.directionY-=20;
    }

    dontColideWithEndOfCanvas();
    context.fillStyle = 'green';
    context.fillRect(snake.directionX, snake.directionY, 20, 20);
}

function dontColideWithEndOfCanvas(){
    if(snake.directionX == canvas.width){
        snake.directionX = 0;
    }
    if(snake.directionX == -20){
        snake.directionX = canvas.width;
    }
    if(snake.directionY == canvas.height){
        snake.directionY = 0;
    }
    if(snake.directionY == -20){
        snake.directionY = canvas.height;
    }
}

function generateFood(context, wasEaten){
    if(wasEaten){
       randomNumber = calculateRandomNumber();
    }
    context.drawImage(appleImg, randomNumber.x, randomNumber.y);
    // context.fillRect(randomNumber.x, randomNumber.y, 20, 20);
}

function calculateRandomNumber(){
    let x = Math.floor(Math.random() * 400);
    let y = Math.floor(Math.random() * 400);
    let restOfDivisionX = x % 20;
    let restOfDivisionY = y % 20;
    
    if(restOfDivisionX != 0){
        x -= restOfDivisionX;
    }

    if(restOfDivisionY != 0){
        y -= restOfDivisionY;
    }

    return randomNumer = { x, y };
}
function checkColisionWithFood(){
    if(snake.directionX == randomNumber.x && snake.directionY == randomNumber.y){
        return true;
    }
}
function eat(context, eated){
    if(eated){
        generateFood(context,true);
        snake.size += 1;
        UISnakeSize.innerHTML = snake.size;
        beep.play();
    }
}

function listenSnakeTrail(context){
    snake.body.push({x : snake.directionX, y : snake.directionY});
    if(snake.size < (snake.body.length)){
        snake.body.shift();
    }
    snake.body.forEach(element => {
        context.fillRect(element.x, element.y, 20,20);
    });
}

function checkColisionWithSnakeSelf(){
    snake.body.forEach((element, index) => {
        if(element.x == snake.directionX && element.y == snake.directionY && index != snake.body.length-1){
            alert("Game Over");
            location.reload();
        }
    });
}