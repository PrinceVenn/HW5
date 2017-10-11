var sizes = [5, 10, 15, 20, 25, 20, 15, 10, 5];

function setup() {
  createCanvas(600, 600);
colorMode(HSB);
  noStroke();
    
  for (var i = 0; i < sizes.length; i += 1) {
    fill(sizes[i]);
    ellipse(50+i*60, height/2, sizes[i], sizes[i]);
  }
}
