function drawCircle(x, y, radius) {
  ellipse(x, y, radius, radius);
  if (radius > 2) {
    drawCircle(x, y, radius * 0.75);
  }
}

function setup() {
  createCanvas(640, 640);
}

function draw() {
  background(255);
  drawCircle(width / 2, height / 2, 1000);
}