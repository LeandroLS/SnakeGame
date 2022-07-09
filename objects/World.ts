class World {
    canvasWidth: number
    canvasHeight: number
    boxSizeInPx: number
    canvasContext: CanvasRenderingContext2D
    canvas : HTMLCanvasElement

    constructor(
        canvasWidth: number, 
        canvasHeight: number, 
        boxSizeInPx: number, 
        canvasContext: CanvasRenderingContext2D,
        canvas: HTMLCanvasElement
    ) {
        this.canvasHeight = canvasHeight
        this.canvasWidth = canvasWidth
        this.boxSizeInPx = boxSizeInPx
        this.canvasContext = canvasContext
        this.canvas = canvas
    }

    clearRect(): void {
        this.canvasContext.clearRect(0,0,this.canvasWidth, this.canvasHeight)
    }

    save(): void {
        this.canvasContext.save()
    }

    drawLinesHorizontal(): void {
        let box = 20
        const stageWidth = this.canvas.offsetWidth;
        const repeatGradeBox = stageWidth / box;
        for (let i = 0; i < repeatGradeBox; i++) {
            this.canvasContext.beginPath();
            this.canvasContext.moveTo(0, box);
            this.canvasContext.lineTo(this.canvasWidth, box);
            this.canvasContext.stroke();
            this.canvasContext.fill();
            box += 20;
        }
    }

     drawLinesVertical(): void {
        let box = 20
        const stageWidth = this.canvas.offsetWidth;
        const repeatGradeBox = stageWidth / box;
        for (let i = 0; i < repeatGradeBox; i++) {
            this.canvasContext.beginPath();
            this.canvasContext.moveTo(box, 0);
            this.canvasContext.lineTo(box, this.canvasHeight);
            this.canvasContext.stroke();
            this.canvasContext.fill();
            box += 20;
        }
    }
}