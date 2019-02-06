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
            chai.expect(snake.positionX).to.equal(400);
            snake.positionX = 401;
            snake.dontColideWithEndOfCanvas();
            chai.expect(snake.positionX).to.equal(0);
            snake.positionY = -1;
            snake.dontColideWithEndOfCanvas();
            chai.expect(snake.positionY).to.equal(400);
            snake.positionY = 401;
            snake.dontColideWithEndOfCanvas();
            chai.expect(snake.positionY).to.equal(0);
        });
    });
});