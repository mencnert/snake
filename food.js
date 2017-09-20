function food() {
  this.x = 0;
  this.y = 0;
  this.size = 10;

  this.replace = function(body) {
    var rows = 400 / 20;
    var cols = 600 / 20;
    var collide = false;
    var x = this.x = random(cols) * 20;
    var y = this.y = random(rows) * 20;

    body.forEach(function(bodyPiece) {
      if (bodyPiece.x == x && bodyPiece.y == y) {
        collide = true;
      }
    });
    return collide;
  }

  this.draw = function() {
    game.context.fillRect(this.x + 5, this.y + 5, this.size, this.size);
  }
}
