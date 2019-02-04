let expect = require('chai').expect;

class Snake {
    constructor(context, posicaoX = 0, posicaoY = 0, direction, sizeInPx){
        this.context = context;
        this.posicaoX = posicaoX;
        this.posicaoY = posicaoY;
        this.direction = direction;
        this.sizeInPx = sizeInPx;
    }

    moveSnake(){
        if(this.direction == "ArrowRight"){
            this.posicaoX += sizeInPx;
        }
    }
}
let snake = new Snake();

describe('Snake', function () {
    describe('moveSnake()', function () {
        it('should return -1 when the value is not present', function () {
            let snake = new Snake();
            snake.moveSnake();
            expect(snake.posicaoX).to.equal(20);
        });
    });
});