class Oscillator {
  constructor() {
    this.angle = createVector();
    this.velocity = createVector(random(-0.05, 0.05), random(-0.05, 0.05));
    this.amplitude = createVector(random(width / 2), random(height / 2));
  }

  oscillate() {
    this.angle.add(this.velocity);
  }

  display() {
    let x = sin(this.angle.x) * this.amplitude.x;
    let y = sin(this.angle.x) * this.amplitude.y;
    push();
    translate(width / 2, height / 2);
    stroke(0);
    fill(175);
    line(0, 0, x, y);
    ellipse(x, y, 16, 16);
    pop();
  }
}

const NUM_OSCILLATORS = 10;
let oscillators = [];

function setup() {
  createCanvas(640, 360);
  for (let i = 0; i < NUM_OSCILLATORS; i++) {
    oscillators.push(new Oscillator());
  }
}

function draw() {
  background(255);
  for (let i = 0; i < oscillators.length; i++) {
    const osc = oscillators[i];
    osc.oscillate();
    osc.display();
  }
}