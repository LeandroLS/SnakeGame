type Direction = 'ArrowRight' | 'ArrowLeft' | 'ArrowDown' | 'ArrowUp'
type XYAxis = { x: number, y: number }

class Snake {
    positionX = 0
    positionY = 0
    size = 1
    tail: XYAxis[] = [{ x: 1, y: 1 }]
    direction: Direction = 'ArrowRight'
    lastDirection: Direction = 'ArrowRight'
    world: World;

    dontColideWithEndOfCanvas(): void {
        if (this.positionX >= this.world.canvasWidth) {
            this.positionX = -this.world.boxSizeInPx;
        }
        if (this.positionX < (-this.world.boxSizeInPx)) {
            this.positionX = this.world.canvasWidth;
        }
        if (this.positionY >= this.world.canvasHeight) {
            this.positionY = -this.world.boxSizeInPx;
        }
        if (this.positionY < (-this.world.boxSizeInPx)) {
            this.positionY = this.world.canvasHeight;
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
    
    eatFood(): void {
        this.size += 1
    }

    getSnakeTrail(): void {
        this.tail.push({ x: this.positionX, y: this.positionY });
        if (this.tail.length >= (this.size + 1)) {
            this.tail.shift();
        }
    }

    drawTail(): void {
        this.world.canvasContext.fillStyle = "#abc32f";
        this.tail.forEach((element) => {
            this.world.canvasContext.fillRect(element.x, element.y, this.world.boxSizeInPx, this.world.boxSizeInPx);
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
        this.world.canvasContext.fillStyle = "#abc32f";
        this.world.canvasContext.fillRect(this.positionX, this.positionY, this.world.boxSizeInPx, this.world.boxSizeInPx);
    }
}
