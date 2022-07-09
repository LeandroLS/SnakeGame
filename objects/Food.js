class Food {
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
        this.context.fillStyle = "#ff5252";
        this.context.fillRect(this.randomNumberX, this.randomNumberY, this.boxSize, this.boxSize);
    }
    generateRandomFoodPosition() {
        this.randomNumberX = Math.floor(Math.random() * this.canvasWidth);
        const restOfDivisionX = this.randomNumberX % this.boxSize;
        if (restOfDivisionX != 0) {
            this.randomNumberX -= restOfDivisionX;
        }
        this.randomNumberY = Math.floor(Math.random() * this.canvasHeight);
        const restOfDivisionY = this.randomNumberY % this.boxSize;
        if (restOfDivisionY != 0) {
            this.randomNumberY -= restOfDivisionY;
        }
    }
}
