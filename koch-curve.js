class KochLine {
  constructor(a, b) {
    this.start = a.copy();
    this.end = b.copy();
  }

  display() {
    stroke(0);
    line(this.start.x, this.start.y, this.end.x, this.end.y);
  }

  kochA() {
    return this.start.copy();
  }

  kochB() {
    let ae = p5.Vector.sub(this.end, this.start);
    return this.start.copy().add(ae.div(3));
  }

  kochC() {
    let a = this.start.copy();
    let v = p5.Vector.sub(this.end, this.start);
    v.div(3);
    a.add(v);
    v.rotate(-radians(60));
    a.add(v);
    return a;
  }

  kochD() {
    let ae = p5.Vector.sub(this.end, this.start);
    return this.start.copy().add(ae.mult(2 / 3));
  }

  kochE() {
    return this.end.copy();
  }
}

class KochCurve {
  constructor(a, b) {
    this.start = a.copy();
    this.end = b.copy();
    this.lines = [new KochLine(a, b)];
  }

  generate() {
    let next = [];
    for (const line of this.lines) {
      let a = line.kochA();
      let b = line.kochB();
      let c = line.kochC();
      let d = line.kochD();
      let e = line.kochE();
      next.push(new KochLine(a, b));
      next.push(new KochLine(b, c));
      next.push(new KochLine(c, d));
      next.push(new KochLine(d, e));
    }
    this.lines = next;  
  }

  display() {
    for (let i = 0; i < this.lines.length; i++) {
      this.lines[i].display();
    }
  }
}

let kochCurve;

function setup() {
  createCanvas(640, 640);
  background(255);
  let start = createVector(0, 200);
  let end = createVector(width, 200);
  kochCurve = new KochCurve(start, end);
  for (let i = 0; i < 4; i++) {
    kochCurve.generate();
  }
  kochCurve.display();
}

function draw() {
}