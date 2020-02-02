let r = 75;
let theta = 0;

function setup() {
  createCanvas(640,360);
  background(255);
}

function draw() {
  let x = r * cos(theta);
  let y = r * sin(theta);

  noStroke();
  fill(0);
  ellipse(x+width/2, y+height/2, 16, 16);

  theta += 0.1;
  r += 0.5;
}