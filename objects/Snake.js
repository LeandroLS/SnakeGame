/** A cobra: controla a própria posição, direção, crescimento e desenho. */
class Snake {
    constructor(world) {
        this.world = world;
        /** Posição X (px) da cabeça. */
        this.positionX = 0;
        /** Posição Y (px) da cabeça. */
        this.positionY = 0;
        /** Tamanho atual da cobra, em quadradinhos. */
        this.size = 1;
      
        this.tail = [{ x: 1, y: 1 }];
        /** Direção pedida pelo jogador (alterada pelo teclado em game.js). */
        this.direction = DIRECTION.RIGHT;
        /** Última direção realmente seguida, usada para bloquear meia-volta. */
        this.lastDirection = DIRECTION.RIGHT;
    }

    /**
     * Executa um passo completo da cobra: move, atualiza o corpo,
     * checa colisão com o próprio corpo e desenha.
     */
    drawSnake() {
        this.dontColideWithEndOfCanvas();
        this.filterDirection();
        this.moveSnake();
        this.getSnakeTrail();
        this.drawTail();
        this.dontColideWithOwnTail();
        this.drawBox(this.positionX, this.positionY);
    }

    /** Aumenta o tamanho da cobra em um quadradinho. */
    eatFood() {
        this.size += 1;
    }

    /**
     * Faz a cobra reaparecer do lado oposto quando sai do tabuleiro.
     */
    dontColideWithEndOfCanvas() {
        this.positionX = this.wrapCoordinate(this.positionX, this.world.canvasWidth);
        this.positionY = this.wrapCoordinate(this.positionY, this.world.canvasHeight);
    }

    /**
     * Impede a cobra de dar meia-volta: se o jogador pedir a direção oposta
     * à última seguida, ela continua na direção anterior.
     */
    filterDirection() {
        const isReversing = OPPOSITE_DIRECTION[this.direction] === this.lastDirection;
        if (isReversing) {
            this.direction = this.lastDirection;
        } else {
            this.lastDirection = this.direction;
        }
    }

    /** Move a cabeça um quadradinho na direção atual. */
    moveSnake() {
        const vector = DIRECTION_VECTOR[this.direction];
        this.positionX += vector.x * this.world.boxSizeInPx;
        this.positionY += vector.y * this.world.boxSizeInPx;
    }

    /**
     * Registra a posição atual da cabeça no corpo e descarta o excesso
     * da ponta da cauda para manter o tamanho da cobra.
     */
    getSnakeTrail() {
        this.tail.push({ x: this.positionX, y: this.positionY });
        if (this.tail.length >= this.size + 1) {
            this.tail.shift();
        }
    }

    /** Desenha o corpo da cobra. */
    drawTail() {
        this.tail.forEach((segment) => this.drawBox(segment.x, segment.y));
    }

    /** Termina o jogo se a cabeça encostar em alguma parte do próprio corpo. */
    dontColideWithOwnTail() {
        const lastIndex = this.tail.length - 1; // o último segmento é a própria cabeça
        const hitItself = this.tail.some(
            (segment, index) =>
                segment.x == this.positionX && segment.y == this.positionY && index != lastIndex,
        );
        if (hitItself) {
            this.gameOver();
        }
    }

    /** Avisa o jogador e reinicia a página. */
    gameOver() {
        alert("Game Over");
        window.location.reload();
    }

    /**
     * Aplica a regra de "dar a volta" a uma coordenada de um eixo.
     */
    wrapCoordinate(coordinate, limit) {
        const boxSize = this.world.boxSizeInPx;
        if (coordinate >= limit) {
            return -boxSize;
        }
        if (coordinate < -boxSize) {
            return limit;
        }
        return coordinate;
    }

    /**
     * Pinta um quadradinho com a cor da cobra.
     */
    drawBox(positionX, positionY) {
        this.world.fillBox(positionX, positionY, GAME_CONFIG.colors.snake);
    }
}