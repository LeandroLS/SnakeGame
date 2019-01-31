let directionSnake = {
    x : 0, 
    y : 0,
    lastDirection : 'ArrowRight'
};
let defaultDirection = 'ArrowRight';
let direction = null;

function draw(){
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext('2d');
    listenUserKeyboards();
    setInterval(() => {
        context.clearRect(0, 0, 400, 400);
        drawGrade(context);
        moveSnake(context, decideDirection(direction));
        generateFood(context);
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
        direction = event;
    });
}

function decideDirection(event = null){
    let direcao = (!event ? defaultDirection : event.key);
    if(event == null) direcao = directionSnake.lastDirection;
    
    if(direcao == "ArrowRight"){
        if(directionSnake.lastDirection == "ArrowLeft"){
            direcao = "ArrowLeft";
            directionSnake.lastDirection = "ArrowLeft"
        } else {
            directionSnake.lastDirection = "ArrowRight"
        }
    }
    if(direcao == "ArrowLeft"){
        if(directionSnake.lastDirection == "ArrowRight"){
            direcao = "ArrowRight";
            directionSnake.lastDirection = "ArrowRight"
        } else {
            directionSnake.lastDirection = "ArrowLeft"
        }
    }
    if(direcao == "ArrowUp"){
        if(directionSnake.lastDirection == "ArrowDown"){
            direcao = "ArrowDown";
            directionSnake.lastDirection = "ArrowDown"
        } else {
            directionSnake.lastDirection = "ArrowUp"
        }
    }
    if(direcao == "ArrowDown"){
        if(directionSnake.lastDirection == "ArrowUp"){
            direcao = "ArrowUp";
            directionSnake.lastDirection = "ArrowUp"
        } else {
            directionSnake.lastDirection = "ArrowDown"
        }
    }
    return direcao;
}

function moveSnake(context, direcao){
    if(direcao == "ArrowRight"){
        directionSnake.x+=20;
    }
    
    if(direcao == "ArrowLeft"){
        directionSnake.x-=20;
    }
    
    if(direcao == "ArrowDown"){
        directionSnake.y+=20;
    }

    if(direcao == "ArrowUp"){
        directionSnake.y-=20;
    }

    dontColideWithEndOfCanvas();

    context.fillRect(directionSnake.x, directionSnake.y, 20, 20);
}

function dontColideWithEndOfCanvas(){
    if(directionSnake.x == canvas.width){
        directionSnake.x = 0;
    }
    if(directionSnake.x == -20){
        directionSnake.x = canvas.width;
    }
    if(directionSnake.y == canvas.height){
        directionSnake.y = 0;
    }
    if(directionSnake.y == -20){
        directionSnake.y = canvas.height;
    }
}

function generateFood(context){
    let randomNumberX = Math.floor(Math.random() * 400);
    let randomNumberY = Math.floor(Math.random() * 400);
    context.fillRect(80, 80, 20, 20);
}
