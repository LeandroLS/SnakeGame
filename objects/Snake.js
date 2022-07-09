var Snake = /** @class */ (function () {
    function Snake() {
        this.positionX = 0;
        this.positionY = 0;
        this.size = 1;
        this.sizeInPx = 20;
        this.tail = [{ x: 1, y: 1 }];
        this.direction = "ArrowRight";
        this.lastDirection = "ArrowRight";
    }
    Snake.prototype.dontColideWithEndOfCanvas = function () {
        if (this.positionX >= this.canvasWidth) {
            this.positionX = -this.sizeInPx;
        }
        if (this.positionX < (-this.sizeInPx)) {
            this.positionX = this.canvasWidth;
        }
        if (this.positionY >= this.canvasHeight) {
            this.positionY = -this.sizeInPx;
        }
        if (this.positionY < (-this.sizeInPx)) {
            this.positionY = this.canvasHeight;
        }
    };
    Snake.prototype.filterDirection = function () {
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
    };
    Snake.prototype.moveSnake = function () {
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
    };
    Snake.prototype.isCollidingFood = function (result) {
        if (result) {
            this.size += 1;
        }
    };
    Snake.prototype.getSnakeTrail = function () {
        this.tail.push({ x: this.positionX, y: this.positionY });
        if (this.tail.length >= (this.size + 1)) {
            this.tail.shift();
        }
    };
    Snake.prototype.drawTail = function () {
        var _this = this;
        this.context.fillStyle = "#abc32f";
        this.tail.forEach(function (element) {
            _this.context.fillRect(element.x, element.y, _this.sizeInPx, _this.sizeInPx);
        });
    };
    Snake.prototype.dontColideWithOwnTail = function () {
        var _this = this;
        this.tail.forEach(function (element, index) {
            if (element.x == _this.positionX && element.y == snake.positionY && index != _this.tail.length - 1) {
                alert("Game Over");
                window.location.reload();
            }
        });
    };
    Snake.prototype.drawSnake = function () {
        this.dontColideWithEndOfCanvas();
        this.filterDirection();
        this.moveSnake();
        this.getSnakeTrail();
        this.drawTail();
        this.dontColideWithOwnTail();
        this.context.fillStyle = "#abc32f";
        this.context.fillRect(this.positionX, this.positionY, this.sizeInPx, this.sizeInPx);
    };
    return Snake;
}());
var snake = new Snake();
