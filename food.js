function food() {
  this.x = 0;
  this.y = 0;
  this.size = 10;

  this.replace = function() {
    var rows = 400 / 20;
    var cols = 600 / 20;
    this.x = random(cols) * 20;
    this.y = random(rows) * 20;
    console.log(game.snake.body);
  }

  this.draw = function() {
    game.context.fillRect(this.x + 5, this.y + 5, this.size, this.size);
  }
}
