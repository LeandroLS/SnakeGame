class Food {
    randomNumberX: number;
    randomNumberY: number;
    world: World;

    isColliding(positionX: number, positionY: number): boolean {
        if (positionX == this.randomNumberX && positionY == this.randomNumberY) {
            this.generateRandomFoodPosition();
            return true;
        } else {
            return false;
        }
    }

    generateFood(): void {
        this.world.canvasContext.fillStyle = "#ff5252";
        this.world.canvasContext.fillRect(this.randomNumberX, this.randomNumberY, this.world.boxSizeInPx, this.world.boxSizeInPx);
    }

    generateRandomFoodPosition(): void {
        this.randomNumberX = Math.floor(Math.random() * this.world.canvasWidth);
        const restOfDivisionX = this.randomNumberX % this.world.boxSizeInPx;
        if (restOfDivisionX != 0) {
            this.randomNumberX -= restOfDivisionX;
        }

        this.randomNumberY = Math.floor(Math.random() * this.world.canvasHeight);
        const restOfDivisionY = this.randomNumberY % this.world.boxSizeInPx;
        if (restOfDivisionY != 0) {
            this.randomNumberY -= restOfDivisionY;
        }
    }
}