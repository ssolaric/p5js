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

  attract(mover) {
    let force = p5.Vector.sub(this.position, mover.position);
    let distance = force.mag();
    distance = constrain(distance, 5.0, 25.0);
    force.normalize();

    let strength = (this.G * this.mass * mover.mass) / (distance * distance);
    force.mult(strength);
    return force;
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

class Attractor {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.mass = 20;
    this.G = 0.4;
  }

  display() {
    stroke(0);
    fill(175, 200);
    ellipse(this.position.x, this.position.y, this.mass * 2, this.mass * 2);
  }

  attract(mover) {
    let force = p5.Vector.sub(this.position, mover.position);
    let distance = force.mag();
    distance = constrain(distance, 5.0, 25.0);
    force.normalize();

    let strength = (this.G * this.mass * mover.mass) / (distance * distance);
    force.mult(strength);
    return force;
  }
}

const NUM_MOVERS = 10;
let movers = [];
let attractor;

function setup() {
  createCanvas(640, 360);
  for (let i = 0; i < NUM_MOVERS; i++) {
    movers.push(new Mover(random(0.1, 2), random(width), random(height)));
  }
  attractor = new Attractor();
}

function draw() {
  background(255);
  attractor.display();
  for (let i = 0; i < NUM_MOVERS; i++) {
    for (let j = 0; j < NUM_MOVERS; j++) {
      if (i != j) {
        const force = movers[j].attract(movers[i]);
        movers[i].applyForce(force);
      }
    }
    
    movers[i].applyForce(force);
    movers[i].update();
    movers[i].display();
  }
}
