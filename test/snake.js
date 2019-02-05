let expect = require('chai').expect;

class Snake {
    constructor(context, posicaoX = 0, posicaoY = 0, direction = "ArrowRight", sizeInPx = 20){
        this.context = context;
        this.posicaoX = posicaoX;
        this.posicaoY = posicaoY;
        this.direction = direction;
        this.sizeInPx = sizeInPx;
    }

    moveSnake(){
        if(this.direction == "ArrowRight"){
            this.posicaoX += this.sizeInPx;
        }
    }
}
let snake = new Snake();

describe('Snake', function () {
    describe('moveSnake()', function () {
        it('Se passado sem parametros, deve acrescentar 20 na posição X da cobra', function () {
            snake.moveSnake();
            expect(snake.posicaoX).to.equal(20);
        });
    });
});