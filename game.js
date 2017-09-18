var game = {
  canvas: document.createElement("canvas"),
  context: null,
  snake: null,
  setup: function() {
    this.snake = new snake();
    //canvas set
    this.canvas.width = 600;
    this.canvas.height = 400;
    this.canvas.style.backgroundColor = "#9bc70e";
    this.context = this.canvas.getContext("2d");
    var div = document.getElementById('snake');
    div.appendChild(this.canvas);
    //game loop
    setInterval(this.run, 200);
  },
  run: function() {
    game.clearMap();
    game.snake.update();
    game.draw();
  },
  clearMap: function() {
    this.context.clearRect(0, 0, 600, 400);
  },
  draw: function() {
    this.context.fillStyle = "black";
    this.context.fillRect(this.snake.x + 1, this.snake.y + 1, this.snake.size, this.snake.size);
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
