function setup() {
  createCanvas(400, 400);
  loop(1000);
  colorMode(HSB, width, height, 100);
}

function draw() {
  var y = random(height);

  for (var x = random(width); x < width; x++) {
    stroke(x, y, 100);
    point(x, y);
  }
}
