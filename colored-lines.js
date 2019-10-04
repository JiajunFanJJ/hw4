function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  colorMode(HSB);
  for (var x = 50; x < width-40; x = x + 30) {
    stroke(x, 68, 100);
    line(x, height/2, mouseX, mouseY);
  }
}
