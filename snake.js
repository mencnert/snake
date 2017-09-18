function snake() {
  this.x = 300;
  this.y = 200;
  this.size = 18;
  this.jump = 20;
  this.speedX = 0;
  this.speedY = 0;
  this.update = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  this.moveLeft = function() {
    this.speedX = -1 * this.jump;
    this.speedY = 0;
  }
  this.moveRight = function() {
    this.speedX = 1 * this.jump;
    this.speedY = 0;
  }
  this.moveUp = function() {
    this.speedX = 0;
    this.speedY = -1 * this.jump;
  }
  this.moveDown = function() {
    this.speedX = 0;
    this.speedY = 1 * this.jump;
  }
}
