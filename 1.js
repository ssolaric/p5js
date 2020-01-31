let x = 0;
let y = 0;
let xspeed = 1;
let yspeed = 3.3;

function setup() {
  createCanvas(640, 360);
  background(255);
}

function draw() {
  background(255);
  x = x + xspeed;
  y = y + yspeed;

  if (x > width || x < 0) {
    xspeed = -xspeed;
  }
  if (y > height || y < 0) {
    yspeed = -yspeed;
  }

  stroke(0);
  fill(175);
  ellipse(x, y, 16, 16);
}
