type Direction = 'ArrowRight' | 'ArrowLeft' | 'ArrowDown' | 'ArrowUp'
type XYAxis = { x: number, y: number }

class Snake extends World {
    positionX = 0
    positionY = 0
    size = 1
    tail: XYAxis[] = [{ x: 1, y: 1 }]
    direction: Direction = 'ArrowRight'
    lastDirection: Direction = 'ArrowRight'

    constructor(canvasWidth: number, canvesHeight: number, boxSizeInPx: number, canvasContext:CanvasRenderingContext2D) {
        super(canvasWidth, canvesHeight, boxSizeInPx, canvasContext)
    }

    dontColideWithEndOfCanvas(): void {
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

    filterDirection(): void {
        if (this.direction == "ArrowUp") {
            if (this.lastDirection == "ArrowDown") {
                this.direction = "ArrowDown";
            } else {
                this.direction = "ArrowUp"
                this.lastDirection = "ArrowUp";
            }
        }
        if (this.direction == "ArrowDown") {
            if (this.lastDirection == "ArrowUp") {
                this.direction = "ArrowUp";
            } else {
                this.direction = "ArrowDown"
                this.lastDirection = "ArrowDown";
            }
        }
        if (this.direction == "ArrowRight") {
            if (this.lastDirection == "ArrowLeft") {
                this.direction = "ArrowLeft";
            } else {
                this.direction = "ArrowRight"
                this.lastDirection = "ArrowRight";
            }
        }
        if (this.direction == "ArrowLeft") {
            if (this.lastDirection == "ArrowRight") {
                this.direction = "ArrowRight";
            } else {
                this.direction = "ArrowLeft"
                this.lastDirection = "ArrowLeft";
            }
        }
    }

    moveSnake(): void {
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

    isCollidingFood(result: boolean): void {
        if (result) {
            this.size += 1;
        }
    }

    getSnakeTrail(): void {
        this.tail.push({ x: this.positionX, y: this.positionY });
        if (this.tail.length >= (this.size + 1)) {
            this.tail.shift();
        }
    }

    drawTail(): void {
        this.canvasContext.fillStyle = "#abc32f";
        this.tail.forEach((element) => {
            this.canvasContext.fillRect(element.x, element.y, this.boxSizeInPx, this.boxSizeInPx);
        });
    }

    dontColideWithOwnTail(): void {
        this.tail.forEach((element, index) => {
            if (element.x == this.positionX && element.y == this.positionY && index != this.tail.length - 1) {
                alert("Game Over");
                window.location.reload();
            }
        });
    }
    drawSnake(): void {
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
