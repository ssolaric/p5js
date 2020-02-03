function drawCircle(x, y, radius) {
  stroke(0);
  noFill();
  ellipse(x, y, radius, radius);
  if (radius > 8) {
    drawCircle(x + radius / 2, y, radius / 2);
    drawCircle(x - radius / 2, y, radius / 2);
    drawCircle(x, y + radius / 2, radius / 2);
    drawCircle(x, y - radius / 2, radius / 2);
  }
}

function setup() {
  createCanvas(640, 640);
}

function draw() {
  background(255);
  drawCircle(width / 2, height / 2, 200);
}