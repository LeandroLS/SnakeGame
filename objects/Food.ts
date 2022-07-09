class Food extends World {
    randomNumberX: number;
    randomNumberY: number;

    constructor(canvasWidth: number, canvesHeight: number, boxSizeInPx: number, context:CanvasRenderingContext2D) {
        super(canvasWidth, canvesHeight, boxSizeInPx, context)
    }

    isColliding(positionX: number, positionY: number): boolean {
        if (positionX == this.randomNumberX && positionY == this.randomNumberY) {
            this.generateRandomFoodPosition();
            return true;
        } else {
            return false;
        }
    }

    generateFood(): void {
        this.canvasContext.fillStyle = "#ff5252";
        this.canvasContext.fillRect(this.randomNumberX, this.randomNumberY, this.boxSizeInPx, this.boxSizeInPx);
    }

    generateRandomFoodPosition(): void {
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