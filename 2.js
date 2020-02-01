class Mover {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.velocity = createVector();
    this.acceleration = createVector();
    this.mass = 1;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  display() {
    stroke(0);
    fill(175);
    ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16);
  }

  checkEdges() {
    if (this.position.x > width) {
      this.position.x = width;
      this.velocity.x = -this.velocity.x;
    } else if (this.position.x < 0) {
      this.position.x = 0;
      this.velocity.x = -this.velocity.x;
    }

    if (this.position.y > height) {
      this.position.y = height;
      this.velocity.y = -this.velocity.y;
    }
  }

  applyForce(force) {
    this.acceleration.add(p5.Vector.div(force, this.mass));
  }
}

let mover;

function setup() {
  createCanvas(640, 360);
  mover = new Mover();
}

function draw() {
  background(255);
  const gravity = createVector(0, 0.1);
  mover.applyForce(gravity);
  if (mouseIsPressed) {
    const wind = createVector(0.1, 0);
    mover.applyForce(wind);
  }
  mover.update();
  mover.display();
  mover.checkEdges();
}
