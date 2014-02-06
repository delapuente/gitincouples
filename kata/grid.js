var Grid = {
  init: function (sizeX, sizeY) {
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.obstacles = [];
  },
  setObstacles: function (obstacles) {
    this.obstacles = obstacles;
  },
  thereIsObstacle: function (x, y) {
    for (var i = 0; i < this.obstacles.length; i++) {
      var obstacle = this.obstacles[i];
      if (obstacle[0] === x && obstacle[1] === y) {
        return true;
      }
    }
    return false;
  }
};
