class Snake extends World {
    constructor(canvasWidth, canvesHeight, boxSizeInPx, canvasContext) {
        super(canvasWidth, canvesHeight, boxSizeInPx, canvasContext);
        this.positionX = 0;
        this.positionY = 0;
        this.size = 1;
        this.tail = [{ x: 1, y: 1 }];
        this.direction = 'ArrowRight';
        this.lastDirection = 'ArrowRight';
    }
    dontColideWithEndOfCanvas() {
        if (this.positionX >= this.canvasWidth) {
            this.positionX = -this.boxSizeInPx;
        }
        if (this.positionX < (-this.boxSizeInPx)) {
            this.positionX = this.canvasWidth;
        }
        if (this.positionY >= this.canvasHeight) {
            this.positionY = -this.boxSizeInPx;
        }
        if (this.positionY < (-this.boxSizeInPx)) {
            this.positionY = this.canvasHeight;
        }
    }
    filterDirection() {
        if (this.direction == "ArrowUp") {
            if (this.lastDirection == "ArrowDown") {
                this.direction = "ArrowDown";
            }
            else {
                this.direction = "ArrowUp";
                this.lastDirection = "ArrowUp";
            }
        }
        if (this.direction == "ArrowDown") {
            if (this.lastDirection == "ArrowUp") {
                this.direction = "ArrowUp";
            }
            else {
                this.direction = "ArrowDown";
                this.lastDirection = "ArrowDown";
            }
        }
        if (this.direction == "ArrowRight") {
            if (this.lastDirection == "ArrowLeft") {
                this.direction = "ArrowLeft";
            }
            else {
                this.direction = "ArrowRight";
                this.lastDirection = "ArrowRight";
            }
        }
        if (this.direction == "ArrowLeft") {
            if (this.lastDirection == "ArrowRight") {
                this.direction = "ArrowRight";
            }
            else {
                this.direction = "ArrowLeft";
                this.lastDirection = "ArrowLeft";
            }
        }
    }
    moveSnake() {
        if (this.direction == "ArrowRight") {
            this.positionX += 20;
        }
        if (this.direction == "ArrowLeft") {
            this.positionX -= 20;
        }
        if (this.direction == "ArrowDown") {
            this.positionY += 20;
        }
        if (this.direction == "ArrowUp") {
            this.positionY -= 20;
        }
    }
    isCollidingFood(result) {
        if (result) {
            this.size += 1;
        }
    }
    getSnakeTrail() {
        this.tail.push({ x: this.positionX, y: this.positionY });
        if (this.tail.length >= (this.size + 1)) {
            this.tail.shift();
        }
    }
    drawTail() {
        this.canvasContext.fillStyle = "#abc32f";
        this.tail.forEach((element) => {
            this.canvasContext.fillRect(element.x, element.y, this.boxSizeInPx, this.boxSizeInPx);
        });
    }
    dontColideWithOwnTail() {
        this.tail.forEach((element, index) => {
            if (element.x == this.positionX && element.y == this.positionY && index != this.tail.length - 1) {
                alert("Game Over");
                window.location.reload();
            }
        });
    }
    drawSnake() {
        this.dontColideWithEndOfCanvas();
        this.filterDirection();
        this.moveSnake();
        this.getSnakeTrail();
        this.drawTail();
        this.dontColideWithOwnTail();
        this.canvasContext.fillStyle = "#abc32f";
        this.canvasContext.fillRect(this.positionX, this.positionY, this.boxSizeInPx, this.boxSizeInPx);
    }
}
