Grid.init(100, 100);
Rover.init(0, 0, 'n');
Rover.move('ffrff');
console.log('Is in 2,2:' + (Rover.position[0] === 2 && Rover.position[1] === 2));

Grid.init(2, 2);
Rover.init(0, 0, 'n');
Rover.move('bblbb');
console.log('Is in 0,0:' + (Rover.position[0] === 0 && Rover.position[1] === 0));

Grid.init(100, 100);
Rover.init(0, 0, 'n');
Grid.setObstacles([[2, 2]]);
Rover.move('ffrff');
console.log('Is in 1,2:' + (Rover.position[0] === 1 && Rover.position[1] === 2));
