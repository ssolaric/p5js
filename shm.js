let angle = 0;
let angularVelocity = 0.05;

function setup() {
  createCanvas(640,360);
}

function draw() {
  background(255);
  let amplitude = 100;
  let x = amplitude * cos(angle);
  angle += angularVelocity;
  ellipseMode(CENTER);
  stroke(0);
  fill(175);
  translate(width / 2, height / 2);
  line(0, 0, x, 0);
  ellipse(x, 0, 20, 20);
}