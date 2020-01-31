let position;
let velocity;

function setup() {
  createCanvas(640, 360);
  position = createVector(100, 100);
  velocity = createVector(1, 3.3);
}

function draw() {
  background(255);
  position.add(velocity);

  if (position.x > width || position.x < 0) {
    velocity.x = -velocity.x;
  }
  if (position.y > height || position.y < 0) {
    velocity.y = -velocity.y;
  }

  stroke(0);
  fill(175);
  ellipse(position.x, position.y, 16, 16);
}
