class Mover {
  constructor(mass, x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector();
    this.acceleration = createVector();
    this.mass = mass;
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
      // this.position.x = width;
      this.velocity.x = -this.velocity.x;
    } else if (this.position.x < 0) {
      // this.position.x = 0;
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

const NUM_MOVERS = 20;
let movers = [];

function setup() {
  createCanvas(640, 360);
  for (let i = 0; i < NUM_MOVERS; i++) {
    movers.push(new Mover(random(0.1, 5), 0, 0));
  }
}

function draw() {
  background(255);
  const wind = createVector(0.001, 0);
  for (let i = 0; i < NUM_MOVERS; i++) {
    const gravity = createVector(0, 0.1 * movers[i].mass);
    const mu = 0.01;
    const friction = movers[i].velocity.copy();
    friction.mult(-1);
    friction.normalize();
    friction.mult(mu);

    movers[i].applyForce(friction);
    movers[i].applyForce(wind);
    movers[i].applyForce(gravity);
    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();
  }
}
