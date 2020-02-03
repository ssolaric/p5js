function cantor(x, y, len) {
  line(x, y, x + len, y);
  if (len >= 1) {
    cantor(x, y + 20, len / 3);
    cantor(x + 2 * len / 3, y + 20, len / 3);
  }
}

function setup() {
  createCanvas(640, 640);
}

function draw() {
  background(255);
  cantor(10, 20, width - 20);
}