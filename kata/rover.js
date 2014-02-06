var Rover = {
  init: function (x, y, orientation) {
    this.position = [x, y];
    this.orientation = orientation;
  },
  move: function (commands) {
    for (var i = 0; i < commands.length; i++) {
      var c = commands[i];
      switch (c) {
        case 'f':
          this.moveForward();
        break;
        case 'b':
          this.moveBackward();
        break;
        case 'r':
          this.turnRight();
        break;
        case 'l':
          this.turnLeft();
        break;
        default:
          console.log('Unrecognized command: ' + c);
        break;
      }
    }
  },
  moveForward: function () {
    var formerPosition = [
      this.position[0],
      this.position[1]
    ];
    switch (this.orientation) {
      case 'n':
        this.position[1] = (this.position[1] + 1) % Grid.sizeY;
      break;
      case 'e':
        this.position[0] = (this.position[0] + 1) % Grid.sizeX;
      break;
      case 's':
        this.position[1] = (this.position[1] - 1);
        if (this.position[1] < 0) {
          this.position[1] = Grid.sizeY + this.position[1];
        }
      break;
      case 'w':
        this.position[0] = (this.position[0] - 1);
        if (this.position[0] < 0) {
          this.position[0] = Grid.sizeX + this.position[0];
        }
      break;
    }
    if (Grid.thereIsObstacle(this.position[0], this.position[1])) {
      this.position = formerPosition;
    }
  },
  moveBackward: function () {
    var formerPosition = [
      this.position[0],
      this.position[1]
    ];
    switch (this.orientation) {
      case 's':
        this.position[1] = (this.position[1] + 1) % Grid.sizeY;
      break;
      case 'w':
        this.position[0] = (this.position[0] + 1) % Grid.sizeX;
      break;
      case 'n':
        this.position[1] = (this.position[1] - 1);
        if (this.position[1] < 0) {
          this.position[1] = Grid.sizeY + this.position[1];
        }
      break;
      case 'e':
        this.position[0] = (this.position[0] - 1);
        if (this.position[0] < 0) {
          this.position[0] = Grid.sizeX + this.position[0];
        }
      break;
    }
    if (Grid.thereIsObstacle(this.position[0], this.position[1])) {
      this.position = formerPosition;
    }
  },
  turnRight: function () {
    switch (this.orientation) {
      case 'n':
        this.orientation = 'e';
      break;
      case 'e':
        this.orientation = 's';
      break;
      case 's':
        this.orientation = 'w';
      break;
      case 'w':
        this.orientation = 'n';
      break;
    }
  },
  turnLeft: function () {
    switch (this.orientation) {
      case 'n':
        this.orientation = 'w';
      break;
      case 'w':
        this.orientation = 's';
      break;
      case 's':
        this.orientation = 'e';
      break;
      case 'e':
        this.orientation = 'n';
      break;
    }
  }
};
