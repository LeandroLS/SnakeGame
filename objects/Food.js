/** Comida que a cobra precisa alcançar para crescer. */
class Food {

    constructor(world) {
        this.world = world;
        /** Posição X (px) da comida, sempre alinhada à grade. */
        this.positionX = 0;
        /** Posição Y (px) da comida, sempre alinhada à grade. */
        this.positionY = 0;
    }

    /**
     * Verifica se a cabeça da cobra está em cima da comida.
     * ATENÇÃO: se estiver, também sorteia uma nova posição para a comida.

     */
    isColliding(positionX, positionY) {
        const isEaten = positionX == this.positionX && positionY == this.positionY;
        if (isEaten) {
            this.generateRandomFoodPosition();
        }
        return isEaten;
    }

    /** Desenha a comida na posição atual. */
    generateFood() {
        this.world.fillBox(this.positionX, this.positionY, GAME_CONFIG.colors.food);
    }

    /** Sorteia uma nova posição para a comida, alinhada à grade do tabuleiro. */
    generateRandomFoodPosition() {
        this.positionX = this.randomAlignedCoordinate(this.world.canvasWidth);
        this.positionY = this.randomAlignedCoordinate(this.world.canvasHeight);
    }

    /**
     * Sorteia uma coordenada entre 0 e `limit` e a "encaixa" no quadradinho
     * da grade, descartando o resto da divisão pelo tamanho do quadradinho.
     */
    randomAlignedCoordinate(limit) {
        const randomValue = Math.floor(Math.random() * limit);
        return randomValue - (randomValue % this.world.boxSizeInPx);
    }
}