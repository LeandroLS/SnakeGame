snake.canvasWidth = canvasWidth;
snake.canvasHeight = canvasHeight;
food.boxSize = boxSize;
food.canvasHeight = canvasHeight;
food.canvasWidth = canvasWidth;
describe("Snake", () => {
    describe("filterDirection()", () => {
        it("Should filter snake direction", () => {
            snake.direction = "ArrowRight";
            snake.lastDirection = "ArrowLeft";
            snake.filterDirection();
            chai.expect(snake.direction).to.equal("ArrowLeft");
            chai.expect(snake.lastDirection).to.equal("ArrowLeft");
            
            snake.direction = "ArrowUp";
            snake.lastDirection = "ArrowDown";
            snake.filterDirection();
            chai.expect(snake.direction).to.equal("ArrowDown");

            snake.direction = "ArrowDown";
            snake.lastDirection = "ArrowUp";
            snake.filterDirection();
            chai.expect(snake.direction).to.equal("ArrowUp");

            snake.direction = "ArrowLeft";
            snake.lastDirection = "ArrowRight";
            snake.filterDirection();
            chai.expect(snake.direction).to.equal("ArrowRight");
        });
    });

    describe("moveSnake()", () => {
        it("Should change snake positions", () => {
            snake.moveSnake();
            if(snake.direction == "ArrowRight"){
                chai.expect(snake.positionX).to.equal(20);
                chai.expect(snake.positionY).to.equal(0);
            }
            if(snake.direction == "ArrowLeft"){
                chai.expect(snake.positionX).to.equal(-20);
                chai.expect(snake.positionY).to.equal(0);
            }
            if(snake.direction == "ArrowDown"){
                chai.expect(snake.positionX).to.equal(0);
                chai.expect(snake.positionY).to.equal(20);
            }
            if(snake.direction == "ArrowUp"){
                chai.expect(snake.positionX).to.equal(0);
                chai.expect(snake.positionY).to.equal(-20);
            }
        });
    });

    describe("dontColideWithEndOfCanvas()", () => {
        it("Should make end of canvas not blockable.", () => {
            snake.positionX = -1;
            snake.dontColideWithEndOfCanvas();
            chai.expect(snake.positionX).to.equal(-1);
            snake.positionX = 401;
            snake.dontColideWithEndOfCanvas();
            chai.expect(snake.positionX).to.equal(-20);
            snake.positionY = -1;
            snake.dontColideWithEndOfCanvas();
            chai.expect(snake.positionY).to.equal(-1);
            snake.positionY = 401;
            snake.dontColideWithEndOfCanvas();
            chai.expect(snake.positionY).to.equal(-20);
        });
    });

    describe("getSnakeTrail()", () => {
        it("Should get the path that the snake is taking.", () => {
            snake.getSnakeTrail();
            chai.expect(snake.tail).to.have.lengthOf(1);
            snake.tail.push(['1', '2', '3']);
            snake.size = 2;
            chai.expect(snake.tail).to.have.lengthOf(snake.size);
        });
    });
});

describe("Food", () => {
    describe("generateRandomFoodPosition()", () => {
        it("Should generate a random number position in canvas width and height", () => {
        
            food.generateRandomFoodPosition();
            chai.expect(food.randomNumberX).to.be.below(canvasWidth);
            chai.expect(food.randomNumberX).to.be.above(0);
            chai.expect(food.randomNumberY).to.be.below(canvasHeight);
            chai.expect(food.randomNumberY).to.be.above(0);
        });
    });
});
