function setup() {
  createCanvas(200, 2float r = 75;
float theta = 0;

void setup() {
  size(640,360);
  background(255);
}

void draw() {

  //[full] Polar coordinates (r,theta) are converted to Cartesian (x,y) for use in the ellipse() function.
  float x = r * cos(theta);
  float y = r * sin(theta);
  //[end]

  noStroke();
  fill(0);
  ellipse(x+width/2, y+height/2, 16, 16);

  theta += 0.01;
}00);
  background(255)
  smooth();
  noStroke();
}

function draw() {
  if (frameCount % 20 === 0) {
    fill(frameCount * 3 % 255, frameCount * 5 % 255, frameCount * 7 % 255);
    push();
    translate(100, 100);
    rotate(radians(frameCount * 2 % 360));
    rect(0, 0, 80, 20);
    pop();
  }
}
