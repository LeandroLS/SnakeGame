/**
 * Representa o tabuleiro do jogo e concentra o desenho no canvas.
 */
class World {
  constructor(canvasWidth, canvasHeight, boxSizeInPx, canvasContext, canvas) {
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    this.boxSizeInPx = boxSizeInPx;
    this.canvasContext = canvasContext;
    this.canvas = canvas;
  }

  /** Apaga tudo o que está desenhado no canvas. */
  clearRect() {
    this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  }

  /**
   * Pinta um quadradinho do tabuleiro.
   */
  fillBox(positionX, positionY, color) {
    this.canvasContext.fillStyle = color;
    this.canvasContext.fillRect(
      positionX,
      positionY,
      this.boxSizeInPx,
      this.boxSizeInPx,
    );
  }

  /** Desenha as linhas horizontais da grade. */
  /** Desenha as linhas horizontais da grade. */
  drawLinesHorizontal() {
    this.drawGridLines(this.canvasHeight, (y) => {
      this.canvasContext.moveTo(0, y);
      this.canvasContext.lineTo(this.canvasWidth, y);
    });
  }

  /** Desenha as linhas verticais da grade. */
  drawLinesVertical() {
    this.drawGridLines(this.canvasWidth, (x) => {
      this.canvasContext.moveTo(x, 0);
      this.canvasContext.lineTo(x, this.canvasHeight);
    });
  }

  /**
   * @private
   * @param {number} axisLength Tamanho (px) do canvas no eixo em que as linhas se repetem.
   * @param {function(number): void} traceLine Traça uma linha na distância (px) informada.
   */
  drawGridLines(axisLength, traceLine) {
    const linesCount = axisLength / this.boxSizeInPx;
    for (let line = 0; line < linesCount; line++) {
      this.canvasContext.beginPath();
      traceLine(this.boxSizeInPx * (line + 1));
      this.canvasContext.stroke();
    }
  }
}
