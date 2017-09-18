var game = {
  canvas: document.createElement("canvas"),
  context: null,
  snake: null,
  food: null,
  setup: function() {
    this.snake = new snake();
    this.snake.body.push(new bodyPiece(this.snake.x, this.snake.y, false));
    this.snake.body.push(new bodyPiece(this.snake.x + 20, this.snake.y, false));
    this.snake.body.push(new bodyPiece(this.snake.x + 40, this.snake.y, false));
    this.snake.moveLeft();
    this.food = new food();
    this.food.replace();
    //canvas set
    this.canvas.width = 600;
    this.canvas.height = 400;
    this.canvas.style.backgroundColor = "#9bc70e";
    this.context = this.canvas.getContext("2d");
    this.context.fillStyle = "black";
    var div = document.getElementById('snake');
    div.appendChild(this.canvas);
    //game loop
    setInterval(this.run, 200);
  },
  run: function() {
    game.clearMap();
    game.food.draw();
    game.snake.update();
    game.snake.draw();
    game.snake.eat(game.food);
  },
  clearMap: function() {
    this.context.clearRect(0, 0, 600, 400);
  },
};

$(document).keydown(function(e) {
  switch (e.which) {
    case 37: // left
      game.snake.moveLeft();
      break;

    case 38: // up
      game.snake.moveUp();
      break;

    case 39: // right
      game.snake.moveRight();
      break;

    case 40: // down
      game.snake.moveDown();
      break;
  }
});

function random(num) {
  return Math.floor(Math.random() * num);
}
