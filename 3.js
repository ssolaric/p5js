let angle = 0;
let angularVelocity = 0;
let angularAcceleration = 0.001;

function drawBaton(x1, y1, x2, y2) {
  strokeWeight(3);
  line(x1, y1, x2, y2);
  strokeWeight(2);
  fill(150);
  ellipse(x1, y1, 15, 15);
  fill(150);
  ellipse(x2, y2, 15, 15);
}

function setup() {
  createCanvas(800, 800);
  background(255);

}

function draw() {
  background(255);
  fill(175);
  stroke(0);
  rectMode(CENTER);
  translate(width / 2, height / 2);
  rotate(angle);
  line(-50, 0, 50, 0);
  ellipse(50, 0, 8, 8);
  ellipse(-50, 0, 8, 8);

  angularVelocity += angularAcceleration;
  angle += angularVelocity;
}