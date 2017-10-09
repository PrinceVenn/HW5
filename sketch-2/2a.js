var circle = {
  x: 100, 
  y: 100,
  vx: 3,
  vy: 4,
  r: 10,
	h: 200
};

var circle2 = {
  x: 120, 
  y: 160,
  vx: 3,
  vy: 4,
  r: 10,
	h: 190
};

var circle3 = {
	x: 90,
	y: 70,
	vx: 3,
	vy: 4,
	r:10,
	h: 250
};


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  colorMode(HSB)
	fill(circle.h,100,100);
  paint(circle);
	fill(circle2.h,100,100);
  paint(circle2);
	fill(circle3.h,100,100);
	paint(circle3);
  
  move(circle);
  move(circle2);
	move(circle3);
  
  bounce(circle);
  bounce(circle2);
	bounce(circle3);
}

function paint(circle) {
  ellipse(circle.x, circle.y, circle.r * 2, circle.r * 2);
}

function move(circle) {
  circle.x += circle.vx; // circle.x = circle.x + circle.vx
  circle.y += circle.vy;
}

function bounce(circle) {
  if (circle.x > width || circle.x < 0) {
    circle.vx = - circle.vx;
  }
  if (circle.y > height || circle.y < 0) {
    circle.vy = - circle.vy;
  }
}
