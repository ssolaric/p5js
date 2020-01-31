let x = 0;
let y = 0;

function setup() {
  createCanvas(600, 600);
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "black";
  background(200);
  ellipse(width/2, height/2, 50, 50);
}

function draw() {
  ellipse(x, y, 1, 1);
  x = x + 1;
  y = 0.3 * x;
}
