class Snake {
    constructor(context, positionX = 0, positionY = 0, direction = "ArrowRight", lastDirection = "ArrowRight", sizeInPx = 20, canvasWidth, canvasHeight){
        this.context = context;
        this.positionX = positionX;
        this.positionY = positionY;
        this.direction = direction;
        this.sizeInPx = sizeInPx;
        this.lastDirection = lastDirection;
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
    }
    
    dontColideWithEndOfCanvas() {
        if(snake.positionX > this.canvasWidth){
            snake.positionX = 0;
        }
        if(snake.positionX < 0){
            snake.positionX = this.canvasWidth;
        }
        if(snake.positionY > this.canvasHeight){
            snake.positionY = 0;
        }
        if(snake.positionY < 0){
            snake.positionY = this.canvasHeight;
        }
        
    }

    filterDirection(){
        if(this.direction == "ArrowUp"){
            if(this.lastDirection == "ArrowDown"){
                this.direction = "ArrowDown";
            } else {
                this.direction = "ArrowUp"
                this.lastDirection = "ArrowUp";
            }
        }
        if(this.direction == "ArrowDown"){
            if(this.lastDirection == "ArrowUp"){
                this.direction = "ArrowUp";
            } else {
                this.direction = "ArrowDown"
                this.lastDirection = "ArrowDown";
            }
        }
        if(this.direction == "ArrowRight"){
            if(this.lastDirection == "ArrowLeft"){
                this.direction = "ArrowLeft";
            } else {
                this.direction = "ArrowRight"
                this.lastDirection = "ArrowRight";
            }
        }
        if(this.direction == "ArrowLeft"){
            if(this.lastDirection == "ArrowRight"){
                this.direction = "ArrowRight";
            } else {
                this.direction = "ArrowLeft"
                this.lastDirection = "ArrowLeft";
            }
        }
    }

    moveSnake(){
        if(this.direction == "ArrowRight"){
            snake.positionX+=20;
        }
        if(this.direction == "ArrowLeft"){
            snake.positionX-=20;
        }
        if(this.direction == "ArrowDown"){
            snake.positionY+=20;
        }
        if(this.direction == "ArrowUp"){
            snake.positionY-=20;
        }    
    }

    drawSnake(){
        this.dontColideWithEndOfCanvas();
        this.filterDirection();
        this.moveSnake();
        context.fillRect(this.positionX, this.positionY, this.sizeInPx, this.sizeInPx);
    }
}

let snake = new Snake();