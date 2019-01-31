let directionSnake = {
    x : 0, 
    y : 0,
    lastDirection : ''
};
let defaultDirection = 'ArrowRight';
function draw(){
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext('2d');
    listenUserKeyboards();
    setInterval(() => {
        context.clearRect(0, 0, 400, 400);
        drawGrade(context);
        moveSnake(context, decideDirection());
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
        decideDirection(event);
    });
}

function decideDirection(event = null){
    let direcao = (!event ? defaultDirection : event.key);
    if(event == null) direcao = directionSnake.lastDirection;
    
    if(direcao == "ArrowRight" && directionSnake.lastDirection != "ArrowLeft"){
        directionSnake.lastDirection = 'ArrowRight';
    }
    
    if(direcao == "ArrowLeft" && directionSnake.lastDirection != "ArrowRight"){
        directionSnake.lastDirection = 'ArrowLeft';
    }
    
    if(direcao == "ArrowDown" && directionSnake.lastDirection != "ArrowUp"){
        directionSnake.lastDirection = 'ArrowDown';
    }

    if(direcao == "ArrowUp" && directionSnake.lastDirection != "ArrowDown"){
        directionSnake.lastDirection = 'ArrowUp';
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

    teleportSnake();

    context.fillRect(directionSnake.x, directionSnake.y, 20, 20);
}

function teleportSnake(){
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

