class Food extends World {
    constructor(canvasWidth, canvesHeight, boxSizeInPx, context) {
        super(canvasWidth, canvesHeight, boxSizeInPx, context);
    }
    isColliding(positionX, positionY) {
        if (positionX == this.randomNumberX && positionY == this.randomNumberY) {
            this.generateRandomFoodPosition();
            return true;
        }
        else {
            return false;
        }
    }
    generateFood() {
        this.canvasContext.fillStyle = "#ff5252";
        this.canvasContext.fillRect(this.randomNumberX, this.randomNumberY, this.boxSizeInPx, this.boxSizeInPx);
    }
    generateRandomFoodPosition() {
        this.randomNumberX = Math.floor(Math.random() * this.canvasWidth);
        const restOfDivisionX = this.randomNumberX % this.boxSizeInPx;
        if (restOfDivisionX != 0) {
            this.randomNumberX -= restOfDivisionX;
        }
        this.randomNumberY = Math.floor(Math.random() * this.canvasHeight);
        const restOfDivisionY = this.randomNumberY % this.boxSizeInPx;
        if (restOfDivisionY != 0) {
            this.randomNumberY -= restOfDivisionY;
        }
    }
}
