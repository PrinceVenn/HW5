var sizes = [5, 15, 15, 7, 80, 60, 30, 30, 3];

function setup() {
  createCanvas(600, 600);
colorMode(HSB);
  noStroke();
    
  for (var i = 0; i < sizes.length; i += 1) {
    fill(sizes[i+8], 100, 75);
    ellipse(5+i*71, height/3, sizes[i], sizes[i]);
  }
}
