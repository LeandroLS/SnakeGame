class Food {
    canvasWidth: number;
    canvasHeight: number;
    randomNumberX: number;
    randomNumberY: number;
    context: any;
    boxSize: any;

    isColliding(positionX: number, positionY: number): boolean {
        if (positionX == this.randomNumberX && positionY == this.randomNumberY) {
            this.generateRandomFoodPosition();
            return true;
        } else {
            return false;
        }
    }

    generateFood(): void {
        this.context.fillStyle = "#ff5252";
        this.context.fillRect(this.randomNumberX, this.randomNumberY, this.boxSize, this.boxSize);
    }

    generateRandomFoodPosition(): void {
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

let food = new Food();