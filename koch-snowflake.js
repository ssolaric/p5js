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
    for (const line of this.lines) {
      line.display();
    }
  }
}

class KochSnowflake {
  constructor(a, b, c) {
    this.curves = [
      new KochCurve(a, b),
      new KochCurve(b, c),
      new KochCurve(c, a)
    ];
  }

  generate() {
    for (const curve of this.curves) {
      curve.generate();
    }
  }

  display() {
    for (const curve of this.curves) {
      curve.display();
    }
  }
}

let kochSnowflake;

function setup() {
  createCanvas(750, 750);
  background(255);
  let a = createVector(200, 200);
  let b = createVector(500, 200);
  let c = createVector(350, 200 + 150 * sqrt(3));
  kochSnowflake = new KochSnowflake(a, b, c);
  for (let i = 0; i < 5; i++) {
    kochSnowflake.generate();
  }
  kochSnowflake.display();
}

function draw() {}
