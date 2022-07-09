class World {
    canvasWidth: number
    canvasHeight: number
    boxSizeInPx: number
    canvasContext: CanvasRenderingContext2D

    constructor(canvasWidth: number, canvasHeight: number, boxSizeInPx: number, canvasContext: CanvasRenderingContext2D) {
        this.canvasHeight = canvasHeight
        this.canvasWidth = canvasWidth
        this.boxSizeInPx = boxSizeInPx
        this.canvasContext = canvasContext
    }

    clearRect(): void {
        this.canvasContext.clearRect(0,0,this.canvasWidth, this.canvasHeight)
    }

    save(): void {
        this.canvasContext.save()
    }
}