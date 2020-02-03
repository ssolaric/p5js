function sierpinski(a, b, c, depth) {
  if (depth == 1) {
    fill(0);
    triangle(a.x, a.y, b.x, b.y, c.x, c.y);
    return;    
  }
  // line(a.x, a.y, b.x, b.y);
  // line(b.x, b.y, c.x, c.y);
  // line(c.x, c.y, a.x, a.y);
  let ab = p5.Vector.sub(b, a);
  let bc = p5.Vector.sub(c, b);
  let ca = p5.Vector.sub(a, c);
  let midAB = p5.Vector.add(a, p5.Vector.div(ab, 2));
  let midBC = p5.Vector.add(b, p5.Vector.div(bc, 2));
  let midCA = p5.Vector.add(c, p5.Vector.div(ca, 2));
  sierpinski(a, midAB, midCA, depth - 1);
  sierpinski(midAB, b, midBC, depth - 1);
  sierpinski(midCA, midBC, c, depth - 1);
}


function setup() {
  background(255);
  createCanvas(640, 640);
  noStroke();
  let a = createVector(200, 300);
  let b = createVector(500, 300);
  let c = createVector(350, 300 - 150 * sqrt(3));
  sierpinski(a, b, c, 3);
}

function draw() {
}