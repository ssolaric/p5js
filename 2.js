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

const NUM_MOVERS = 20;
let movers = [];

function setup() {
  createCanvas(640, 360);
  for (let i = 0; i < NUM_MOVERS; i++) {
    movers.push(new Mover(random(0.1, 5), 400, 400));
  }
}

function draw() {
  background(255);
  const wind = createVector(0.01, 0);
  const gravity = createVector(0, 0.1);
  for (let i = 0; i < NUM_MOVERS; i++) {
    movers[i].applyForce(wind);
    movers[i].applyForce(gravity);
    const k = 0.001;
    const pushBackForce = createVector(-k * movers[i].position.x, -k * movers[i].position.y);
    movers[i].applyForce(pushBackForce);
    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();
  }
}
