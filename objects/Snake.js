class Snake {
    constructor(context, positionX = 0, positionY = 0, direction = "ArrowRight", lastDirection = "ArrowRight", sizeInPx = 20, canvasWidth, canvasHeight, size = 1){
        this.context = context;
        this.positionX = positionX;
        this.positionY = positionY;
        this.direction = direction;
        this.sizeInPx = sizeInPx;
        this.lastDirection = lastDirection;
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.size = size;
        this.tail = [];
    }
    
    dontColideWithEndOfCanvas() {
        if(snake.positionX >= this.canvasWidth){
            snake.positionX = -this.sizeInPx;
        }
        if(snake.positionX < (-this.sizeInPx)){
            snake.positionX = this.canvasWidth;
        }
        if(snake.positionY >= this.canvasHeight){
            snake.positionY = -this.sizeInPx;
        }
        if(snake.positionY < (-this.sizeInPx)){
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
            this.positionX+=20;
        }
        if(this.direction == "ArrowLeft"){
            this.positionX-=20;
        }
        if(this.direction == "ArrowDown"){
            this.positionY+=20;
        }
        if(this.direction == "ArrowUp"){
            this.positionY-=20;
        }    
    }

    isCollidingFood(result){
        if(result){
            this.size += 1;
        }
    }

    getSnakeTrail(){
        this.tail.push({ x : this.positionX, y : this.positionY });
        if(this.tail.length >= (this.size+1)){
            this.tail.shift();
        }
    }

    drawTail(){
        this.context.fillStyle = "#abc32f";
        this.tail.forEach((element) => {
            this.context.fillRect(element.x, element.y, this.sizeInPx, this.sizeInPx);
        });
    }

    dontColideWithOwnTail(){
        this.tail.forEach((element, index) => {
            if(element.x == this.positionX && element.y == snake.positionY && index != this.tail.length-1){
                alert("Game Over");
                window.location.reload();
            }
        });
    }
    drawSnake(){
        this.dontColideWithEndOfCanvas();
        this.filterDirection();
        this.moveSnake();
        this.getSnakeTrail();
        this.drawTail();
        this.dontColideWithOwnTail();
        this.context.fillStyle = "#abc32f";
        this.context.fillRect(this.positionX, this.positionY, this.sizeInPx, this.sizeInPx);
    }
}

let snake = new Snake();