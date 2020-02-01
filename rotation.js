function setup() {
  createCanvas(200, 200);
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
