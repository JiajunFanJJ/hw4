function setup() {
  createCanvas(400, 400);
  colorMode(HSB, width, height, 100);
}

function draw() {
  

  for (var x = random(width); x < width; x++) {
    var y = random(height);
    stroke(x, y, 100);
    point(x, y);
  }
}
