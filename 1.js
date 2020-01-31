let position;
let velocity;

function setup() {
  createCanvas(640, 360);
  position = createVector(100, 100);
  velocity = createVector(1, 3.3);
}

function draw() {
  background(255);
  let mouse = createVector(mouseX, mouseY);
  let center = createVector(width / 2, height / 2);
  mouse.sub(center);
  mouse.mult(0.5);
  translate(width / 2, height / 2);
  line(0, 0, mouse.x, mouse.y);
}
