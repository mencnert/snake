function snake() {
  this.x = 300;
  this.y = 200;
  this.size = 16;
  this.jump = 20;
  this.speedX = 0;
  this.speedY = 0;
  this.body = [];
  this.dir = 'left';

  this.update = function() {
    var len = this.body.length;
    this.x += this.speedX;
    this.y += this.speedY;

    this.x = (this.x === 600) ? 0 : this.x;
    this.x = (this.x === -20) ? 580 : this.x;
    this.y = (this.y === 400) ? 0 : this.y;
    this.y = (this.y === -20) ? 380 : this.y;

    if (this.body[len - 1].foodIn) {
      this.body[len - 1].foodIn = false;
    } else {
      this.body.pop();
    }
    this.death(this.x, this.y);
    this.body.unshift(new bodyPiece(this.x, this.y, false));

  }

  this.draw = function() {
    var len = this.body.length;
    for (var i = 0; i < len; i++) {
      if (this.body[i].foodIn) {
        game.context.fillRect(
          this.body[i].x,
          this.body[i].y,
          this.size + 4,
          this.size + 4);
      } else {
        game.context.fillRect(
          this.body[i].x + 2,
          this.body[i].y + 2,
          this.size,
          this.size);
      }
    }
  }

  this.moveLeft = function() {
    if (this.dir != 'right') {
      this.speedX = -1 * this.jump;
      this.speedY = 0;
      this.dir = 'left';
    }
  }

  this.moveRight = function() {
    if (this.dir != 'left') {
      this.speedX = 1 * this.jump;
      this.speedY = 0;
      this.dir = 'right';
    }
  }

  this.moveUp = function() {
    if (this.dir != 'down') {
      this.speedX = 0;
      this.speedY = -1 * this.jump;
      this.dir = 'up';
    }
  }

  this.moveDown = function() {
    if (this.dir != 'up') {
      this.speedX = 0;
      this.speedY = 1 * this.jump;
      this.dir = 'down';
    }
  }

  this.stop = function() {
    this.speedX = 0;
    this.speedY = 0;
  }

  this.eat = function(food) {
    if (this.x == food.x && this.y == food.y) {
      this.body[0].foodIn = true;
      while (food.replace(this.body)) {}
    }
  }

  this.death = function(x, y) {
    this.body.forEach(function(bodyPiece) {
      if (bodyPiece.x === x && bodyPiece.y === y) {
        game.load();
      }
    })
  }
}


function bodyPiece(x, y, foodIn) {
  this.x = x;
  this.y = y;
  this.foodIn = foodIn;
}
