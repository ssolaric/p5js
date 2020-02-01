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

  isInside(liquid) {
    return (
      this.position.x >= liquid.x &&
      this.position.x <= liquid.x + liquid.w &&
      this.position.y >= liquid.y &&
      this.position.y <= liquid.y + liquid.h
    );
  }

  drag(liquid) {
    let dragMagnitude = liquid.c * this.velocity.magSq();
    let drag = this.velocity.copy();
    drag.mult(-1);
    drag.normalize();
    drag.mult(dragMagnitude);
    this.applyForce(drag);
  }
}

class Liquid {
  // c: drag coefficient
  constructor(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
  }

  display() {
    noStroke();
    fill(175);
    rect(this.x, this.y, this.w, this.h);
  }
}

const NUM_MOVERS = 20;
let movers = [];
let liquid;

function setup() {
  createCanvas(640, 360);
  for (let i = 0; i < NUM_MOVERS; i++) {
    movers.push(new Mover(random(0.1, 5), 0, 0));
  }
  liquid = new Liquid(0, height / 2, width, height / 2, 0.1);
}

function draw() {
  background(255);
  liquid.display();
  for (let i = 0; i < NUM_MOVERS; i++) {
    if (movers[i].isInside(liquid)) {
      movers[i].drag(liquid);
    }
    const gravity = createVector(0, 0.1 * movers[i].mass);
    movers[i].applyForce(gravity);
    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();
  }
}
