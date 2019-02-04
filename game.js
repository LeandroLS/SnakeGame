let canvasWidth = 400;
let canvasHeight = 400;
let boxSize = 20;
let interval = 100;
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

class Snake {
    constructor(context, posicaoX = 0, posicaoY = 0, direction = "ArrowRight", sizeInPx){
        this.context = context;
        this.posicaoX = posicaoX;
        this.posicaoY = posicaoY;
        this.direction = direction;
        this.sizeInPx = sizeInPx;
    }

    moveSnake(){
        if(this.direction == "ArrowRight"){
            this.posicaoX += sizeInPx;
        }
    }
}

let snake = new Snake();
snake.context = context;
function draw(){
    setInterval(() => {
        drawLinesHorizontal(context, boxSize);
        drawLinesVertical(context, boxSize);
        
    }, interval);
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