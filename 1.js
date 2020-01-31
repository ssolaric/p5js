class Mover {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(-0.001, 0.01);
    this.topSpeed = 4;
  }

  update() {
    let mouse = createVector(mouseX, mouseY);
    let dir = p5.Vector.sub(mouse, this.position); // direction from the circle towards the mouse pointer
    dir.normalize();
    dir.mult(0.5);
    this.acceleration = dir;

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topSpeed);
    this.position.add(this.velocity);
  }

  display() {
    stroke(0);
    fill(175);
    ellipse(this.position.x, this.position.y, 16, 16);
  }

  checkEdges() {
    if (this.position.x > width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }

    if (this.position.y > height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = height;
    }
  }
}

const NUM_MOVERS = 20;
let movers = [];

function setup() {
  createCanvas(640, 360);
  background(255);

  for (let i = 0; i < NUM_MOVERS; i++) {
    movers.push(new Mover());
  }
}

function draw() {
  background(255);
  // console.log(movers.length);
  for (let i = 0; i < movers.length; i++) {
    movers[i].update();
    movers[i].checkEdges();
    movers[i].display();
  }
}
