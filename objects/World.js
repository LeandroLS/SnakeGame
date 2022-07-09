class World {
    constructor(canvasWidth, canvasHeight, boxSizeInPx, canvasContext) {
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.boxSizeInPx = boxSizeInPx;
        this.canvasContext = canvasContext;
    }
    clearRect() {
        this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    }
    save() {
        this.canvasContext.save();
    }
}
